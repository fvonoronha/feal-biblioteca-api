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
