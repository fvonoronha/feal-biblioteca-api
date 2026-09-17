const { getSlug } = require("../../utils/id.service");
const { getOnlyDigits, normalizeSearchText } = require("../../utils/string.service");
const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { db, Prisma, parseError, notFoundError } = require("../../utils/db.service");

const USER_SEARCH_FIELDS = {
    id: true,
    slug: true,
    name: true,
    display_name: true,
    phone: true,
    document: true,
    status: true
};

module.exports = {
    // Só usado por ADMIN/LIBRARIAN (ex.: escolher o usuário de um novo empréstimo) - por isso
    // exige uma busca não vazia, para nunca despejar a base inteira de usuários (PII) de uma vez.
    async searchUsers(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    name: "u.name"
                }
            });

            const orderQuery = paginationObj.orderBy ? Prisma.sql`${paginationObj.orderQuery}` : Prisma.sql`u.name asc`;

            const rawSearch = (filter?.search || "").trim();
            const cleanSearch = normalizeSearchText(rawSearch);
            const digitsSearch = getOnlyDigits(rawSearch);

            if (!cleanSearch && !digitsSearch) {
                return { elements: [], pagination: buildPageMeta(paginationObj, 0) };
            }

            const searchQuery = Prisma.sql`
                AND (
                    ${cleanSearch ? Prisma.sql`unaccent(lower(u.name)) ~* ${cleanSearch}` : Prisma.sql`false`}
                    ${digitsSearch ? Prisma.sql`OR u.phone ~* ${digitsSearch} OR u.document ~* ${digitsSearch}` : Prisma.sql``}
                )`;

            const statusFilter = Prisma.sql` AND u.status IN ('A', 'P')`;

            const users = await db.$queryRaw`
                SELECT u.id, u.slug, u.name, u.display_name, u.phone, u.document, u.status
                FROM "user" u
                WHERE 1=1 ${statusFilter} ${searchQuery}
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total
                FROM "user" u
                WHERE 1=1 ${statusFilter} ${searchQuery}`;

            return {
                elements: users,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    // Listagem administrativa completa (tela "gerenciar usuários") - ao contrário de
    // searchUsers, funciona com filtro vazio (mostra todo mundo, paginado) e traz o último
    // acesso e o total de empréstimos já feitos por cada um, para o operador decidir se
    // promove/desativa alguém sem precisar abrir cada perfil individualmente.
    async listUsersAdmin(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    name: "u.name",
                    created_at: "u.created_at",
                    last_used_at: "last_used_at",
                    loan_count: "loan_count"
                }
            });

            const orderQuery = paginationObj.orderBy ? paginationObj.orderQuery : Prisma.sql`u.created_at desc`;

            const rawSearch = (filter?.search || "").trim();
            const cleanSearch = normalizeSearchText(rawSearch);
            const digitsSearch = getOnlyDigits(rawSearch);
            const searchFilter =
                cleanSearch || digitsSearch
                    ? Prisma.sql` AND (
                        ${cleanSearch ? Prisma.sql`unaccent(lower(u.name)) ~* ${cleanSearch}` : Prisma.sql`false`}
                        ${digitsSearch ? Prisma.sql` OR u.phone ~* ${digitsSearch} OR u.document ~* ${digitsSearch}` : Prisma.sql``}
                    )`
                    : Prisma.sql``;

            const statusFilter = filter?.status ? Prisma.sql` AND u.status = ${filter.status}` : Prisma.sql` AND u.status != 'D'`;
            const roleFilter = filter?.role ? Prisma.sql` AND u.role = ${filter.role}` : Prisma.sql``;

            const users = await db.$queryRaw`
                SELECT
                    u.id, u.slug, u.name, u.display_name, u.phone, u.document, u.email,
                    u.status, u.role, u.created_at,
                    (SELECT MAX(uat.last_used_at) FROM user_auth_token uat WHERE uat.user_id = u.id) as last_used_at,
                    (SELECT COUNT(*) FROM volume_loan vl WHERE vl.user_id = u.id) as loan_count,
                    (SELECT COUNT(*) FROM volume_loan vl WHERE vl.user_id = u.id AND vl.return_date IS NULL AND vl.due_date < now()) as overdue_loan_count
                FROM "user" u
                WHERE 1=1 ${statusFilter} ${roleFilter} ${searchFilter}
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total
                FROM "user" u
                WHERE 1=1 ${statusFilter} ${roleFilter} ${searchFilter}`;

            return {
                elements: users,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    // Pré-cadastro feito pelo admin/bibliotecário (ex.: durante a criação de um empréstimo
    // presencial) - o usuário fica em status "P" até completar o próprio cadastro em /account
    // usando o CPF como login, que é quando os dois registros convergem.
    async preRegisterUser(data) {
        try {
            const { name, phone, document } = data;

            const existingUser = await db.user.findFirst({
                where: { OR: [{ login: document }, { document }] },
                select: { id: true, status: true }
            });

            if (existingUser) {
                if (existingUser.status === "P") {
                    const updatedUser = await db.user.update({
                        where: { id: existingUser.id },
                        data: { name, display_name: name, phone, document },
                        select: USER_SEARCH_FIELDS
                    });

                    return updatedUser;
                }

                return {
                    httpStatus: "CONFLICT",
                    error: [
                        {
                            field: "document",
                            message: "Já existe um usuário cadastrado com este CPF. Busque-o pelo nome ou telefone."
                        }
                    ]
                };
            }

            const newUser = await db.user.create({
                data: {
                    name,
                    display_name: name,
                    login: document,
                    document,
                    phone,
                    slug: getSlug(),
                    role: "MEMBER",
                    status: "P"
                },
                select: USER_SEARCH_FIELDS
            });

            return newUser;
        } catch (err) {
            return parseError(err);
        }
    },

    // ADMIN-only (ver router): conceder/revogar acesso de ADMIN/LIBRARIAN é uma ação sensível
    // demais para deixar no mesmo nível de permissão do resto da gestão de usuários.
    async updateUserRole(userId, role, req) {
        try {
            const id = BigInt(userId);

            const existing = await db.user.findFirst({ where: { id, status: { not: "D" } }, select: { id: true } });
            if (!existing) {
                throw notFoundError("Usuário não encontrado");
            }

            const updated = await db.user.update({
                where: { id },
                data: { role },
                select: { id: true, slug: true, name: true, role: true }
            });

            return updated;
        } catch (err) {
            return parseError(err);
        }
    },

    // ADMIN/LIBRARIAN atualizando os dados de contato de OUTRO usuário (completude cadastral -
    // ex.: a pessoa avisou que trocou de telefone). Igual a updateProfile, mas por id em vez
    // do próprio usuário logado, e sem exigir todos os campos de uma vez.
    async updateUserInfo(userId, data, req) {
        try {
            const id = BigInt(userId);

            const existing = await db.user.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Usuário não encontrado");
            }

            if (data.email) {
                const existingEmail = await db.user.findFirst({
                    where: { email: data.email, id: { not: id } },
                    select: { id: true }
                });

                if (existingEmail) {
                    return {
                        httpStatus: "CONFLICT",
                        error: [{ field: "email", message: "Este e-mail já está em uso." }]
                    };
                }
            }

            const updated = await db.user.update({
                where: { id },
                data: {
                    ...(data.name !== undefined ? { name: data.name } : {}),
                    ...(data.display_name !== undefined ? { display_name: data.display_name } : {}),
                    ...(data.email !== undefined ? { email: data.email || null } : {}),
                    ...(data.phone !== undefined ? { phone: data.phone } : {})
                },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    display_name: true,
                    phone: true,
                    document: true,
                    email: true,
                    status: true,
                    role: true
                }
            });

            return updated;
        } catch (err) {
            return parseError(err);
        }
    },

    async updateUserStatus(userId, status, req) {
        try {
            const id = BigInt(userId);

            if (String(id) === String(req.response.params.user.id) && status === "I") {
                return {
                    httpStatus: "BAD_REQUEST",
                    error: [{ field: "status", message: "Você não pode desativar a própria conta." }]
                };
            }

            const existing = await db.user.findFirst({ where: { id, status: { not: "D" } }, select: { id: true } });
            if (!existing) {
                throw notFoundError("Usuário não encontrado");
            }

            const updated = await db.user.update({
                where: { id },
                data: { status },
                select: { id: true, slug: true, name: true, status: true }
            });

            return updated;
        } catch (err) {
            return parseError(err);
        }
    }
};
