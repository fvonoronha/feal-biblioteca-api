const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    // Operaçoes de Gerenciamento
    async createTag(tag, req) {
        try {
            const newTag = await db.tag.create({
                data: {
                    ...tag,
                    slug: tag.slug || getSlug(),
                    created_at: new Date(),
                    created_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    status: true,
                    description: true
                }
            });

            return newTag;
        } catch (err) {
            return parseError(err);
        }
    },

    async listTags(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            const tags = await db.tag.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                where: {
                    ...filter
                },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    status: true,
                    description: true
                }
            });

            return { elements: tags };
        } catch (err) {
            return parseError(err);
        }
    },

    async getTag(id, slug) {
        try {
            let filter = {};
            if (id) {
                filter.id = id;
            } else if (slug) {
                filter.slug = slug;
            } else {
                throw {
                    code: "P2025",
                    message: "Tag inválida"
                };
            }
            const tag = await db.tag.findFirst({
                where: {
                    ...filter
                },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    status: true,
                    description: true
                }
            });
            if (!tag)
                throw {
                    code: "P2025",
                    message: "Tag inválida"
                };
            return tag;
        } catch (err) {
            return parseError(err);
        }
    },

    // Operações de Consumo
    async listPublicTags(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);
            const booksWhere = getBookFiltersWhereClause(filter);

            const where = {
                status: "A",
                books: {
                    some: {
                        status: "A",
                        book: { status: "A" }
                    }
                }
            };

            const tagsList = await db.tag.findMany({
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
                                where: { status: "A", book: booksWhere }
                            }
                        }
                    }
                },
                orderBy: { name: "asc" }
            });

            const total = await db.tag.count({ where });
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: tagsList,
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

    // Operações de Consumo
    async explorePublicTags(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);
            const booksWhere = getBookFiltersWhereClause(filter);

            const where = {
                status: "A",
                books: {
                    some: {
                        status: "A",
                        book: { status: "A" }
                    }
                }
            };

            const tagsList = await db.tag.findMany({
                // skip: paginationObj.limit * (paginationObj.page - 1),
                // take: paginationObj.limit,
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
                                where: { status: "A", book: booksWhere }
                            }
                        }
                    }
                },
                orderBy: { name: "asc" }
            });

            const filtered = tagsList.filter((a) => a._count.books > 0).sort((a, b) => b._count.books - a._count.books);
            // .slice(paginationObj.limit * (paginationObj.page - 1), paginationObj.limit * paginationObj.page);

            const total = await db.tag.count({ where });
            const totalPages = Math.ceil(filtered.length / paginationObj.limit);

            return {
                elements: filtered.slice(
                    paginationObj.limit * (paginationObj.page - 1),
                    paginationObj.limit * paginationObj.page
                ),
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
