const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

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

            const tags = await db.tag.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                where: {
                    ...filter,
                    status: "A"
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
    }
};
