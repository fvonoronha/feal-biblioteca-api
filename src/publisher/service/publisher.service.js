const { getSlug } = require("../../utils/id.service");
const { normalizeSearchText } = require("../../utils/string.service");
const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { treatVolumeFilters } = require("../../utils/filters.service");
const { db, Prisma, parseError, notFoundError } = require("../../utils/db.service");


module.exports = {
    async listPublishersAdmin(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: { name: "__p.search_name", created_at: "__p.created_at", volumes_count: "volumes_count" }
            });

            const orderQuery = paginationObj.orderBy ? paginationObj.orderQuery : Prisma.sql`__p.search_name asc nulls last`;

            const cleanSearch = normalizeSearchText((filter?.search || "").trim());
            const searchFilter = cleanSearch
                ? Prisma.sql` AND (unaccent(lower(__p.name)) ~* ${cleanSearch} OR unaccent(lower(__p.abbreviation)) ~* ${cleanSearch})`
                : Prisma.sql``;

            const publishers = await db.$queryRaw`
                SELECT __p.id, __p.slug, __p.name, __p.abbreviation, __p.description, __p.avatar_url, __p.status,
                    (SELECT count(distinct v.id) FROM volume v WHERE v.publisher_id = __p.id AND v.status = 'A') as volumes_count
                FROM publisher __p
                WHERE __p.status != 'D' ${searchFilter}
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total FROM publisher __p WHERE __p.status != 'D' ${searchFilter}`;

            return {
                elements: publishers,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async createPublisher(data, req) {
        try {
            const newPublisher = await db.publisher.create({
                data: {
                    slug: data.slug || getSlug(),
                    status: data.status || "A",
                    name: data.name,
                    search_name: normalizeSearchText(data.name),
                    abbreviation: data.abbreviation || null,
                    description: data.description || null,
                    avatar_url: data.avatar_url || null,
                    created_by_user_id: req.response.params.user.id
                }
            });

            return newPublisher;
        } catch (err) {
            return parseError(err);
        }
    },

    async updatePublisher(publisherId, data, req) {
        try {
            const id = BigInt(publisherId);

            const existing = await db.publisher.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Editora não encontrada");
            }

            const updated = await db.publisher.update({
                where: { id },
                data: {
                    ...(data.name !== undefined ? { name: data.name, search_name: normalizeSearchText(data.name) } : {}),
                    ...(data.abbreviation !== undefined ? { abbreviation: data.abbreviation } : {}),
                    ...(data.description !== undefined ? { description: data.description } : {}),
                    ...(data.avatar_url !== undefined ? { avatar_url: data.avatar_url } : {}),
                    ...(data.status !== undefined ? { status: data.status } : {}),
                    updated_at: new Date(),
                    updated_by_user_id: req.response.params.user.id
                }
            });

            return updated;
        } catch (err) {
            return parseError(err);
        }
    },

    async deletePublisher(publisherId, req) {
        try {
            const id = BigInt(publisherId);

            const existing = await db.publisher.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Editora não encontrada");
            }

            await db.publisher.update({
                where: { id },
                data: { status: "D", updated_at: new Date(), updated_by_user_id: req.response.params.user.id }
            });

            return { deleted: true };
        } catch (err) {
            return parseError(err);
        }
    },

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

            return {
                elements: publishers,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
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
