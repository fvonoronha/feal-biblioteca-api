const { generateUniqueSlug } = require("../../utils/slug.service");
const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { treatVolumeFilters, getVolumeSearchScore } = require("../../utils/filters.service");
const { db, Prisma, parseError, notFoundError, withTransaction } = require("../../utils/db.service");

// Reproduz em JS a normalização que o schema documenta para search_title/search_name
// (regexp_replace(lower(unaccent(title)), '[^a-z0-9]', '', 'g')), já que não existe trigger
// no banco fazendo isso - quem grava a linha precisa preencher essas colunas.
function buildSearchText(text) {
    if (!text) return null;
    return text
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();
}

const BOOK_JOIN = Prisma.sql`
    FROM book b
        LEFT JOIN volume v ON v.id = (SELECT id FROM volume WHERE book_id = b.id AND status = 'A' ORDER BY id ASC LIMIT 1)
        LEFT JOIN publisher p ON p.id = v.publisher_id
        LEFT JOIN category c ON c.id = b.category_id
`;

const BOOK_SELECT_FIELDS = Prisma.sql`
    b.id,
    b.slug,
    b.title,
    b.subtitle,
    b.summary,
    b.description,
    b.recommended_for,
    b.keywords,
    b.status,
    b.last_week_access_count,
    b.last_month_access_count,
    b.all_time_access_count,

    COALESCE(json_build_object(
        'id', p.id,
        'slug', p.slug,
        'name', p.name,
        'abbreviation', p.abbreviation,
        'avatar_url', p.avatar_url), null) as publisher,

    COALESCE(json_build_object(
        'id', c.id,
        'slug', c.slug,
        'name', c.name), null) as category,

    COALESCE((
        SELECT json_agg(json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
        FROM tag _t
        JOIN book_tag _bt ON _t.id = _bt.tag_id
        WHERE _bt.book_id = b.id AND _bt.status = 'A'
    ), '[]'::json) as tags,

    COALESCE((
        SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit))
        FROM author _a
        JOIN volume_author _va ON _a.id = _va.author_id
        WHERE _va.volume_id = v.id AND _va.status = 'A'
    ), '[]'::json) as authors,

    (SELECT COUNT(*) FROM volume _v WHERE _v.book_id = b.id AND _v.status = 'A') as volumes_count,

    v.id as primary_volume_id,
    v.slug as primary_volume_slug,
    v.isbn,
    v.isbn_old,
    v.pdf_url,
    v.cover_url,
    v.year,
    v.edition,
    v.pages
`;

async function queryBooks(filter, pagination, { onlyActive }) {
    const paginationObj = parsePagination(pagination, {
        sortFields: {
            search_score: "search_score",
            title: "b.search_title",
            created_at: "b.created_at",
            last_month_access_count: "b.last_month_access_count",
            all_time_access_count: "b.all_time_access_count",
            volumes_count: "volumes_count"
        }
    });

    const orderQuery = paginationObj.orderBy
        ? Prisma.sql`${paginationObj.orderQuery}, search_score desc, b.search_title asc`
        : Prisma.sql`search_score desc, b.search_title asc`;

    const treated = treatVolumeFilters(filter);
    const whereQuery = treated.query;
    const searchScoreQuery = getVolumeSearchScore(filter, treated).query;

    const statusQuery = onlyActive
        ? Prisma.sql`b.status = 'A'`
        : filter?.status
          ? Prisma.sql`b.status = ${filter.status}`
          : Prisma.sql`b.status != 'D'`;

    const books = await db.$queryRaw`
        SELECT ${searchScoreQuery} as search_score, ${BOOK_SELECT_FIELDS}
        ${BOOK_JOIN}
        WHERE ${statusQuery} ${whereQuery}
        ORDER BY ${orderQuery}
        LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}
    `;

    const countResult = await db.$queryRaw`
        SELECT COUNT(*) as total
        ${BOOK_JOIN}
        WHERE ${statusQuery} ${whereQuery}
    `;

    return {
        elements: books,
        pagination: buildPageMeta(paginationObj, countResult[0].total)
    };
}

