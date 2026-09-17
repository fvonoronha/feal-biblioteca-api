const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { db, Prisma, parseError, notFoundError, withTransaction } = require("../../utils/db.service");
const { getOnlyDigits, normalizeSearchText } = require("../../utils/string.service");

// Mesmo prazo anunciado para o usuário final (ver mensagens do front, "availableTooltip"),
// usado como vencimento padrão quando o admin não escolhe uma data específica, e também no
// vencimento do novo empréstimo gerado por uma renovação.
const DEFAULT_LOAN_DURATION_IN_DAYS = 15;

const LOAN_JOIN = Prisma.sql`
    FROM volume_loan vl
    left join volume v on v.id = vl.volume_id
    left join book b on b.id = v.book_id
    LEFT JOIN publisher p ON p.id = v.publisher_id
    LEFT JOIN category c ON c.id = b.category_id
    left join "user" u on u.id = vl.user_id
    left join "user" cbu on cbu.id = vl.created_by_user_id
    left join "user" ubu on ubu.id = vl.updated_by_user_id
`;

const LOAN_SELECT_FIELDS = Prisma.sql`
    vl.id,
    vl.created_at,
    vl.status,
    vl.loan_date,
    vl.due_date,
    vl.return_date,
    vl.description,
    vl.renewed_from_loan_id,

    -- Operadores que lançaram e deram baixa neste empréstimo, exibidos de forma discreta
    -- na listagem administrativa (nunca no encontrado pelo próprio usuário na área "meus
    -- empréstimos", já filtrada por essa própria rota, mas sem PII adicional exposta aqui
    -- além do nome do funcionário).
    COALESCE(json_build_object(
        'id', cbu.id,
        'name', cbu.name,
        'display_name', cbu.display_name
    ), null) as created_by_user,

    COALESCE(json_build_object(
        'id', ubu.id,
        'name', ubu.name,
        'display_name', ubu.display_name
    ), null) as updated_by_user,

COALESCE(json_build_object(
    'id', u.id,
    'slug', u.slug,
    'name', u.name,
    'display_name', u.display_name,
    'phone', u.phone

), null) as user,

COALESCE(json_build_object(
    'id', v.id,
    'slug', v.slug,
    'year', v.year,
    'edition', v.edition,
    'isbn', v.isbn,
    'isbn_old', v.isbn_old,
    'pages', v.pages,
    'cover_url', v.cover_url,
    'back_url', v.back_url,
    'images_url', v.images_url,
    'label', v.label,
    'shelf', v.shelf,
    'description', v.description,
    'keywords', v.keywords,
    'all_time_access_count', v.all_time_access_count,
    'last_month_access_count', v.last_month_access_count,
    'book', COALESCE(json_build_object(
    'id', b.id, 'slug', b.slug, 'title', b.title,
    'subtitle', b.subtitle, 'summary', b.summary,
    'description', b.description, 'recommended_for', b.recommended_for,
    'keywords', b.keywords, 'last_month_access_count', b.last_month_access_count,
    'all_time_access_count', b.all_time_access_count
), null),
    'publisher',  COALESCE(json_build_object(
    'id', p.id, 'slug', p.slug, 'name', p.name,
    'abbreviation', p.abbreviation, 'avatar_url', p.avatar_url
), null),
    'category', COALESCE(json_build_object(
    'id', c.id, 'slug', c.slug, 'name', c.name
), null),
    'tags', COALESCE((
    SELECT json_agg(json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
    FROM tag _t
    JOIN book_tag _bt ON _t.id = _bt.tag_id
    WHERE _bt.book_id = b.id AND _bt.status = 'A'
), '[]'::json),
    'authors', COALESCE((
    SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit))
    FROM author _a
    JOIN volume_author _va ON _a.id = _va.author_id
    WHERE _va.volume_id = v.id AND _va.status = 'A'
), '[]'::json)

), null) as volume
`;

// Sem filtro/ordenação explícita, a listagem prioriza o que precisa de atenção primeiro:
// atrasados, depois em aberto (ambos por vencimento mais próximo), por último os concluídos
// (mais recentes primeiro).
const DEFAULT_ORDER = Prisma.sql`
    CASE
        WHEN vl.return_date IS NULL AND vl.due_date < now() THEN 0
        WHEN vl.return_date IS NULL THEN 1
        ELSE 2
    END ASC,
    CASE WHEN vl.return_date IS NULL THEN vl.due_date END ASC,
    vl.return_date DESC
`;

