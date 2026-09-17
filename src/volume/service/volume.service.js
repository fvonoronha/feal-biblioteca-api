const { getSlug, getId } = require("../../utils/id.service");
const { parsePagination, buildPageMeta } = require("../../utils/pagination.service");
const { treatVolumeFilters, getVolumeSearchScore } = require("../../utils/filters.service");
const { db, Prisma, parseError, notFoundError } = require("../../utils/db.service");
const { processImage } = require("../../utils/image.service");
const { uploadObject } = require("../../utils/storage/r2.service");

const COVER_WIDTH = 800;
const COVER_HEIGHT = 1100;

// Quantos outros exemplares/edições do mesmo livro mostrar na página de detalhes quando o
// volume atual está emprestado ("outras opções disponíveis").
const MAX_SIBLING_VOLUMES = 8;

// Subconsulta reaproveitada nas 3 listagens: só existe no máximo um empréstimo ativo por
// volume (garantido pela constraint parcial `volume_loan_volume_id_active_key`), então basta
// pegar a data de devolução prevista e o usuário desse empréstimo, se houver algum.
const LOAN_AVAILABILITY_FIELDS = Prisma.sql`
    (SELECT vl.due_date FROM volume_loan vl WHERE vl.volume_id = v.id AND vl.return_date IS NULL AND vl.status = 'A' LIMIT 1) as loan_due_date,
    (SELECT vl.user_id FROM volume_loan vl WHERE vl.volume_id = v.id AND vl.return_date IS NULL AND vl.status = 'A' LIMIT 1) as loan_user_id
`;

// Transforma os dois campos crus vindos da subconsulta acima em algo seguro de expor
// publicamente: nunca vaza QUEM está com o volume, só SE está disponível, quando volta, e
// (só para o próprio interessado) se é ele mesmo quem está com o livro.
function attachAvailability(volume, currentUserId) {
    if (!volume) return volume;

    const loanUserId = volume.loan_user_id;
    volume.is_available = volume.loan_due_date == null;
    volume.loaned_to_current_user = loanUserId != null && currentUserId != null && String(loanUserId) === String(currentUserId);
    delete volume.loan_user_id;

    return volume;
}

