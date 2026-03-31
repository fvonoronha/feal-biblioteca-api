const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    // Operações de Consumo
    async listPublicCategories(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);
            const booksWhere = getBookFiltersWhereClause(filter);

            const where = {
                status: "A",
                books: {
                    some: {
                        status: "A"
                    }
                }
            };

            const categoryList = await db.category.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                where,
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    status: true,
                    description: true,
                    _count: {
                        select: {
                            books: {
                                where: booksWhere
                            }
                        }
                    }
                },
                orderBy: { name: "asc" }
            });

            const total = await db.category.count({ where });
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: categoryList,
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
