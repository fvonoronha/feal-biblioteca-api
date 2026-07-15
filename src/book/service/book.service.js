const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");
const { getBookFiltersWhereClause } = require("../../utils/filters.service");

const bookSelectFields = {};
module.exports = {
    // Operaçoes de Gerenciamento
    async createBook(book, req) {
        try {
            const newBook = await db.book.create({
                data: {
                    ...book,
                    slug: book.slug || getSlug(),
                    created_at: new Date(),
                    created_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    slug: true,
                    title: true,
                    subtitle: true,
                    publisher: true,
                    year: true,
                    edition: true,
                    isbn: true,
                    pages: true,
                    summary: true,
                    pdf_url: true,
                    cover_url: true,
                    images_url: true,
                    label: true,
                    shelf: true,
                    description: true
                }
            });

            return newBook;
        } catch (err) {
            return parseError(err);
        }
    },

    async listBooks(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            const books = await db.book.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                orderBy: {
                    ...paginationObj.orderBy
                },
                where: {
                    ...(filter || {})
                },
                select: {
                    id: true,
                    slug: true,
                    title: true,
                    subtitle: true,
                    publisher: true,
                    year: true,
                    edition: true,
                    isbn: true,
                    pages: true,
                    summary: true,
                    pdf_url: true,
                    cover_url: true,
                    images_url: true,
                    label: true,
                    shelf: true,
                    description: true,

                    tags: {
                        select: {
                            tag: {
                                select: {
                                    id: true,
                                    slug: true,
                                    name: true,
                                    description: true
                                }
                            }
                        },
                        where: {
                            status: "A"
                        }
                    },
                    authors: {
                        select: {
                            description: true,
                            author: {
                                select: {
                                    id: true,
                                    slug: true,
                                    name: true,
                                    description: true,
                                    avatar_url: true,
                                    is_spirit: true
                                }
                            }
                        },
                        where: {
                            status: "A"
                        }
                    }
                }
            });

            return { elements: books };
        } catch (err) {
            return parseError(err);
        }
    },

    async getBook(id, slug) {
        try {
            let filter = {};
            if (id) {
                filter.id = id;
            } else if (slug) {
                filter.slug = slug;
            } else {
                throw {
                    code: "P2025",
                    message: "Livro inválido"
                };
            }
            const book = await db.book.findFirst({
                where: {
                    ...filter,
                    status: "A"
                },
                select: {
                    id: true,
                    slug: true,
                    title: true,
                    subtitle: true,
                    publisher: true,
                    year: true,
                    edition: true,
                    isbn: true,
                    pages: true,
                    summary: true,
                    pdf_url: true,
                    cover_url: true,
                    images_url: true,
                    label: true,
                    shelf: true,
                    description: true
                }
            });
            if (!book)
                throw {
                    code: "P2025",
                    message: "Livro inválido"
                };
            return book;
        } catch (err) {
            return parseError(err);
        }
    },

    async listPublicBooks(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);
            const where = getBookFiltersWhereClause(filter);

            // Lógica de Ordenação Customizada
            let orderBy = paginationObj.orderBy || { title: "asc" };

            // Se o usuário enviar { orderBy: { access_count: 'desc' } }
            if (orderBy.access_count) {
                const direction = orderBy.access_count; // 'asc' ou 'desc'
                orderBy = {
                    book_accesses: {
                        _count: direction
                    }
                };
            }

            const books = await db.book.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                orderBy: orderBy,
                where,
                select: {
                    id: true,
                    slug: true,
                    title: true,
                    subtitle: true,
                    publisher: true,
                    year: true,
                    edition: true,
                    isbn: true,
                    pages: true,
                    summary: true,
                    pdf_url: true,
                    cover_url: true,
                    back_url: true,
                    images_url: true,
                    label: true,
                    shelf: true,
                    description: true,
                    keywords: true,
                    all_time_access_count: true,
                    last_month_access_count: true,
                    last_week_access_count: true,
                    category: {
                        select: {
                            id: true,
                            slug: true,
                            name: true,
                            description: true
                        }
                    },

                    loans: {
                        select: {
                            due_date: true,
                            loan_date: true
                        },
                        where: { status: "A", return_date: null },
                        orderBy: { due_date: "desc" },
                        take: 1
                    },

                    tags: {
                        select: {
                            tag: {
                                select: { id: true, slug: true, name: true, description: true }
                            }
                        },
                        where: { status: "A" }
                    },
                    authors: {
                        select: {
                            description: true,
                            author: {
                                select: {
                                    id: true,
                                    slug: true,
                                    name: true,
                                    description: true,
                                    avatar_url: true,
                                    is_spirit: true
                                }
                            }
                        },
                        where: { status: "A" }
                    }
                }
            });

            // Formatação dos elementos para o Front-end
            const formattedBooks = books.map((book) => {
                const b = { ...book, access_count: book._count?.book_accesses || 0 };
                delete b._count;
                return b;
            });

            const total = await db.book.count({ where });
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: formattedBooks,
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

    async searchBooks(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);
            const limit = paginationObj.limit;
            const offset = paginationObj.limit * (paginationObj.page - 1);

            const rawSearch = filter?.search || "";
            const cleanSearch = rawSearch
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "") // remove acentos
                .replace(/[^a-zA-Z0-9 ]/g, "") // remove caracteres especiais
                .toLowerCase();

            // Construção dos filtros (WHERE dinâmico)
            const whereClauses = ["status = 'A'"];
            if (filter.category_id?.length > 0) whereClauses.push(`category_id IN (${db.join(filter.category_id)})`);
            if (filter.publishers?.length > 0) whereClauses.push(`publisher IN (${db.join(filter.publishers)})`);

            // Se houver busca, adicionamos o filtro de texto ao WHERE para otimizar o scan
            if (cleanSearch) {
                whereClauses.push(`(
                unaccent(lower(title)) ~* ${cleanSearch} OR 
                unaccent(lower(label)) ~* ${cleanSearch} OR 
                unaccent(lower(isbn)) ~* ${cleanSearch} OR 
                unaccent(lower(publisher)) ~* ${cleanSearch}
            )`);
            }

        

            // const whereSql = db.raw(whereClauses.join(" AND "));

            // Query única, performática, com scoring e paginação
            //     const books = await db.$queryRaw`
            //     SELECT *,
            //     (
            //         (CASE WHEN unaccent(lower(title)) ~* ${cleanSearch} OR unaccent(lower(label)) ~* ${cleanSearch} THEN 10 ELSE 0 END) +
            //         (CASE WHEN unaccent(lower(isbn)) ~* ${cleanSearch} THEN 7 ELSE 0 END) +
            //         (CASE WHEN unaccent(lower(publisher)) ~* ${cleanSearch} THEN 2 ELSE 0 END) +
            //         (CASE WHEN unaccent(lower(summary)) ~* ${cleanSearch} THEN 1 ELSE 0 END)
            //     ) as relevance_score
            //     FROM "Book"
            //     WHERE ${whereSql}
            //     ORDER BY relevance_score DESC, title ASC
            //     LIMIT ${limit} OFFSET ${offset}
            // `;

            const books = await db.$queryRaw`
            SELECT 
            (
                (CASE WHEN unaccent(lower(b.title)) ~* ${cleanSearch} OR unaccent(lower(b.label)) ~* ${cleanSearch} THEN 10 ELSE 0 END) +
                (CASE WHEN unaccent(lower(b.isbn)) ~* ${cleanSearch} OR unaccent(lower(b.publisher)) ~* ${cleanSearch} THEN 7 ELSE 0 END) +
                (CASE WHEN unaccent(lower(c.name)) ~* ${cleanSearch} OR (select true from book_tag _bt LEFT JOIN tag _t ON _t.id = _bt.tag_id WHERE _bt.book_id = b.id and _t.name ~* ${cleanSearch} limit 1) THEN 2 ELSE 0 END) +
                (CASE WHEN unaccent(lower(summary)) ~* ${cleanSearch} THEN 1 ELSE 0 END)
            ) as search_score,

            b.id, b.slug, b.title, b.subtitle, b.publisher, b.year, b.edition, b.isbn, b.pages, b.summary, 
            b.pdf_url, b.cover_url, b.back_url, b.images_url,
            b.label, b.shelf, b.description, b.keywords,
            b.all_time_access_count, b.last_month_access_count, b.last_week_access_count,

            json_build_object(
                    'id', c.id, 'slug', c.slug, 'name', c.name, 'description', c.description
            ) as category,

            COALESCE((
                SELECT json_agg(json_build_object('tag', json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description)))
                FROM tag _t 
                JOIN book_tag _bt ON _t.id = _bt.tag_id 
                WHERE _bt.book_id = b.id AND _bt.status = 'A'
            ), '[]'::json) as tags,

            COALESCE((
                    SELECT json_agg(json_build_object(
                        'description', _ba.description, 
                        'author', json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'description', _a.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit)
                    ))
                    FROM author _a 
                    JOIN book_author _ba ON _a.id = _ba.author_id 
                    WHERE _ba.book_id = b.id AND _ba.status = 'A'
                ), '[]'::json) as authors,

                '[]'::json as loans

            FROM book b
            LEFT JOIN category c ON c.id = b.category_id
            ORDER BY search_score DESC, title ASC
            LIMIT ${limit} OFFSET ${offset}
        `;

            // Contagem total para a paginação
            const countResult = await db.$queryRaw`SELECT COUNT(*) as total FROM book`;
            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / limit);

            return {
                elements: books, // Já vem ordenado pelo score
                pagination: {
                    page: paginationObj.page,
                    limit: limit,
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

    async listRelatedBooks(bookId, pagination) {
        try {
            const paginationObj = parsePagination({ ...pagination });
            const limit = paginationObj.limit;

            const referenceBook = await db.book.findUnique({
                where: { id: bookId },
                select: {
                    title: true,
                    keywords: true,
                    tags: { where: { status: "A" }, select: { tag_id: true } },
                    authors: { where: { status: "A" }, select: { author_id: true } }
                }
            });

            if (!referenceBook) throw new Error("Livro de referência não encontrado");

            const tagIds = referenceBook.tags.map((t) => t.tag_id);
            const authorIds = referenceBook.authors.map((a) => a.author_id);
            const keywords = referenceBook.keywords || [];

            const affinityCriteria = [];
            if (tagIds.length > 0) affinityCriteria.push({ tags: { some: { tag_id: { in: tagIds }, status: "A" } } });
            if (authorIds.length > 0)
                affinityCriteria.push({ authors: { some: { author_id: { in: authorIds }, status: "A" } } });
            if (keywords.length > 0) affinityCriteria.push({ keywords: { hasSome: keywords } });

            const whereAffinity = {
                status: "A",
                AND: [
                    { id: { not: bookId } },
                    { title: { not: referenceBook.title } },
                    { OR: affinityCriteria.length > 0 ? affinityCriteria : [{ id: -1 }] }
                ]
            };

            const selectFields = {
                id: true,
                slug: true,
                title: true,
                subtitle: true,
                publisher: true,
                year: true,
                edition: true,
                isbn: true,
                pages: true,
                summary: true,
                pdf_url: true,
                cover_url: true,
                images_url: true,
                label: true,
                shelf: true,
                description: true,
                keywords: true,
                all_time_access_count: true,
                last_month_access_count: true,
                last_week_access_count: true,
                category: {
                    select: {
                        id: true,
                        slug: true,
                        name: true,
                        description: true
                    }
                },

                loans: {
                    select: {
                        due_date: true,
                        loan_date: true
                    },
                    where: {
                        status: "A",
                        return_date: null
                    },
                    orderBy: {
                        due_date: "desc"
                    },
                    take: 1
                },

                tags: {
                    select: {
                        tag: {
                            select: {
                                id: true,
                                slug: true,
                                name: true,
                                description: true
                            }
                        }
                    },
                    where: {
                        status: "A"
                    }
                },
                authors: {
                    select: {
                        description: true,
                        author: {
                            select: {
                                id: true,
                                slug: true,
                                name: true,
                                description: true,
                                avatar_url: true,
                                is_spirit: true
                            }
                        }
                    },
                    where: {
                        status: "A"
                    }
                }
            };

            let relatedBooks = await db.book.findMany({
                take: limit,
                where: whereAffinity,
                orderBy: { id: "desc" },
                select: selectFields
            });

            if (relatedBooks.length < limit) {
                const needed = limit - relatedBooks.length;
                const alreadyPickedIds = [bookId, ...relatedBooks.map((b) => b.id)];

                const count = await db.book.count({
                    where: {
                        status: "A",
                        id: { notIn: alreadyPickedIds },
                        title: { not: referenceBook.title }
                    }
                });

                const skip = Math.max(0, Math.floor(Math.random() * (count - needed)));

                const randomBooks = await db.book.findMany({
                    take: needed,
                    skip: skip,
                    where: {
                        status: "A",
                        id: { notIn: alreadyPickedIds },
                        title: { not: referenceBook.title }
                    },
                    // ToDo: daria pra fazer um seletor aleatório de condições de ordenaçao tbm
                    orderBy: { year: "desc" },
                    select: selectFields
                });

                relatedBooks = [...relatedBooks, ...randomBooks];
            }

            const total = await db.book.count({ where: whereAffinity });

            return {
                elements: relatedBooks,
                pagination: {
                    page: paginationObj.page,
                    limit: limit,
                    total_elements: Math.max(total, relatedBooks.length),
                    total_pages: Math.ceil(Math.max(total, relatedBooks.length) / limit),
                    has_next: false,
                    has_previous: false
                }
            };
        } catch (err) {
            return parseError(err);
        }
    },

    async getPublicBook(id, slug, userId, userAgent, ipAddress) {
        try {
            let filter = {};
            if (id) {
                filter.id = id;
            } else if (slug) {
                filter.slug = slug;
            } else {
                throw {
                    code: "P2025",
                    message: "Livro inválido"
                };
            }
            const book = await db.book.findFirst({
                where: {
                    ...filter,
                    status: "A"
                },
                select: {
                    id: true,
                    slug: true,
                    title: true,
                    subtitle: true,
                    publisher: true,
                    year: true,
                    edition: true,
                    isbn: true,
                    pages: true,
                    summary: true,
                    pdf_url: true,
                    cover_url: true,
                    back_url: true,
                    images_url: true,
                    label: true,
                    shelf: true,
                    description: true,
                    keywords: true,
                    all_time_access_count: true,
                    last_month_access_count: true,
                    last_week_access_count: true,
                    category: {
                        select: {
                            id: true,
                            slug: true,
                            name: true,
                            description: true
                        }
                    },

                    loans: {
                        select: {
                            due_date: true,
                            loan_date: true
                        },
                        where: {
                            status: "A",
                            return_date: null
                        },
                        orderBy: {
                            due_date: "desc"
                        },
                        take: 1
                    },

                    tags: {
                        select: {
                            tag: {
                                select: {
                                    id: true,
                                    slug: true,
                                    name: true,
                                    description: true
                                }
                            }
                        },
                        where: {
                            status: "A"
                        }
                    },

                    authors: {
                        select: {
                            description: true,
                            author: {
                                select: {
                                    id: true,
                                    slug: true,
                                    name: true,
                                    description: true,
                                    avatar_url: true,
                                    is_spirit: true
                                }
                            }
                        },
                        where: {
                            status: "A"
                        }
                    }
                }
            });
            if (!book)
                throw {
                    code: "P2025",
                    message: "Livro inválido"
                };

            db.bookAccess
                .create({
                    data: {
                        book_id: book.id,
                        created_by_user_id: userId ? BigInt(userId) : null,
                        ip_address: ipAddress,
                        user_agent: userAgent.ua,
                        browser_name: userAgent?.browser?.name || "",
                        browser_version: userAgent?.browser?.version || "",
                        os_name: userAgent?.os?.name || "",
                        os_version: userAgent?.os?.version || "",
                        device_name: userAgent?.device?.model || "",
                        device_vendor: userAgent?.device?.vendor || ""
                    }
                })
                .catch((err) => console.error("Falha ao registrar log de acesso:", err));

            return book;
        } catch (err) {
            return parseError(err);
        }
    },

    async listPublicPublishers(filter) {
        try {
            const booksWhere = getBookFiltersWhereClause(filter);

            const allPublishers = await db.book.groupBy({
                by: ["publisher"],
                where: {
                    status: "A",
                    publisher: { not: null }
                },
                orderBy: {
                    publisher: "asc"
                }
            });

            const filteredCounts = await db.book.groupBy({
                by: ["publisher"],
                where: {
                    ...booksWhere,
                    publisher: { not: null }
                },
                _count: {
                    publisher: true
                }
            });

            const countsMap = new Map(filteredCounts.map((item) => [item.publisher, item._count.publisher]));

            const elements = allPublishers.map((item) => ({
                name: item.publisher,
                _count: {
                    books: countsMap.get(item.publisher) || 0
                }
            }));

            return {
                elements: elements,
                pagination: {
                    page: 1,
                    limit: elements.length,
                    total_elements: elements.length,
                    total_pages: 1,
                    has_next: false,
                    has_previous: false
                }
            };
        } catch (err) {
            return parseError(err);
        }
    },

    /// Throwws error
    async updateMonthlyAccessCounter() {
        const trintaDiasAtras = new Date();
        trintaDiasAtras.setDate(trintaDiasAtras.getDate() - 30);
        const trintaDiasAtrasISO = trintaDiasAtras.toISOString();

        const seteDiasAtras = new Date();
        seteDiasAtras.setDate(seteDiasAtras.getDate() - 30);
        const seteDiasAtrasISO = seteDiasAtras.toISOString();

        await db.$executeRawUnsafe(`
                        UPDATE book
                        SET last_month_access_count_updated_at = NOW(), 
                        last_month_access_count = (
                            SELECT COUNT(*)
                            FROM book_access
                            WHERE book_access.book_id = book.id
                              AND book_access.created_at >= '${trintaDiasAtrasISO}'
                        ),
                        last_week_access_count_updated_at = NOW(), 
                        last_week_access_count = (
                            SELECT COUNT(*)
                            FROM book_access
                            WHERE book_access.book_id = book.id
                              AND book_access.created_at >= '${seteDiasAtrasISO}'
                        ),
                        all_time_access_count_updated_at = NOW(), 
                        all_time_access_count = (
                            SELECT COUNT(*)
                            FROM book_access
                            WHERE book_access.book_id = book.id
                        )
                        WHERE status = 'A';
                    `);

        console.log(" [CRON] Estatísticas atualizadas com sucesso...");
    }
};
