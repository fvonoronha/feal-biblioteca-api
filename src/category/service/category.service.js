const { getSlug } = require("../../utils/id.service");
const { normalizeSearchText } = require("../../utils/string.service");
const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { treatVolumeFilters } = require("../../utils/filters.service");
const { Prisma, db, parseError, notFoundError } = require("../../utils/db.service");

// Mesma normalização documentada para search_title/search_name em outros services (sem
// espaços - reproduz `regexp_replace(lower(unaccent(name)), '[^a-z0-9]', '', 'g')`, já que não
// há trigger no banco fazendo isso). Diferente de `normalizeSearchText` (que preserva espaços
// e serve para normalizar a BUSCA de entrada, não a coluna armazenada).

module.exports = {
    // Listagem administrativa: sem o EXISTS de listCategories (que só mostra quem já tem
    // volume vinculado) - uma categoria recém-criada precisa aparecer na hora.
    async listCategoriesAdmin(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: { name: "__c.search_name", created_at: "__c.created_at", books_count: "books_count" }
            });

            const orderQuery = paginationObj.orderBy ? paginationObj.orderQuery : Prisma.sql`__c.search_name asc nulls last`;

            const cleanSearch = normalizeSearchText((filter?.search || "").trim());
            const searchFilter = cleanSearch ? Prisma.sql` AND unaccent(lower(__c.name)) ~* ${cleanSearch}` : Prisma.sql``;

            const categories = await db.$queryRaw`
                SELECT __c.id, __c.slug, __c.name, __c.description, __c.status,
                    (SELECT count(distinct b.id) FROM book b WHERE b.category_id = __c.id AND b.status = 'A') as books_count
                FROM category __c
                WHERE __c.status != 'D' ${searchFilter}
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total FROM category __c WHERE __c.status != 'D' ${searchFilter}`;

            return {
                elements: categories,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async createCategory(data, req) {
        try {
            const newCategory = await db.category.create({
                data: {
                    slug: data.slug || getSlug(),
                    status: data.status || "A",
                    name: data.name,
                    search_name: normalizeSearchText(data.name),
                    description: data.description || null,
                    created_by_user_id: req.response.params.user.id
                }
            });

            return newCategory;
        } catch (err) {
            return parseError(err);
        }
    },

    async updateCategory(categoryId, data, req) {
        try {
            const id = BigInt(categoryId);

            const existing = await db.category.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Categoria não encontrada");
            }

            const updated = await db.category.update({
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

    async deleteCategory(categoryId, req) {
        try {
            const id = BigInt(categoryId);

            const existing = await db.category.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Categoria não encontrada");
            }

            await db.category.update({
                where: { id },
                data: { status: "D", updated_at: new Date(), updated_by_user_id: req.response.params.user.id }
            });

            return { deleted: true };
        } catch (err) {
            return parseError(err);
        }
    },

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

            return {
                elements: categories,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    }
};
