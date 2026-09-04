const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { treatVolumeFilters } = require("../../utils/filters.service");
const { db, Prisma, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    async listPublishers(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    name: "__p.search_name",
                    abbreviation: "__p.search_abbreviation",
                    volumes_count: "volumes_count",
                    books_count: "books_count"
                }
            });

            const orderQuery = paginationObj.orderBy
                ? Prisma.sql`${paginationObj.orderQuery}, __p.search_name asc nulls last `
                : Prisma.sql`__p.search_name asc nulls last`;

            const whereQuery = treatVolumeFilters(filter).query;

            const publishers = await db.$queryRaw`
                SELECT 
                    __p.id,
                    __p.slug,
                    __p.name,
                    __p.search_name,
                    __p.abbreviation,
                    __p.description,
                    __p.avatar_url,
                    (
                        SELECT count(distinct b.id)
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE v.publisher_id = __p.id ${whereQuery}
                    ) as books_count,
                    (
                        SELECT count(distinct v.id)
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE v.publisher_id = __p.id ${whereQuery}
                    ) as volumes_count
                FROM publisher __p
                WHERE __p.status='A'
                AND EXISTS (
                        SELECT 1
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE v.publisher_id = __p.id ${whereQuery}
                    )
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total 
                FROM publisher __p 
                WHERE __p.status='A' AND EXISTS (
                        SELECT 1
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE v.publisher_id = __p.id ${whereQuery}
                    )`;
            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: publishers,
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

    async getPublishersMetaForGemini(limit) {
        return await module.exports.listPublishers(
            {},
            {
                limit: limit
            }
        );
    }
};