module.exports = {
    async listVolumes(filter, pagination, currentUserId) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    search_score: "search_score",
                    label: "v.label",
                    title: "b.search_title",
                    year: "v.year",
                    edition: "v.edition",
                    pages: "v.pages",
                    last_month_access_count: "b.last_month_access_count",
                    all_time_access_count: "b.all_time_access_count"
                }
            });

            const orderQuery = paginationObj.orderBy
                ? Prisma.sql`${paginationObj.orderQuery}, search_score desc, b.search_title asc, v.label desc nulls last`
                : Prisma.sql`search_score desc, b.search_title asc, v.label desc nulls last`;

            const treated = treatVolumeFilters(filter);
            const whereQuery = treated.query;
            const searchScoreQuery = getVolumeSearchScore(filter, treated).query;

            const volumes = await db.$queryRaw`
            SELECT
                ${searchScoreQuery} as search_score,
                v.id,
                v.slug,
                v.year,
                v.edition,
                v.isbn,
                v.isbn_old,
                v.pages,
                v.cover_url,
                v.back_url,
                v.images_url,
                v.label,
                v.shelf,
                v.description,
                v.keywords,
                v.all_time_access_count,
                v.last_month_access_count,
                ${LOAN_AVAILABILITY_FIELDS},

                COALESCE(json_build_object(
                    'id', p.id,
                    'slug', p.slug,
                    'name', p.name,
                    'abbreviation', p.abbreviation,
                    'avatar_url', p.avatar_url), null) as publisher,

                COALESCE(json_build_object(
                    'id', b.id,
                    'slug', b.slug,
                    'title', b.title,
                    'subtitle', b.subtitle,
                    'summary', b.summary,
                    'description', b.description,
                    'recommended_for', b.recommended_for,
                    'keywords', b.keywords,
                    'last_month_access_count', b.last_month_access_count,
                    'all_time_access_count', b.all_time_access_count), null) as book,

                COALESCE(json_build_object(
                    'id', c.id,
                    'slug', c.slug,
                    'name', c.name), null) as category,

                COALESCE((
                    SELECT json_agg( json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
                    FROM tag _t
                    JOIN book_tag _bt ON _t.id = _bt.tag_id
                    WHERE _bt.book_id = b.id AND _bt.status = 'A'
                ), '[]'::json) as tags,

                COALESCE((
                        SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit)
                        )
                        FROM author _a
                        JOIN volume_author _va ON _a.id = _va.author_id
                        WHERE _va.volume_id = v.id AND _va.status = 'A'
                    ), '[]'::json) as authors

            FROM volume v
                LEFT JOIN publisher p ON p.id = v.publisher_id
                LEFT JOIN book b ON b.id = v.book_id
                LEFT JOIN category c ON c.id = b.category_id
            WHERE v.status= 'A' ${whereQuery}
            ORDER BY  ${paginationObj.orderBy ? Prisma.sql`${paginationObj.orderQuery},` : Prisma.empty} b.search_title ASC
            LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}
        `;
            // Contagem total para a paginação
            const countResult = await db.$queryRaw`
            SELECT COUNT(*) as total
            FROM volume v
            LEFT JOIN publisher p ON p.id = v.publisher_id
            LEFT JOIN book b ON b.id = v.book_id
            LEFT JOIN category c ON c.id = b.category_id
            WHERE v.status= 'A' ${whereQuery}
            `;

            volumes.forEach((volume) => attachAvailability(volume, currentUserId));

            return {
                elements: volumes,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async getVolume(slug, currentUserId) {
        const whereQuery = Prisma.sql` AND v.slug=${slug}`;

        try {
            const volume = await db.$queryRaw`
            SELECT
                v.id,
                v.slug,
                v.year,
                v.edition,
                v.isbn,
                v.isbn_old,
                v.pages,
                v.cover_url,
                v.back_url,
                v.images_url,
                v.label,
                v.shelf,
                v.description,
                v.keywords,
                v.all_time_access_count,
                v.last_month_access_count,
                ${LOAN_AVAILABILITY_FIELDS},

                COALESCE(json_build_object(
                    'id', p.id,
                    'slug', p.slug,
                    'name', p.name,
                    'abbreviation', p.abbreviation,
                    'avatar_url', p.avatar_url), null) as publisher,

                COALESCE(json_build_object(
                    'id', b.id,
                    'slug', b.slug,
                    'title', b.title,
                    'subtitle', b.subtitle,
                    'summary', b.summary,
                    'description', b.description,
                    'recommended_for', b.recommended_for,
                    'keywords', b.keywords,
                    'last_month_access_count', b.last_month_access_count,
                    'all_time_access_count', b.all_time_access_count), null) as book,

                COALESCE(json_build_object(
                    'id', c.id,
                    'slug', c.slug,
                    'name', c.name), null) as category,

                COALESCE((
                    SELECT json_agg( json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
                    FROM tag _t
                    JOIN book_tag _bt ON _t.id = _bt.tag_id
                    WHERE _bt.book_id = b.id AND _bt.status = 'A'
                ), '[]'::json) as tags,

                COALESCE((
                        SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit)
                        )
                        FROM author _a
                        JOIN volume_author _va ON _a.id = _va.author_id
                        WHERE _va.volume_id = v.id AND _va.status = 'A'
                    ), '[]'::json) as authors

            FROM volume v
                LEFT JOIN publisher p ON p.id = v.publisher_id
                LEFT JOIN book b ON b.id = v.book_id
                LEFT JOIN category c ON c.id = b.category_id
            WHERE v.status= 'A' ${whereQuery}
            LIMIT 1
        `;

            if (!volume[0]) {
                throw notFoundError("Volume não encontrado");
            }

            const result = attachAvailability(volume[0], currentUserId);

            // Só vale a pena buscar/mostrar "outros exemplares" quando este aqui está
            // indisponível - é exatamente a situação em que o usuário precisa de uma
            // alternativa para conseguir pegar o mesmo livro emprestado.
            if (result.is_available === false) {
                const siblings = await db.$queryRaw`
                    SELECT
                        sv.id, sv.slug, sv.cover_url, sv.label, sv.edition, sv.year,
                        (SELECT vl.due_date FROM volume_loan vl WHERE vl.volume_id = sv.id AND vl.return_date IS NULL AND vl.status = 'A' LIMIT 1) as loan_due_date,
                        (SELECT vl.user_id FROM volume_loan vl WHERE vl.volume_id = sv.id AND vl.return_date IS NULL AND vl.status = 'A' LIMIT 1) as loan_user_id
                    FROM volume sv
                    WHERE sv.book_id = (SELECT book_id FROM volume WHERE id = ${result.id})
                        AND sv.id != ${result.id}
                        AND sv.status = 'A'
                    ORDER BY sv.year DESC NULLS LAST
                    LIMIT ${MAX_SIBLING_VOLUMES}`;

                result.sibling_volumes = siblings.map((sibling) => attachAvailability(sibling, currentUserId));
            } else {
                result.sibling_volumes = [];
            }

            return result;
        } catch (err) {
            return parseError(err);
        }
    },

    async listRelatedVolumes(volumeId, filter, pagination, currentUserId) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    search_score: "search_score"
                }
            });

            const volumes = await db.$queryRaw`
            WITH target_info AS (
                SELECT
                    v.id as volume_id,
                    v.book_id,
                    b.category_id,
                    v.publisher_id
                FROM volume v
                LEFT JOIN book b ON b.id = v.book_id
                WHERE v.id = ${volumeId}
                LIMIT 1
            ),
            target_authors AS (
                SELECT author_id
                FROM volume_author
                WHERE volume_id = ${volumeId} AND status = 'A'
            ),
            target_tags AS (
                SELECT tag_id
                FROM book_tag
                WHERE book_id = (SELECT book_id FROM target_info) AND status = 'A'
            )

            SELECT
                (
                    (CASE WHEN c.id = (SELECT category_id FROM target_info) THEN 3 ELSE 0 END) +
                    (CASE WHEN v.publisher_id = (SELECT publisher_id FROM target_info) THEN 1 ELSE 0 END) +
                    COALESCE((
                        SELECT COUNT(*)::int * 5
                        FROM volume_author va
                        WHERE va.volume_id = v.id
                          AND va.status = 'A'
                          AND va.author_id IN (SELECT author_id FROM target_authors)
                    ), 0) +
                    COALESCE((
                        SELECT COUNT(*)::int * 2
                        FROM book_tag bt
                        WHERE bt.book_id = b.id
                          AND bt.status = 'A'
                          AND bt.tag_id IN (SELECT tag_id FROM target_tags)
                    ), 0)
                ) as search_score,
                v.id,
                v.slug,
                v.year,
                v.edition,
                v.isbn,
                v.isbn_old,
                v.pages,
                v.cover_url,
                v.back_url,
                v.images_url,
                v.label,
                v.shelf,
                v.description,
                v.keywords,
                v.all_time_access_count,
                v.last_month_access_count,
                ${LOAN_AVAILABILITY_FIELDS},

                COALESCE(json_build_object(
                    'id', p.id, 'slug', p.slug, 'name', p.name,
                    'abbreviation', p.abbreviation, 'avatar_url', p.avatar_url
                ), null) as publisher,

                COALESCE(json_build_object(
                    'id', b.id, 'slug', b.slug, 'title', b.title,
                    'subtitle', b.subtitle, 'summary', b.summary,
                    'description', b.description, 'recommended_for', b.recommended_for,
                    'keywords', b.keywords, 'last_month_access_count', b.last_month_access_count,
                    'all_time_access_count', b.all_time_access_count
                ), null) as book,

                COALESCE(json_build_object(
                    'id', c.id, 'slug', c.slug, 'name', c.name
                ), null) as category,

                COALESCE((
                    SELECT json_agg(json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
                    FROM tag _t
                    JOIN book_tag _bt ON _t.id = _bt.tag_id
                    WHERE _bt.book_id = b.id AND _bt.status = 'A'
                ), '[]'::json) as tags,

                COALESCE((
                    SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit))
                    FROM author _a
                    JOIN volume_author _va ON _a.id = _va.author_id
                    WHERE _va.volume_id = v.id AND _va.status = 'A'
                ), '[]'::json) as authors

            FROM volume v
            LEFT JOIN publisher p ON p.id = v.publisher_id
            LEFT JOIN book b ON b.id = v.book_id
            LEFT JOIN category c ON c.id = b.category_id

            WHERE v.status = 'A'
              AND  b.id != (select book_id from volume where id = ${volumeId})

            -- O segredo da aleatoriedade ponderada está aqui.
            -- Somamos um valor de 0 a 3 ao score base, embaralhando resultados com scores parecidos.
            -- Se todos os scores forem 0 (nenhuma relação), RANDOM() faz com que retorne aleatório.
            ORDER BY (
                (CASE WHEN c.id = (SELECT category_id FROM target_info) THEN 3 ELSE 0 END) +
                (CASE WHEN v.publisher_id = (SELECT publisher_id FROM target_info) THEN 1 ELSE 0 END) +
                COALESCE((SELECT COUNT(*)::int * 5 FROM volume_author va WHERE va.volume_id = v.id AND va.status = 'A' AND va.author_id IN (SELECT author_id FROM target_authors)), 0) +
                COALESCE((SELECT COUNT(*)::int * 2 FROM book_tag bt WHERE bt.book_id = b.id AND bt.status = 'A' AND bt.tag_id IN (SELECT tag_id FROM target_tags)), 0)
            ) + (RANDOM() * 3) DESC

            LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}
        `;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total
                FROM volume v
                LEFT JOIN book b ON b.id = v.book_id
                WHERE v.status = 'A' AND b.id != (select book_id from volume where id = ${volumeId})
            `;

            volumes.forEach((volume) => attachAvailability(volume, currentUserId));

            return {
                elements: volumes,
                pagination: buildPageMeta(paginationObj, countResult[0].total)
            };
        } catch (err) {
            return parseError(err);
        }
    },

    // Adiciona uma nova edição/exemplar a um livro JÁ existente (o primeiro volume de um livro
    // novo é criado junto com o Book, em book.service.js#createBook).
    async createVolume(data, req) {
        try {
            const bookId = BigInt(data.book_id);

            const book = await db.book.findFirst({ where: { id: bookId, status: { not: "D" } }, select: { id: true } });
            if (!book) {
                throw notFoundError("Livro não encontrado");
            }

            const newVolume = await db.volume.create({
                data: {
                    slug: data.slug || getSlug(),
                    status: data.status || "A",
                    book_id: bookId,
                    publisher_id: data.publisher_id ? BigInt(data.publisher_id) : null,
                    year: data.year,
                    edition: data.edition,
                    isbn: data.isbn,
                    isbn_old: data.isbn_old,
                    pages: data.pages,
                    description: data.description,
                    pdf_url: data.pdf_url,
                    cover_url: data.cover_url,
                    back_url: data.back_url,
                    images_url: data.images_url || [],
                    keywords: data.keywords || [],
                    label: data.label,
                    shelf: data.shelf,
                    created_by_user_id: req.response.params.user.id
                }
            });

            return newVolume;
        } catch (err) {
            return parseError(err);
        }
    },

    async updateVolume(volumeId, data, req) {
        try {
            const id = BigInt(volumeId);

            const existing = await db.volume.findFirst({ where: { id, status: { not: "D" } } });
            if (!existing) {
                throw notFoundError("Volume não encontrado");
            }

            const updated = await db.volume.update({
                where: { id },
                data: {
                    ...(data.publisher_id !== undefined
                        ? { publisher_id: data.publisher_id ? BigInt(data.publisher_id) : null }
                        : {}),
                    ...(data.year !== undefined ? { year: data.year } : {}),
                    ...(data.edition !== undefined ? { edition: data.edition } : {}),
                    ...(data.isbn !== undefined ? { isbn: data.isbn } : {}),
                    ...(data.isbn_old !== undefined ? { isbn_old: data.isbn_old } : {}),
                    ...(data.pages !== undefined ? { pages: data.pages } : {}),
                    ...(data.description !== undefined ? { description: data.description } : {}),
                    ...(data.pdf_url !== undefined ? { pdf_url: data.pdf_url } : {}),
                    ...(data.cover_url !== undefined ? { cover_url: data.cover_url } : {}),
                    ...(data.back_url !== undefined ? { back_url: data.back_url } : {}),
                    ...(data.images_url !== undefined ? { images_url: data.images_url } : {}),
                    ...(data.keywords !== undefined ? { keywords: data.keywords } : {}),
                    ...(data.label !== undefined ? { label: data.label } : {}),
                    ...(data.shelf !== undefined ? { shelf: data.shelf } : {}),
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

    // Processa a imagem enviada (resize 800x1100, JPEG sem metadados), envia para o R2 em
    // /capa e salva a URL resultante em cover_url. O nome do arquivo é <slug-do-volume>-<short-id>
    // para nunca colidir mesmo trocando a capa várias vezes do mesmo volume.
    async uploadCoverImage(volumeId, fileBuffer, req) {
        try {
            const id = BigInt(volumeId);

            const existing = await db.volume.findFirst({
                where: { id, status: { not: "D" } },
                select: { id: true, slug: true }
            });
            if (!existing) {
                throw notFoundError("Volume não encontrado");
            }

            const processedImage = await processImage(fileBuffer, COVER_WIDTH, COVER_HEIGHT);
            const filename = `${existing.slug}-${getId(8)}.jpg`;
            const coverUrl = await uploadObject(`capa/${filename}`, processedImage, "image/jpeg");

            return await module.exports.updateVolume(volumeId, { cover_url: coverUrl }, req);
        } catch (err) {
            return parseError(err);
        }
    },

    // Mesmo padrão de uploadCoverImage, mas grava em back_url (verso do livro) - pasta
    // separada (capa/verso) só para manter os arquivos organizados por tipo dentro do bucket.
    async uploadBackImage(volumeId, fileBuffer, req) {
        try {
            const id = BigInt(volumeId);

            const existing = await db.volume.findFirst({
                where: { id, status: { not: "D" } },
                select: { id: true, slug: true }
            });
            if (!existing) {
                throw notFoundError("Volume não encontrado");
            }

            const processedImage = await processImage(fileBuffer, COVER_WIDTH, COVER_HEIGHT);
            const filename = `${existing.slug}-${getId(8)}.jpg`;
            const backUrl = await uploadObject(`capa/verso/${filename}`, processedImage, "image/jpeg");

            return await module.exports.updateVolume(volumeId, { back_url: backUrl }, req);
        } catch (err) {
            return parseError(err);
        }
    },

    // Mesmo padrão, mas ANEXA ao array images_url em vez de substituir um campo único - um
    // volume pode ter várias imagens auxiliares (ex.: dedicatória, contracapa, folha de rosto).
    async addAuxImage(volumeId, fileBuffer, req) {
        try {
            const id = BigInt(volumeId);

            const existing = await db.volume.findFirst({
                where: { id, status: { not: "D" } },
                select: { id: true, slug: true, images_url: true }
            });
            if (!existing) {
                throw notFoundError("Volume não encontrado");
            }

            const processedImage = await processImage(fileBuffer, COVER_WIDTH, COVER_HEIGHT);
            const filename = `${existing.slug}-${getId(8)}.jpg`;
            const imageUrl = await uploadObject(`capa/extra/${filename}`, processedImage, "image/jpeg");

            return await module.exports.updateVolume(volumeId, { images_url: [...existing.images_url, imageUrl] }, req);
        } catch (err) {
            return parseError(err);
        }
    },

    // Remove uma URL específica do array de imagens auxiliares (ex.: o usuário decide que uma
    // imagem enviada por engano não deve mais aparecer). Não apaga o objeto do R2 - só
    // desvincula, mesmo espírito de como o resto do catálogo trata remoção (soft, nunca perde
    // o arquivo em si).
    async removeAuxImage(volumeId, imageUrl, req) {
        try {
            const id = BigInt(volumeId);

            const existing = await db.volume.findFirst({
                where: { id, status: { not: "D" } },
                select: { id: true, images_url: true }
            });
            if (!existing) {
                throw notFoundError("Volume não encontrado");
            }

            return await module.exports.updateVolume(
                volumeId,
                { images_url: existing.images_url.filter((url) => url !== imageUrl) },
                req
            );
        } catch (err) {
            return parseError(err);
        }
    },

    async deleteVolume(volumeId, req) {
        try {
            const id = BigInt(volumeId);

            const existing = await db.volume.findFirst({ where: { id, status: { not: "D" } }, select: { id: true } });
            if (!existing) {
                throw notFoundError("Volume não encontrado");
            }

            const activeLoan = await db.$queryRaw`
                SELECT id FROM volume_loan WHERE volume_id = ${id} AND return_date IS NULL AND status = 'A' LIMIT 1`;

            if (activeLoan[0]) {
                return {
                    httpStatus: "CONFLICT",
                    error: [{ field: "id", message: "Este volume está emprestado no momento e não pode ser removido." }]
                };
            }

            await db.volume.update({
                where: { id },
                data: { status: "D", updated_at: new Date(), updated_by_user_id: req.response.params.user.id }
            });

            return { deleted: true };
        } catch (err) {
            return parseError(err);
        }
    }
};
