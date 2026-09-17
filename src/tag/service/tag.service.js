const { getSlug } = require("../../utils/id.service");
const { normalizeSearchText } = require("../../utils/string.service");
const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { treatVolumeFilters } = require("../../utils/filters.service");
const { db, Prisma, parseError, notFoundError } = require("../../utils/db.service");


module.exports = {
    async listTagsAdmin(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: { name: "__t.search_name", created_at: "__t.created_at", books_count: "books_count" }
            });

            const orderQuery = paginationObj.orderBy ? paginationObj.orderQuery : Prisma.sql`__t.search_name asc nulls last`;

            const cleanSearch = normalizeSearchText((filter?.search || "").trim());
            const searchFilter = cleanSearch ? Prisma.sql` AND unaccent(lower(__t.name)) ~* ${cleanSearch}` : Prisma.sql``;

            const tags = await db.$queryRaw`
                SELECT __t.id, __t.slug, __t.name, __t.description, __t.status,
                    (SELECT count(distinct bt.book_id) FROM book_tag bt WHERE bt.tag_id = __t.id AND bt.status = 'A') as books_count
                FROM tag __t
                WHERE __t.status != 'D' ${searchFilter}
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total FROM tag __t WHERE __t.status != 'D' ${searchFilter}`;

            return {
                elements: tags,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async createTag(data, req) {
        try {
            const newTag = await db.tag.create({
                data: {
                    slug: data.slug || getSlug(),
                    status: data.status || "A",
                    name: data.name,
                    search_name: normalizeSearchText(data.name),
                    description: data.description || null,
                    created_by_user_id: req.response.params.user.id
                }
            });

            return newTag;
        } catch (err) {
            return parseError(err);
        }
    },

    async updateTag(tagId, data, req) {
        try {
            const id = BigInt(tagId);

            const existing = await db.tag.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Tema não encontrado");
            }

            const updated = await db.tag.update({
                where: { id },
                data: {
                    ...(data.name !== undefined ? { name: data.name, search_name: normalizeSearchText(data.name) } : {}),
                    ...(data.description !== undefined ? { description: data.description } : {}),
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

    async deleteTag(tagId, req) {
        try {
            const id = BigInt(tagId);

            const existing = await db.tag.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Tema não encontrado");
            }

            await db.tag.update({
                where: { id },
                data: { status: "D", updated_at: new Date(), updated_by_user_id: req.response.params.user.id }
            });

            return { deleted: true };
        } catch (err) {
            return parseError(err);
        }
    },

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

            return {
                elements: tags,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    }
};
