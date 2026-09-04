const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { treatVolumeFilters } = require("../../utils/filters.service");
const { db, Prisma, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    async listTags(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    name: "__t.search_name",
                    volumes_count: "volumes_count",
                    books_count: "books_count"
                }
            });

            const orderQuery = paginationObj.orderBy
                ? Prisma.sql`${paginationObj.orderQuery}, volumes_count desc nulls last `
                : Prisma.sql`volumes_count desc nulls last`;

            const whereQuery = treatVolumeFilters(filter).query;

            const tags = await db.$queryRaw`
                SELECT 
                    __t.id,
                    __t.slug,
                    __t.name,
                    __t.search_name,
                    __t.description,
                    (
                    SELECT count(distinct b.id)
                    FROM volume v
                        LEFT JOIN publisher p ON p.id = v.publisher_id
                        LEFT JOIN book b ON b.id = v.book_id
                        LEFT JOIN book_tag bt ON bt.book_id = b.id
                        LEFT JOIN category c ON c.id = b.category_id
                    WHERE bt.tag_id = __t.id ${whereQuery}
                ) as books_count,
                    (
                    SELECT count(distinct v.id)
                    FROM volume v
                        LEFT JOIN publisher p ON p.id = v.publisher_id
                        LEFT JOIN book b ON b.id = v.book_id
                        LEFT JOIN book_tag bt ON bt.book_id = b.id
                        LEFT JOIN category c ON c.id = b.category_id
                    WHERE bt.tag_id = __t.id ${whereQuery}
                ) as volumes_count
                FROM tag __t
                WHERE __t.status='A'
                AND EXISTS (
                    SELECT 1
                    FROM volume v
                        LEFT JOIN publisher p ON p.id = v.publisher_id
                        LEFT JOIN book b ON b.id = v.book_id
                        LEFT JOIN book_tag bt ON bt.book_id = b.id
                        LEFT JOIN category c ON c.id = b.category_id
                    WHERE bt.tag_id = __t.id ${whereQuery}
                )
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(DISTINCT __t.id) as total 
                    FROM tag __t 
                    WHERE __t.status='A' 
                    AND EXISTS (
                        SELECT 1 
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN book_tag bt ON bt.book_id = b.id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE bt.tag_id = __t.id ${whereQuery}
                    )
                `;
            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: tags,
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
