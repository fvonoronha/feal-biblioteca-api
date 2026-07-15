const { parsePagination } = require("../../utils/pagination.service");
const { treatVolumeFilters, getVolumeSearchScore } = require("../../utils/filters.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, Prisma, parseError } = require("../../utils/db.service");

module.exports = {
    async listVolumes(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    search_score: "search_score",
                    label: "v.label",
                    title: "b.search_title",
                    year: "v.year",
                    edition: "v.edition",
                    pages: "v.pages",
                    last_month_access_count: "b.last_month_access_count",
                    all_time_access_count: "b.all_time_access_count"
                }
            });

            const orderQuery = paginationObj.orderBy
                ? Prisma.sql`${paginationObj.orderQuery}, search_score desc, b.search_title asc, v.label desc nulls last`
                : Prisma.sql`search_score desc, b.search_title asc, v.label desc nulls last`;

            const whereQuery = treatVolumeFilters(filter).query;

            const searchScoreQuery = getVolumeSearchScore(filter).query;

            const volumes = await db.$queryRaw`
            SELECT 
                ${searchScoreQuery} as search_score,
                v.id, 
                v.slug, 
                v.year, 
                v.edition, 
                v.isbn, 
                v.isbn_old, 
                v.pages,
                v.cover_url, 
                v.back_url, 
                v.images_url,
                v.label, 
                v.shelf, 
                v.description, 
                v.keywords,
                v.all_time_access_count,
                v.last_month_access_count,

                COALESCE(json_build_object(
                    'id', p.id, 
                    'slug', p.slug,
                    'name', p.name, 
                    'abbreviation', p.abbreviation, 
                    'avatar_url', p.avatar_url), null) as publisher,

                COALESCE(json_build_object(
                    'id', b.id, 
                    'slug', b.slug,
                    'title', b.title, 
                    'subtitle', b.subtitle, 
                    'summary', b.summary, 
                    'description', b.description, 
                    'recommended_for', b.recommended_for, 
                    'keywords', b.keywords, 
                    'last_month_access_count', b.last_month_access_count, 
                    'all_time_access_count', b.all_time_access_count), null) as book,

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
                        WHERE _va.volume_id = v.id AND _va.status = 'A'
                    ), '[]'::json) as authors

            FROM volume v
                LEFT JOIN publisher p ON p.id = v.publisher_id
                LEFT JOIN book b ON b.id = v.book_id
                LEFT JOIN category c ON c.id = b.category_id
            WHERE v.status= 'A' ${whereQuery}
            ORDER BY  ${paginationObj.orderBy ? Prisma.sql`${paginationObj.orderQuery},` : ``} b.search_title ASC
            LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}
        `;
            // Contagem total para a paginação
            const countResult = await db.$queryRaw`
            SELECT COUNT(*) as total 
            FROM volume v
            LEFT JOIN publisher p ON p.id = v.publisher_id
            LEFT JOIN book b ON b.id = v.book_id
            LEFT JOIN category c ON c.id = b.category_id
            WHERE v.status= 'A' ${whereQuery}
            `;

            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: volumes,
                pagination: {
                    page: paginationObj.page,
                    limit: paginationObj.limit,
                    total_elements: total,
                    total_pages: totalPages,
                    has_next: paginationObj.page < totalPages,
                    has_previous: paginationObj.page > 1
                }
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async getVolume(slug) {
        const whereQuery = Prisma.sql` AND v.slug=${slug}`;

        try {
            const volume = await db.$queryRaw`
            SELECT 
                v.id, 
                v.slug, 
                v.year, 
                v.edition, 
                v.isbn, 
                v.isbn_old, 
                v.pages,
                v.cover_url, 
                v.back_url, 
                v.images_url,
                v.label, 
                v.shelf, 
                v.description, 
                v.keywords,
                v.all_time_access_count,
                v.last_month_access_count,

                COALESCE(json_build_object(
                    'id', p.id, 
                    'slug', p.slug,
                    'name', p.name, 
                    'abbreviation', p.abbreviation, 
                    'avatar_url', p.avatar_url), null) as publisher,

                COALESCE(json_build_object(
                    'id', b.id, 
                    'slug', b.slug,
                    'title', b.title, 
                    'subtitle', b.subtitle, 
                    'summary', b.summary, 
                    'description', b.description, 
                    'recommended_for', b.recommended_for, 
                    'keywords', b.keywords, 
                    'last_month_access_count', b.last_month_access_count, 
                    'all_time_access_count', b.all_time_access_count), null) as book,

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
                        WHERE _va.volume_id = v.id AND _va.status = 'A'
                    ), '[]'::json) as authors

            FROM volume v
                LEFT JOIN publisher p ON p.id = v.publisher_id
                LEFT JOIN book b ON b.id = v.book_id
                LEFT JOIN category c ON c.id = b.category_id
            WHERE v.status= 'A' ${whereQuery}
            LIMIT 1
        `;

            if (volume[0]) {
                return volume[0];
            }

            throw {
                code: "P2025",
                message: "Livro inválido"
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async listRelatedVolumes(volumeId, filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    search_score: "search_score"
                }
            });

            const volumes = await db.$queryRaw`
            WITH target_info AS (
                SELECT 
                    v.id as volume_id, 
                    v.book_id, 
                    b.category_id, 
                    v.publisher_id
                FROM volume v
                LEFT JOIN book b ON b.id = v.book_id
                WHERE v.id = ${volumeId}
                LIMIT 1
            ),
            target_authors AS (
                SELECT author_id 
                FROM volume_author 
                WHERE volume_id = ${volumeId} AND status = 'A'
            ),
            target_tags AS (
                SELECT tag_id 
                FROM book_tag 
                WHERE book_id = (SELECT book_id FROM target_info) AND status = 'A'
            )

            SELECT 
                (
                    (CASE WHEN c.id = (SELECT category_id FROM target_info) THEN 3 ELSE 0 END) +
                    (CASE WHEN v.publisher_id = (SELECT publisher_id FROM target_info) THEN 1 ELSE 0 END) +
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
                v.id, 
                v.slug, 
                v.year, 
                v.edition, 
                v.isbn, 
                v.isbn_old, 
                v.pages,
                v.cover_url, 
                v.back_url, 
                v.images_url,
                v.label, 
                v.shelf, 
                v.description, 
                v.keywords,
                v.all_time_access_count,
                v.last_month_access_count,

                COALESCE(json_build_object(
                    'id', p.id, 'slug', p.slug, 'name', p.name, 
                    'abbreviation', p.abbreviation, 'avatar_url', p.avatar_url
                ), null) as publisher,

                COALESCE(json_build_object(
                    'id', b.id, 'slug', b.slug, 'title', b.title, 
                    'subtitle', b.subtitle, 'summary', b.summary, 
                    'description', b.description, 'recommended_for', b.recommended_for, 
                    'keywords', b.keywords, 'last_month_access_count', b.last_month_access_count, 
                    'all_time_access_count', b.all_time_access_count
                ), null) as book,

                COALESCE(json_build_object(
                    'id', c.id, 'slug', c.slug, 'name', c.name
                ), null) as category,

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
                ), '[]'::json) as authors

            FROM volume v
            LEFT JOIN publisher p ON p.id = v.publisher_id
            LEFT JOIN book b ON b.id = v.book_id
            LEFT JOIN category c ON c.id = b.category_id

            WHERE v.status = 'A' 
              AND  b.id != (select book_id from volume where id = ${volumeId})
            
            -- O segredo da aleatoriedade ponderada está aqui. 
            -- Somamos um valor de 0 a 3 ao score base, embaralhando resultados com scores parecidos.
            -- Se todos os scores forem 0 (nenhuma relação), RANDOM() faz com que retorne aleatório.
            ORDER BY (
                (CASE WHEN c.id = (SELECT category_id FROM target_info) THEN 3 ELSE 0 END) +
                (CASE WHEN v.publisher_id = (SELECT publisher_id FROM target_info) THEN 1 ELSE 0 END) +
                COALESCE((SELECT COUNT(*)::int * 5 FROM volume_author va WHERE va.volume_id = v.id AND va.status = 'A' AND va.author_id IN (SELECT author_id FROM target_authors)), 0) +
                COALESCE((SELECT COUNT(*)::int * 2 FROM book_tag bt WHERE bt.book_id = b.id AND bt.status = 'A' AND bt.tag_id IN (SELECT tag_id FROM target_tags)), 0)
            ) + (RANDOM() * 3) ${pagination.page !== 1 ? Prisma.sql`ASC` : Prisma.sql`DESC`}
            
            LIMIT ${pagination.limit} OFFSET ${pagination.offset}
        `;

            const total = pagination.limit;
            const totalPages = 1;

            return {
                elements: volumes,
                pagination: {
                    page: paginationObj.page,
                    limit: paginationObj.limit,
                    total_elements: total,
                    total_pages: totalPages,
                    has_next: paginationObj.page < totalPages,
                    has_previous: paginationObj.page > 1
                }
            };
        } catch (err) {
            return parseError(err);
        }
    }
};
