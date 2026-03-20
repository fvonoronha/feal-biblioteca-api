const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");
const { getBookFiltersWhereClause } = require("../../utils/filters.service");

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

            const books = await db.book.findMany({
                skip: paginationObj.limit * (paginationObj.page - 1),
                take: paginationObj.limit,
                orderBy: paginationObj.orderBy || { title: "asc" },
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
                    images_url: true,
                    label: true,
                    shelf: true,
                    description: true,
                    keywords: true,

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

            const total = await db.book.count({
                where
            });

            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: books,
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

    async getPublicBook(id, slug) {
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
                    description: true,
                    keywords: true,

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
    }
};
