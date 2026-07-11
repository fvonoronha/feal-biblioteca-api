const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    // Operações de Consumo
    async listCategories(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            // ToDo: Tratar filtros

            const categories = await db.$queryRaw`
                SELECT 
                    c.id,
                    c.slug,
                    c.name,
                    c.search_name,
                    c.description,
                    (SELECT count(*) FROM book _b WHERE _b.category_id = c.id) as books_count,
                    (SELECT count(*) over() FROM book _b LEFT JOIN volume _v ON _v.book_id = _b.id WHERE _b.category_id = c.id GROUP BY _v.id LIMIT 1) as volumes_count
                FROM category c
                ORDER BY ${paginationObj.orderQuery} c.name asc nulls last
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`SELECT COUNT(*) as total FROM category`;
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
