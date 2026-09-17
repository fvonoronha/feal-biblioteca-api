const { getId } = require("../../utils/id.service");
const { generateUniqueSlug } = require("../../utils/slug.service");
const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { treatVolumeFilters, getAuthorSearchScore } = require("../../utils/filters.service");
const { normalizeSearchText } = require("../../utils/string.service");
const { db, Prisma, parseError, notFoundError } = require("../../utils/db.service");
const { processImage } = require("../../utils/image.service");
const { uploadObject } = require("../../utils/storage/r2.service");

const AVATAR_SIZE = 800;


const AUTHOR_FIELDS = Prisma.sql`
    __a.id, __a.slug, __a.name, __a.description, __a.avatar_url, __a.is_spirit,
    __a.birth_date, __a.death_date, __a.status
`;

module.exports = {
    async listAuthors(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    search_score: "search_score",
                    name: "__a.search_name",
                    volumes_count: "volumes_count",
                    books_count: "books_count"
                }
            });

            const orderQuery = paginationObj.orderBy
                ? Prisma.sql`${paginationObj.orderQuery}, search_score desc, __a.search_name asc nulls last `
                : Prisma.sql`search_score desc, __a.search_name asc nulls last`;

            const treated = treatVolumeFilters(filter);
            const whereQuery = treated.query;
            const searchScoreQuery = getAuthorSearchScore(filter, treated).query;

            const exploreFilter = filter?.explore
                ? Prisma.sql`AND (
                __a.slug in (
                        'kardec',
                        'andreluiz',
                        'chico-xavier',
                        'divaldo',
                        'emmanuel',
                        'guillon',
                        'irmao-x',
                        'joannadeangelis',
                        'leon-denis',
                        'richardsimonetti',
                        'vera-lucia',
                        'yvonnepereira'
                    )
            )`
                : Prisma.empty;

            const authors = await db.$queryRaw`
                SELECT
                    ${searchScoreQuery} as search_score,
                    __a.id,
                    __a.slug,
                    __a.name,
                    __a.search_name,
                    __a.description,
                    __a.avatar_url,
                    __a.is_spirit,
                    (
                        SELECT count(distinct v.id)
                        FROM volume_author _va
                            LEFT JOIN volume v ON v.id = _va.volume_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE _va.author_id = __a.id ${whereQuery}
                    ) as volumes_count,
                    (
                        SELECT count(distinct b.id)
                        FROM volume_author _va
                            LEFT JOIN volume v ON v.id = _va.volume_id
                            LEFT JOIN book b ON b.id = v.book_id
                            LEFT JOIN publisher p ON p.id = v.publisher_id
                            LEFT JOIN category c ON c.id = b.category_id
                        WHERE _va.author_id = __a.id ${whereQuery}
                    ) as books_count
                FROM author __a
                WHERE __a.status='A' ${exploreFilter}
                AND EXISTS (
                    SELECT 1
                    FROM volume v
                        LEFT JOIN publisher p ON p.id = v.publisher_id
                        LEFT JOIN book b ON b.id = v.book_id
                        LEFT JOIN volume_author va ON va.volume_id = v.id
                        LEFT JOIN category c ON c.id = b.category_id
                    WHERE va.author_id = __a.id ${whereQuery}
                )
                ORDER BY  ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total
                FROM author __a
                WHERE __a.status='A'
                AND EXISTS (
                    SELECT 1
                    FROM volume v
                        LEFT JOIN publisher p ON p.id = v.publisher_id
                        LEFT JOIN book b ON b.id = v.book_id
                        LEFT JOIN volume_author va ON va.volume_id = v.id
                        LEFT JOIN category c ON c.id = b.category_id
                    WHERE va.author_id = __a.id ${whereQuery}
                )
                `;

            return {
                elements: authors,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    // Listagem administrativa: ao contrário de listAuthors (só mostra quem já tem algum
    // volume vinculado, para não poluir a home/exploração pública), aqui um autor recém-criado
    // sem nenhum livro ainda precisa aparecer imediatamente para o operador continuar o cadastro.
    async listAuthorsAdmin(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    name: "__a.search_name",
                    created_at: "__a.created_at",
                    volumes_count: "volumes_count"
                }
            });

            const orderQuery = paginationObj.orderBy ? paginationObj.orderQuery : Prisma.sql`__a.search_name asc nulls last`;

            const cleanSearch = normalizeSearchText((filter?.search || "").trim());
            const searchFilter = cleanSearch
                ? Prisma.sql` AND unaccent(lower(__a.name)) ~* ${cleanSearch}`
                : Prisma.sql``;
            const spiritFilter =
                filter?.is_spirit === true
                    ? Prisma.sql` AND __a.is_spirit = true`
                    : filter?.is_spirit === false
                      ? Prisma.sql` AND __a.is_spirit = false`
                      : Prisma.sql``;

            const authors = await db.$queryRaw`
                SELECT ${AUTHOR_FIELDS},
                    (SELECT count(distinct v.id) FROM volume_author _va LEFT JOIN volume v ON v.id = _va.volume_id
                        WHERE _va.author_id = __a.id AND _va.status = 'A') as volumes_count
                FROM author __a
                WHERE __a.status != 'D' ${searchFilter} ${spiritFilter}
                ORDER BY ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total FROM author __a
                WHERE __a.status != 'D' ${searchFilter} ${spiritFilter}`;

            return {
                elements: authors,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    // Página/modal pública do autor: dados biográficos + todos os volumes (com disponibilidade)
    // em que ele está creditado, sem duplicar aqui a lógica de disponibilidade dos volumes -
    // reaproveita a mesma subconsulta usada em volume.service.js.
    async getAuthor(slug, currentUserId) {
        try {
            const [author] = await db.$queryRaw`
                SELECT ${AUTHOR_FIELDS}
                FROM author __a
                WHERE __a.slug = ${slug} AND __a.status != 'D'
                LIMIT 1`;

            if (!author) {
                throw notFoundError("Autor não encontrado");
            }

            const volumes = await db.$queryRaw`
                SELECT
                    v.id, v.slug, v.year, v.cover_url, v.label,
                    _va.description as role,
                    (SELECT vl.due_date FROM volume_loan vl WHERE vl.volume_id = v.id AND vl.return_date IS NULL AND vl.status = 'A' LIMIT 1) as loan_due_date,
                    (SELECT vl.user_id FROM volume_loan vl WHERE vl.volume_id = v.id AND vl.return_date IS NULL AND vl.status = 'A' LIMIT 1) as loan_user_id,
                    json_build_object('id', b.id, 'slug', b.slug, 'title', b.title) as book,
                    COALESCE(json_build_object('id', c.id, 'slug', c.slug, 'name', c.name), null) as category
                FROM volume_author _va
                LEFT JOIN volume v ON v.id = _va.volume_id
                LEFT JOIN book b ON b.id = v.book_id
                LEFT JOIN category c ON c.id = b.category_id
                WHERE _va.author_id = ${author.id} AND _va.status = 'A' AND v.status = 'A'
                ORDER BY v.year DESC NULLS LAST, b.search_title ASC`;

            author.volumes = volumes.map((volume) => {
                const isAvailable = volume.loan_due_date == null;
                const loanedToCurrentUser =
                    volume.loan_user_id != null && currentUserId != null && String(volume.loan_user_id) === String(currentUserId);
                delete volume.loan_user_id;
                return { ...volume, is_available: isAvailable, loaned_to_current_user: loanedToCurrentUser };
            });

            return author;
        } catch (err) {
            return parseError(err);
        }
    },

    // Operações para o Gemini
    async getAuthorMetaForGemini(slug) {
        try {
            const author = await db.author.findFirst({
                where: { slug, status: { not: "D" } },
                select: { id: true, slug: true, name: true, description: true, is_spirit: true, birth_date: true, death_date: true }
            });

            if (!author) {
                throw notFoundError("Autor não encontrado");
            }

            return author;
        } catch (err) {
            return parseError(err);
        }
    },

    async createAuthor(data, req) {
        try {
            const slug =
                data.slug || (await generateUniqueSlug(data.name, (slug) => db.author.findFirst({ where: { slug } })));

            const newAuthor = await db.author.create({
                data: {
                    slug,
                    status: data.status || "A",
                    name: data.name,
                    search_name: normalizeSearchText(data.name),
                    description: data.description || null,
                    avatar_url: data.avatar_url || null,
                    is_spirit: !!data.is_spirit,
                    birth_date: data.birth_date || null,
                    death_date: data.death_date || null,
                    created_by_user_id: req.response.params.user.id
                }
            });

            return newAuthor;
        } catch (err) {
            return parseError(err);
        }
    },

    async updateAuthor(authorId, data, req) {
        try {
            const id = BigInt(authorId);

            const existing = await db.author.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Autor não encontrado");
            }

            const updated = await db.author.update({
                where: { id },
                data: {
                    ...(data.name !== undefined ? { name: data.name, search_name: normalizeSearchText(data.name) } : {}),
                    ...(data.description !== undefined ? { description: data.description } : {}),
                    ...(data.status !== undefined ? { status: data.status } : {}),
                    ...(data.avatar_url !== undefined ? { avatar_url: data.avatar_url } : {}),
                    ...(data.is_spirit !== undefined ? { is_spirit: data.is_spirit } : {}),
                    ...(data.birth_date !== undefined ? { birth_date: data.birth_date } : {}),
                    ...(data.death_date !== undefined ? { death_date: data.death_date } : {}),
                    updated_at: new Date(),
                    updated_by_user_id: req.response.params.user.id
                }
            });

            return updated;
        } catch (err) {
            return parseError(err);
        }
    },

    // Processa a imagem enviada (resize 800x800, JPEG sem metadados), envia para o R2 em
    // /autor e salva a URL resultante em avatar_url. Nome do arquivo: <slug-do-autor>-<short-id>.
    async uploadAvatarImage(authorId, fileBuffer, req) {
        try {
            const id = BigInt(authorId);

            const existing = await db.author.findFirst({
                where: { id, status: { not: "D" } },
                select: { id: true, slug: true }
            });
            if (!existing) {
                throw notFoundError("Autor não encontrado");
            }

            const processedImage = await processImage(fileBuffer, AVATAR_SIZE, AVATAR_SIZE);
            const filename = `${existing.slug}-${getId(8, "hex")}.jpg`;
            const avatarUrl = await uploadObject(`autor/${filename}`, processedImage, "image/jpeg");

            return await module.exports.updateAuthor(authorId, { avatar_url: avatarUrl }, req);
        } catch (err) {
            return parseError(err);
        }
    },

    async deleteAuthor(authorId, req) {
        try {
            const id = BigInt(authorId);

            const existing = await db.author.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Autor não encontrado");
            }

            await db.author.update({
                where: { id },
                data: { status: "D", updated_at: new Date(), updated_by_user_id: req.response.params.user.id }
            });

            return { deleted: true };
        } catch (err) {
            return parseError(err);
        }
    }
};
