const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    // Operaçoes de Gerenciamento
    async createAuthor(author, req) {
        try {
            const newAuthor = await db.author.create({
                data: {
                    ...author,
                    slug: author.slug || getSlug(),
                    created_at: new Date(),
                    created_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    status: true,
                    description: true,
                    avatar_url: true,
                    is_spirit: true
                }
            });

            return newAuthor;
        } catch (err) {
            return parseError(err);
        }
    },

    async listAuthors(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            const authors = await db.author.findMany({
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
                    description: true,
                    avatar_url: true,
                    is_spirit: true
                }
            });

            return { elements: authors };
        } catch (err) {
            return parseError(err);
        }
    },

    async getAuthor(id, slug) {
        try {
            let filter = {};
            if (id) {
                filter.id = id;
            } else if (slug) {
                filter.slug = slug;
            } else {
                throw {
                    code: "P2025",
                    message: "Autor inválido"
                };
            }
            const author = await db.author.findFirst({
                where: {
                    ...filter,
                    status: "A"
                },
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    status: true,
                    description: true,
                    avatar_url: true,
                    is_spirit: true
                }
            });
            if (!author)
                throw {
                    code: "P2025",
                    message: "Autor inválido"
                };
            return author;
        } catch (err) {
            return parseError(err);
        }
    },

    async listPublicAuthors(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);
            const booksWhere = getBookFiltersWhereClause(filter);

            const where = {
                status: "A",
                // Filtra autores que tenham "algum" livro que bata com o where de livros
                books: {
                    some: {
                        status: "A",
                        book: { status: "A" }
                        //book: booksWhere // Acessa o objeto livro através da pivot
                    }
                }
            };

            const authorsList = await db.author.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                where,
                select: {
                    id: true,
                    slug: true,
                    name: true,
                    status: true,
                    description: true,
                    avatar_url: true,
                    is_spirit: true,
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

            const total = await db.author.count({ where });
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: authorsList,
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
