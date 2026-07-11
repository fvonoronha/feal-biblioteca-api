const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    async listPublishers(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            // ToDo: Tratar filtros

            const publishers = await db.$queryRaw`
                SELECT 
                    p.id,
                    p.slug,
                    p.name,
                    p.search_name,
                    p.abbreviation,
                    p.description,
                    p.avatar_url,
                    (SELECT count(*) FROM volume _v WHERE _v.publisher_id = p.id) as volumes_count,
                    (SELECT count(*) over() FROM volume _v LEFT JOIN book _b ON _v.book_id = _b.id  WHERE _v.publisher_id = p.id GROUP BY _b.id LIMIT 1) as books_count
                FROM publisher p
                ORDER BY ${paginationObj.orderQuery} p.search_name asc nulls last
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`SELECT COUNT(*) as total FROM category`;
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
            console.log(err);
            return parseError(err);
        }
    }
};
