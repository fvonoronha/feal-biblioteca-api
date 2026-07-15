const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { treatVolumeFilters, getAuthorSearchScore } = require("../../utils/filters.service");
const { db, Prisma, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    async listAuthors(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    search_score: "search_score",
                    name: "__a.search_name",
                    volumes_count: "volumes_count",
                    books_count: "books_count"
                }
            });

            const orderQuery = paginationObj.orderBy
                ? Prisma.sql`${paginationObj.orderQuery}, search_score desc, __a.search_name asc nulls last `
                : Prisma.sql`search_score desc, __a.search_name asc nulls last`;

            const whereQuery = treatVolumeFilters(filter).query;

            const searchScoreQuery = getAuthorSearchScore(filter).query;

            const exploreFilter = filter.explore
                ? Prisma.sql`AND (
                __a.slug in (
                        'kardec',
                        'andreluiz',
                        'chico-xavier',
                        'divaldo',
                        'emmanuel',
                        'guillon',
                        'irmao-x',
                        'joannadeangelis',
                        'leon-denis',
                        'richardsimonetti',
                        'vera-lucia',
                        'yvonnepereira'
                    )
            )`
                : Prisma.empty;

            const authors = await db.$queryRaw`
                SELECT 
                    ${searchScoreQuery} as search_score,
                    __a.id,
                    __a.slug,
                    __a.name,
                    __a.search_name,
                    __a.description,
                    __a.avatar_url,
                    __a.is_spirit,
                    (
                        SELECT count(distinct v.id) 
                        FROM volume_author _va 
                            LEFT JOIN volume v ON v.id = _va.volume_id 
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE _va.author_id = __a.id ${whereQuery}
                    ) as volumes_count,
                    (
                        SELECT count(distinct b.id) 
                        FROM volume_author _va 
                            LEFT JOIN volume v ON v.id = _va.volume_id 
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE _va.author_id = __a.id ${whereQuery}
                    ) as books_count
                FROM author __a
                WHERE __a.status='A' ${exploreFilter}
                AND EXISTS (
                    SELECT 1
                    FROM volume v
                        LEFT JOIN publisher p ON p.id = v.publisher_id
                        LEFT JOIN book b ON b.id = v.book_id
                        LEFT JOIN volume_author va ON va.volume_id = v.id
                        LEFT JOIN category c ON c.id = b.category_id
                    WHERE va.author_id = __a.id ${whereQuery}
                ) 
                ORDER BY  ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total 
                FROM author __a 
                WHERE __a.status='A'
                AND EXISTS (
                    SELECT 1
                    FROM volume v
                        LEFT JOIN publisher p ON p.id = v.publisher_id
                        LEFT JOIN book b ON b.id = v.book_id
                        LEFT JOIN volume_author va ON va.volume_id = v.id
                        LEFT JOIN category c ON c.id = b.category_id
                    WHERE va.author_id = __a.id ${whereQuery}
                )
                `;

            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: authors,
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