function buildLoanWhereQuery(filter) {
    const statusFilter = filter?.status ? Prisma.sql` AND vl.status = ${filter.status}` : Prisma.sql` AND vl.status='A'`;
    const userFilter = filter?.user_id ? Prisma.sql` AND vl.user_id = ${BigInt(filter.user_id)}` : Prisma.sql``;
    const volumeFilter = filter?.volume_id ? Prisma.sql` AND vl.volume_id = ${BigInt(filter.volume_id)}` : Prisma.sql``;
    const overdueFilter = filter?.overdue ? Prisma.sql` AND vl.return_date IS NULL AND vl.due_date < NOW()` : Prisma.sql``;

    let stateFilter = Prisma.sql``;
    if (filter?.state === "overdue") {
        stateFilter = Prisma.sql` AND vl.return_date IS NULL AND vl.due_date < NOW()`;
    } else if (filter?.state === "open") {
        stateFilter = Prisma.sql` AND vl.return_date IS NULL AND vl.due_date >= NOW()`;
    } else if (filter?.state === "returned") {
        stateFilter = Prisma.sql` AND vl.return_date IS NOT NULL`;
    }

    const rawUserSearch = (filter?.user_search || "").trim();
    const cleanUserSearch = normalizeSearchText(rawUserSearch);
    const digitsUserSearch = getOnlyDigits(rawUserSearch);

    const userSearchFilter =
        cleanUserSearch || digitsUserSearch
            ? Prisma.sql` AND (
                ${cleanUserSearch ? Prisma.sql`unaccent(lower(u.name)) ~* ${cleanUserSearch} OR unaccent(lower(u.display_name)) ~* ${cleanUserSearch}` : Prisma.sql`false`}
                ${digitsUserSearch ? Prisma.sql` OR u.phone ~* ${digitsUserSearch} OR u.document ~* ${digitsUserSearch}` : Prisma.sql``}
            )`
            : Prisma.sql``;

    const cleanVolumeSearch = normalizeSearchText((filter?.volume_search || "").trim());
    const volumeSearchFilter = cleanVolumeSearch
        ? Prisma.sql` AND (b.search_title ~* ${cleanVolumeSearch} OR v.label ~* ${cleanVolumeSearch} OR v.isbn ~* ${cleanVolumeSearch} OR v.isbn_old ~* ${cleanVolumeSearch})`
        : Prisma.sql``;

    return Prisma.sql`${statusFilter}${userFilter}${volumeFilter}${overdueFilter}${stateFilter}${userSearchFilter}${volumeSearchFilter}`;
}