async function findBook(bookId, bookSlug, { onlyActive }) {
    const whereQuery = bookId ? Prisma.sql` AND b.id = ${BigInt(bookId)}` : Prisma.sql` AND b.slug = ${bookSlug}`;
    const statusQuery = onlyActive ? Prisma.sql`b.status = 'A'` : Prisma.sql`b.status != 'D'`;

    const rows = await db.$queryRaw`
        SELECT ${BOOK_SELECT_FIELDS}
        ${BOOK_JOIN}
        WHERE ${statusQuery} ${whereQuery}
        LIMIT 1
    `;

    if (!rows[0]) throw notFoundError("Livro não encontrado");
    return rows[0];
}

module.exports = {
    // O `volume` do payload é opcional: o usuário pode cadastrar só os dados do livro agora e
    // registrar os exemplares/edições depois, separadamente, via POST /volume (ver
    // createVolumeSchema) - um livro pode legitimamente ficar com 0 volumes por um tempo.
    async createBook(payload, req) {
        try {
            const userId = req.response.params.user.id;
            const { book, volume } = payload;

            const result = await withTransaction(async (tx) => {
                const bookSlug =
                    book.slug || (await generateUniqueSlug(book.title, (slug) => tx.book.findFirst({ where: { slug } })));

                const newBook = await tx.book.create({
                    data: {
                        slug: bookSlug,
                        status: book.status || "A",
                        title: book.title,
                        search_title: buildSearchText(book.title),
                        subtitle: book.subtitle,
                        search_subtitle: buildSearchText(book.subtitle),
                        summary: book.summary,
                        description: book.description,
                        recommended_for: book.recommended_for,
                        keywords: book.keywords || [],
                        category_id: book.category_id ? BigInt(book.category_id) : null,
                        created_by_user_id: userId
                    }
                });

                let newVolume = null;
                if (volume) {
                    // Volume não tem um "título" próprio - na falta de um slug explícito, deriva
                    // do título do livro (o mesmo texto que gerou o slug do Book), então o
                    // primeiro exemplar de um livro novo normalmente fica com book.slug ===
                    // volume.slug (só divergem se colidirem, quando um short-id é acrescentado).
                    const volumeSlug =
                        volume.slug ||
                        (await generateUniqueSlug(book.title, (slug) => tx.volume.findFirst({ where: { slug } })));

                    newVolume = await tx.volume.create({
                        data: {
                            slug: volumeSlug,
                            status: volume.status || "A",
                            book_id: newBook.id,
                            publisher_id: volume.publisher_id ? BigInt(volume.publisher_id) : null,
                            year: volume.year,
                            edition: volume.edition,
                            isbn: volume.isbn,
                            isbn_old: volume.isbn_old,
                            pages: volume.pages,
                            description: volume.description,
                            pdf_url: volume.pdf_url,
                            cover_url: volume.cover_url,
                            back_url: volume.back_url,
                            images_url: volume.images_url || [],
                            keywords: volume.keywords || [],
                            label: volume.label,
                            shelf: volume.shelf,
                            created_by_user_id: userId
                        }
                    });
                }

                return { book: newBook, volume: newVolume };
            });

            return result;
        } catch (err) {
            return parseError(err);
        }
    },

    async updateBook(bookId, data, req) {
        try {
            const id = BigInt(bookId);

            const existing = await db.book.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Livro não encontrado");
            }

            const updated = await db.book.update({
                where: { id },
                data: {
                    ...(data.title !== undefined ? { title: data.title, search_title: buildSearchText(data.title) } : {}),
                    ...(data.subtitle !== undefined
                        ? { subtitle: data.subtitle, search_subtitle: buildSearchText(data.subtitle) }
                        : {}),
                    ...(data.summary !== undefined ? { summary: data.summary } : {}),
                    ...(data.description !== undefined ? { description: data.description } : {}),
                    ...(data.recommended_for !== undefined ? { recommended_for: data.recommended_for } : {}),
                    ...(data.keywords !== undefined ? { keywords: data.keywords } : {}),
                    ...(data.category_id !== undefined
                        ? { category_id: data.category_id ? BigInt(data.category_id) : null }
                        : {}),
                    ...(data.status !== undefined ? { status: data.status } : {}),
                    updated_at: new Date(),
                    updated_by_user_id: req.response.params.user.id
                }
            });

            return updated;
        } catch (err) {
            return parseError(err);
        }
    },

    // Substitui TODOS os temas do livro pela lista de ids informada - usado tanto pela edição
    // manual (o admin escolhe os temas na tela) quanto para aplicar a sugestão de temas do
    // Gemini quando o operador aceita especificamente esse campo.
    async setBookTags(bookId, tagIds, req) {
        try {
            const id = BigInt(bookId);
            const userId = req.response.params.user.id;

            const existing = await db.book.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Livro não encontrado");
            }

            await withTransaction(async (tx) => {
                await tx.bookTag.deleteMany({ where: { book_id: id } });

                if (tagIds.length > 0) {
                    await tx.bookTag.createMany({
                        data: tagIds.map((tagId) => ({
                            book_id: id,
                            tag_id: BigInt(tagId),
                            created_by_user_id: userId,
                            status: "A"
                        }))
                    });
                }
            });

            return { updated: true };
        } catch (err) {
            return parseError(err);
        }
    },

    // Soft-delete em cascata: um livro sem nenhum volume ativo não tem sentido continuar
    // "ativo" ele mesmo, então desativa junto todas as suas edições/exemplares.
    async deleteBook(bookId, req) {
        try {
            const id = BigInt(bookId);

            const existing = await db.book.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Livro não encontrado");
            }

            await withTransaction(async (tx) => {
                await tx.book.update({
                    where: { id },
                    data: { status: "D", updated_at: new Date(), updated_by_user_id: req.response.params.user.id }
                });

                await tx.volume.updateMany({
                    where: { book_id: id, status: { not: "D" } },
                    data: { status: "D", updated_at: new Date(), updated_by_user_id: req.response.params.user.id }
                });
            });

            return { deleted: true };
        } catch (err) {
            return parseError(err);
        }
    },

    async listBooks(filter, pagination) {
        try {
            return await queryBooks(filter, pagination, { onlyActive: false });
        } catch (err) {
            return parseError(err);
        }
    },

    async listPublicBooks(filter, pagination) {
        try {
            return await queryBooks(filter, pagination, { onlyActive: true });
        } catch (err) {
            return parseError(err);
        }
    },

    async searchBooks(filter, pagination) {
        try {
            return await queryBooks(filter, pagination, { onlyActive: true });
        } catch (err) {
            return parseError(err);
        }
    },

    async getBook(bookId, bookSlug) {
        try {
            return await findBook(bookId, bookSlug, { onlyActive: false });
        } catch (err) {
            return parseError(err);
        }
    },

    async getPublicBook(bookId, bookSlug, user, uaInfo, ip) {
        try {
            const book = await findBook(bookId, bookSlug, { onlyActive: true });

            if (book.primary_volume_id) {
                try {
                    await db.volumeAccess.create({
                        data: {
                            volume_id: BigInt(book.primary_volume_id),
                            created_by_user_id: user?.id || null,
                            ip_address: ip,
                            user_agent: uaInfo?.ua,
                            browser_name: uaInfo?.browser?.name,
                            browser_version: uaInfo?.browser?.version,
                            os_name: uaInfo?.os?.name,
                            os_version: uaInfo?.os?.version,
                            device_name: uaInfo?.device?.model,
                            device_vendor: uaInfo?.device?.vendor
                        }
                    });
                } catch (accessLogError) {
                    // Uma falha ao registrar o acesso não deve impedir a leitura do livro.
                    console.error("[book] Falha ao registrar acesso:", accessLogError);
                }
            }

            return book;
        } catch (err) {
            return parseError(err);
        }
    },

    async listRelatedBooks(bookId, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: { search_score: "search_score" }
            });

            const books = await db.$queryRaw`
                WITH target_info AS (
                    SELECT b.id as book_id, b.category_id
                    FROM book b
                    WHERE b.id = ${BigInt(bookId)}
                    LIMIT 1
                ),
                target_authors AS (
                    SELECT DISTINCT va.author_id
                    FROM volume_author va
                    JOIN volume v ON v.id = va.volume_id
                    WHERE v.book_id = ${BigInt(bookId)} AND va.status = 'A'
                ),
                target_tags AS (
                    SELECT tag_id
                    FROM book_tag
                    WHERE book_id = ${BigInt(bookId)} AND status = 'A'
                )

                SELECT
                    (
                        (CASE WHEN c.id = (SELECT category_id FROM target_info) THEN 3 ELSE 0 END) +
                        COALESCE((
                            SELECT COUNT(*)::int * 5
                            FROM volume_author va
                            WHERE va.volume_id = v.id
                              AND va.status = 'A'
                              AND va.author_id IN (SELECT author_id FROM target_authors)
                        ), 0) +
                        COALESCE((
                            SELECT COUNT(*)::int * 2
                            FROM book_tag bt
                            WHERE bt.book_id = b.id
                              AND bt.status = 'A'
                              AND bt.tag_id IN (SELECT tag_id FROM target_tags)
                        ), 0)
                    ) as search_score,
                    ${BOOK_SELECT_FIELDS}
                ${BOOK_JOIN}
                WHERE b.status = 'A' AND b.id != (SELECT book_id FROM target_info)
                ORDER BY (
                    (CASE WHEN c.id = (SELECT category_id FROM target_info) THEN 3 ELSE 0 END) +
                    COALESCE((SELECT COUNT(*)::int * 5 FROM volume_author va WHERE va.volume_id = v.id AND va.status = 'A' AND va.author_id IN (SELECT author_id FROM target_authors)), 0) +
                    COALESCE((SELECT COUNT(*)::int * 2 FROM book_tag bt WHERE bt.book_id = b.id AND bt.status = 'A' AND bt.tag_id IN (SELECT tag_id FROM target_tags)), 0)
                ) + (RANDOM() * 3) DESC
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}
            `;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total
                FROM book b
                WHERE b.status = 'A' AND b.id != ${BigInt(bookId)}
            `;

            return {
                elements: books,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async listPublicPublishers(filter, pagination) {
        // A listagem de editoras vive em publisher.service.js; este módulo só reaproveita.
        const publisherService = require("../../publisher/service/publisher.service");
        return await publisherService.listPublishers(filter, pagination);
    },

    // Operaçoes para o Gemini
    async getBookMetaForGemini(slug) {
        const whereQuery = Prisma.sql` AND b.slug=${slug}`;

        try {
            const book = await db.$queryRaw`
            SELECT
            B.id,
                b.slug,
                b.title,
                b.subtitle,
                b.summary,
                b.description,
                b.recommended_for,
                b.keywords,

                (select v.isbn from volume v WHERE v.book_id = b.id order by v.id asc limit 1),
                (select v.isbn_old from volume v WHERE v.book_id = b.id order by v.id asc limit 1),
                COALESCE(json_build_object(
                    'id', p.id,
                    'slug', p.slug,
                    'name', p.name,
                    'abbreviation', p.abbreviation,
                    'avatar_url', p.avatar_url), null) as publisher,

                COALESCE(json_build_object(
                    'id', c.id,
                    'slug', c.slug,
                    'name', c.name), null) as category,

                COALESCE((
                    SELECT json_agg( json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
                    FROM tag _t
                    JOIN book_tag _bt ON _t.id = _bt.tag_id
                    WHERE _bt.book_id = b.id AND _bt.status = 'A'
                ), '[]'::json) as tags,

                COALESCE((
                        SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit)
                        )
                        FROM author _a
                        JOIN volume_author _va ON _a.id = _va.author_id
                        WHERE _va.volume_id = (select v.id from volume v WHERE v.book_id = b.id order by v.id asc limit 1) AND _va.status = 'A'
                    ), '[]'::json) as authors

            FROM book b
                LEFT JOIN publisher p ON p.id = (select v.publisher_id from volume v WHERE v.book_id = b.id order by v.id asc limit 1)
                LEFT JOIN category c ON c.id = b.category_id
            WHERE b.status= 'A' ${whereQuery}
            LIMIT 1
        `;

            if (book[0]) {
                return book[0];
            }

            throw notFoundError("Livro inválido");
        } catch (err) {
            return parseError(err);
        }
    },

    async getBooksMetaForGemini(limit) {
        const whereQuery = Prisma.sql` AND (b.recommended_for is null OR b.recommended_for = '')`;

        try {
            const book = await db.$queryRaw`
            SELECT
            B.id,
            B.slug,
                b.title,
                b.description,

                (select v.isbn from volume v WHERE v.book_id = b.id order by v.id asc limit 1),
                (select v.isbn_old from volume v WHERE v.book_id = b.id order by v.id asc limit 1),
                COALESCE(json_build_object(
                    'id', p.id,
                    'slug', p.slug,
                    'name', p.name,
                    'abbreviation', p.abbreviation,
                    'avatar_url', p.avatar_url), null) as publisher,

                COALESCE(json_build_object(
                    'id', c.id,
                    'slug', c.slug,
                    'name', c.name), null) as category,

                COALESCE((
                    SELECT json_agg( json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
                    FROM tag _t
                    JOIN book_tag _bt ON _t.id = _bt.tag_id
                    WHERE _bt.book_id = b.id AND _bt.status = 'A'
                ), '[]'::json) as tags,

                COALESCE((
                        SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit)
                        )
                        FROM author _a
                        JOIN volume_author _va ON _a.id = _va.author_id
                        WHERE _va.volume_id = (select v.id from volume v WHERE v.book_id = b.id order by v.id asc limit 1) AND _va.status = 'A'
                    ), '[]'::json) as authors

            FROM book b
                LEFT JOIN publisher p ON p.id = (select v.publisher_id from volume v WHERE v.book_id = b.id order by v.id asc limit 1)
                LEFT JOIN category c ON c.id = b.category_id
            WHERE b.status= 'A' ${whereQuery}
            LIMIT ${limit}
        `;

            if (book[0]) {
                return book;
            }

            throw notFoundError("Livro inválido");
        } catch (err) {
            return parseError(err);
        }
    },

    // Atualiza os contadores de acesso de book e volume a partir do log real (volume_access).
    // Corrige dois bugs do código anterior: a tabela consultada não existia (book_access
    // em vez de volume_access) e a janela de "última semana" usava 30 dias em vez de 7.
    async updateMonthlyAccessCounter() {
        const now = new Date();
        const thirtyDaysAgo = new Date(now);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const sevenDaysAgo = new Date(now);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        await db.$executeRaw`
            UPDATE book
            SET last_month_access_count_updated_at = NOW(),
                last_month_access_count = (
                    SELECT COUNT(*)
                    FROM volume_access va
                    JOIN volume v ON v.id = va.volume_id
                    WHERE v.book_id = book.id AND va.created_at >= ${thirtyDaysAgo}
                ),
                last_week_access_count_updated_at = NOW(),
                last_week_access_count = (
                    SELECT COUNT(*)
                    FROM volume_access va
                    JOIN volume v ON v.id = va.volume_id
                    WHERE v.book_id = book.id AND va.created_at >= ${sevenDaysAgo}
                ),
                all_time_access_count_updated_at = NOW(),
                all_time_access_count = (
                    SELECT COUNT(*)
                    FROM volume_access va
                    JOIN volume v ON v.id = va.volume_id
                    WHERE v.book_id = book.id
                )
            WHERE status = 'A';
        `;

        await db.$executeRaw`
            UPDATE volume
            SET last_month_access_count_updated_at = NOW(),
                last_month_access_count = (
                    SELECT COUNT(*) FROM volume_access va WHERE va.volume_id = volume.id AND va.created_at >= ${thirtyDaysAgo}
                ),
                last_week_access_count_updated_at = NOW(),
                last_week_access_count = (
                    SELECT COUNT(*) FROM volume_access va WHERE va.volume_id = volume.id AND va.created_at >= ${sevenDaysAgo}
                ),
                all_time_access_count_updated_at = NOW(),
                all_time_access_count = (
                    SELECT COUNT(*) FROM volume_access va WHERE va.volume_id = volume.id
                )
            WHERE status = 'A';
        `;

        console.log(" [CRON] Estatísticas atualizadas com sucesso...");
    }
};
