const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError, Prisma } = require("../../utils/db.service");
const { getBookFiltersWhereClause } = require("../../utils/filters.service");

const bookSelectFields = {};
module.exports = {
    // Operaçoes de Gerenciamento
    async getBookMetaForGemini(slug) {
        const whereQuery = Prisma.sql` AND b.slug=${slug}`;

        //  year: volume.year,
        // edition: volume.edition,
        // isbn_13: volume.isbn,
        // isbn_10: volume.isbn_old,
        // pages: volume.pages,
        // publisher: volume.publisher?.name || "Não informada",
        // title: volume.book.title,
        // description: volume.book.description,
        // authors: []

        try {
            const book = await db.$queryRaw`
            SELECT 
            B.id,
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
            LIMIT 1
        `;

            if (book[0]) {
                return book[0];
            }

            throw {
                code: "P2025",
                message: "Livro inválido"
            };
        } catch (err) {
            console.log("Err: ", err);
            return parseError(err);
        }
    },

    async getBooksMetaForGemini(limit) {
        const whereQuery = Prisma.sql` AND (b.recommended_for is null OR b.recommended_for = '')`;

        //  year: volume.year,
        // edition: volume.edition,
        // isbn_13: volume.isbn,
        // isbn_10: volume.isbn_old,
        // pages: volume.pages,
        // publisher: volume.publisher?.name || "Não informada",
        // title: volume.book.title,
        // description: volume.book.description,
        // authors: []

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

            throw {
                code: "P2025",
                message: "Livro inválido"
            };
        } catch (err) {
            console.log("Err: ", err);
            return parseError(err);
        }
    },

    /// Throwws error
    async updateMonthlyAccessCounter() {
        const trintaDiasAtras = new Date();
        trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);
        const trintaDiasAtrasISO = trintaDiasAtras.toISOString();

        const seteDiasAtras = new Date();
        seteDiasAtras.setDate(seteDiasAtras.getDate() - 30);
        const seteDiasAtrasISO = seteDiasAtras.toISOString();

        await db.$executeRawUnsafe(`
                        UPDATE book
                        SET last_month_access_count_updated_at = NOW(), 
                        last_month_access_count = (
                            SELECT COUNT(*)
                            FROM book_access
                            WHERE book_access.book_id = book.id
                              AND book_access.created_at >= '${trintaDiasAtrasISO}'
                        ),
                        last_week_access_count_updated_at = NOW(), 
                        last_week_access_count = (
                            SELECT COUNT(*)
                            FROM book_access
                            WHERE book_access.book_id = book.id
                              AND book_access.created_at >= '${seteDiasAtrasISO}'
                        ),
                        all_time_access_count_updated_at = NOW(), 
                        all_time_access_count = (
                            SELECT COUNT(*)
                            FROM book_access
                            WHERE book_access.book_id = book.id
                        )
                        WHERE status = 'A';
                    `);

        console.log(" [CRON] Estatísticas atualizadas com sucesso...");
    }
};