module.exports = {
    async listLoans(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    due_date: "vl.due_date",
                    loan_date: "vl.loan_date",
                    return_date: "vl.return_date",
                    created_at: "vl.created_at",
                    user_name: "u.name",
                    volume_title: "b.search_title"
                }
            });

            const orderQuery = paginationObj.orderBy ? Prisma.sql`${paginationObj.orderQuery}` : DEFAULT_ORDER;
            const whereQuery = buildLoanWhereQuery(filter);

            const loans = await db.$queryRaw`
                SELECT ${LOAN_SELECT_FIELDS}
                ${LOAN_JOIN}
                WHERE 1=1 ${whereQuery}
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total
                ${LOAN_JOIN}
                WHERE 1=1 ${whereQuery}
                `;

            return {
                elements: loans,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async returnLoan(id, req) {
        try {
            const loanId = parseInt(id);

            if (Number.isNaN(loanId)) {
                throw notFoundError("Empréstimo inválido");
            }

            const updated = await db.$queryRaw`
                UPDATE volume_loan
                SET return_date = now(), updated_at = now(), updated_by_user_id = ${req.response.params.user.id}
                WHERE return_date IS NULL AND status = 'A' AND id = ${loanId}
                RETURNING id`;

            if (!updated[0]) {
                throw notFoundError("Empréstimo não encontrado ou já devolvido");
            }

            const [loan] = await db.$queryRaw`
                SELECT ${LOAN_SELECT_FIELDS}
                ${LOAN_JOIN}
                WHERE vl.id = ${loanId}`;

            return loan;
        } catch (err) {
            return parseError(err);
        }
    },

    // "Renovar" é, na prática, um "dar baixa" + "novo empréstimo" atômicos: fecha o
    // empréstimo atual (mesmo rastro de auditoria de uma devolução normal) e cria um novo
    // para o mesmo par volume/usuário com +15 dias, encadeado via renewed_from_loan_id.
    // As duas operações precisam da mesma transação: sem isso, uma falha entre elas deixaria
    // o volume "sem dono" (devolvido mas sem novo empréstimo) ou duplicaria o empréstimo ativo.
    async renewLoan(id, req) {
        try {
            const loanId = parseInt(id);

            if (Number.isNaN(loanId)) {
                throw notFoundError("Empréstimo inválido");
            }

            const operatorId = req.response.params.user.id;
            const dueDate = new Date(Date.now() + DEFAULT_LOAN_DURATION_IN_DAYS * 24 * 60 * 60 * 1000);

            const newLoanId = await withTransaction(async (tx) => {
                const closed = await tx.$queryRaw`
                    UPDATE volume_loan
                    SET return_date = now(), updated_at = now(), updated_by_user_id = ${operatorId}
                    WHERE id = ${loanId} AND return_date IS NULL AND status = 'A'
                    RETURNING volume_id, user_id`;

                if (!closed[0]) {
                    throw notFoundError("Empréstimo não encontrado ou já devolvido");
                }

                const inserted = await tx.$queryRaw`
                    INSERT INTO volume_loan (volume_id, user_id, due_date, created_by_user_id, renewed_from_loan_id)
                    VALUES (${closed[0].volume_id}, ${closed[0].user_id}, ${dueDate}, ${operatorId}, ${loanId})
                    RETURNING id`;

                return inserted[0].id;
            });

            const [loan] = await db.$queryRaw`
                SELECT ${LOAN_SELECT_FIELDS}
                ${LOAN_JOIN}
                WHERE vl.id = ${newLoanId}`;

            return loan;
        } catch (err) {
            // Mesma rede de segurança contra corrida usada em createLoan: a constraint parcial
            // `volume_loan_volume_id_active_key` garante um único empréstimo ativo por volume
            // mesmo que dois cliques de "renovar"/"novo empréstimo" cheguem ao mesmo tempo.
            if (err?.code === "P2002") {
                return {
                    httpStatus: "CONFLICT",
                    error: [{ field: "volume_id", message: "Este volume já está emprestado no momento." }]
                };
            }
            return parseError(err);
        }
    },

    async createLoan(data, req) {
        try {
            const volumeId = BigInt(data.volume_id);
            const userId = BigInt(data.user_id);

            const [volumeRows, userRows, activeLoanRows] = await Promise.all([
                db.$queryRaw`SELECT id FROM volume WHERE id = ${volumeId} AND status = 'A'`,
                db.$queryRaw`SELECT id FROM "user" WHERE id = ${userId} AND status IN ('A', 'P')`,
                db.$queryRaw`SELECT id FROM volume_loan WHERE volume_id = ${volumeId} AND return_date IS NULL AND status = 'A'`
            ]);

            if (!volumeRows[0]) {
                throw notFoundError("Volume não encontrado ou indisponível");
            }

            if (!userRows[0]) {
                throw notFoundError("Usuário não encontrado ou inativo");
            }

            if (activeLoanRows[0]) {
                return {
                    httpStatus: "CONFLICT",
                    error: [{ field: "volume_id", message: "Este volume já está emprestado no momento." }]
                };
            }

            const dueDate = data.due_date || new Date(Date.now() + DEFAULT_LOAN_DURATION_IN_DAYS * 24 * 60 * 60 * 1000);

            const created = await db.$queryRaw`
                INSERT INTO volume_loan (volume_id, user_id, due_date, description, created_by_user_id)
                VALUES (${volumeId}, ${userId}, ${dueDate}, ${data.description || null}, ${req.response.params.user.id})
                RETURNING id`;

            const [loan] = await db.$queryRaw`
                SELECT ${LOAN_SELECT_FIELDS}
                ${LOAN_JOIN}
                WHERE vl.id = ${created[0].id}`;

            return loan;
        } catch (err) {
            // Rede de segurança contra a corrida que o pré-check acima não cobre: a constraint
            // parcial `volume_loan_volume_id_active_key` (ver migration 20260915120000) garante
            // isso a nível de banco mesmo que duas requisições passem pelo pré-check ao mesmo tempo.
            if (err?.code === "P2002") {
                return {
                    httpStatus: "CONFLICT",
                    error: [{ field: "volume_id", message: "Este volume já está emprestado no momento." }]
                };
            }
            return parseError(err);
        }
    }
};
