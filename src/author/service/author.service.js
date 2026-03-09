const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

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

    // Operações de Consumo
    async listPublicAuthors(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            const authors = await db.author.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                where: {
                    // ToDo: Lisar apenas autores com obras publicadas
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

            return { elements: authors };
        } catch (err) {
            return parseError(err);
        }
    }
};
