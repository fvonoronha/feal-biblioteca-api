const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { treatVolumeFilters } = require("../../utils/filters.service");
const { Prisma, db, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    // Operações de Consumo
    async listCategories(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    name: "__c.name",
                    search_name: "__c.search_name",
                    volumes_count: "volumes_count",
                    books_count: "books_count"
                }
            });

            const orderQuery = paginationObj.orderBy
                ? Prisma.sql`${paginationObj.orderQuery}, __c.name asc nulls last `
                : Prisma.sql`__c.name asc nulls last`;

            const whereQuery = treatVolumeFilters(filter).query;

            const categories = await db.$queryRaw`
                SELECT 
                    __c.id,
                    __c.slug,
                    __c.name,
                    __c.search_name,
                    __c.description,
                    (
                        SELECT count(distinct b.id)
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE b.category_id = __c.id ${whereQuery}
                    ) as books_count,
                    (
                        SELECT count(distinct v.id)
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE b.category_id = __c.id ${whereQuery}
                    ) as volumes_count
                FROM category __c
                WHERE __c.status='A' and EXISTS (
                        SELECT 1
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE b.category_id = __c.id ${whereQuery}
                    )
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
            SELECT COUNT(*) as total 
            FROM category __c 
            WHERE __c.status='A' AND
            EXISTS (
                        SELECT 1
                        FROM volume v
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE b.category_id = __c.id ${whereQuery}
                    )`;

            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: categories,
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
            console.log(err);
            return parseError(err);
        }
    }
};
