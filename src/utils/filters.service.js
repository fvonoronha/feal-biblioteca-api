module.exports = {
    getBookFiltersWhereClauseOLD(filter) {
        const search = filter?.search || null;
        const authors = filter?.authors || [];
        const tags = filter?.tags || [];
        const publishers = filter?.publishers || [];

        const where = {
            status: "A",

            ...(search && {
                OR: [
                    { title: { contains: search, mode: "insensitive" } },
                    { subtitle: { contains: search, mode: "insensitive" } },
                    { description: { contains: search, mode: "insensitive" } },
                    { publisher: { contains: search, mode: "insensitive" } },
                    { summary: { contains: search, mode: "insensitive" } },

                    {
                        authors: {
                            some: {
                                status: "A",
                                author: {
                                    name: {
                                        contains: search,
                                        mode: "insensitive"
                                    }
                                }
                            }
                        }
                    },

                    {
                        tags: {
                            some: {
                                status: "A",
                                tag: {
                                    name: {
                                        contains: search,
                                        mode: "insensitive"
                                    }
                                }
                            }
                        }
                    }
                ]
            }),

            ...(authors.length > 0 && {
                authors: {
                    some: {
                        status: "A",
                        author_id: {
                            in: authors
                        }
                    }
                }
            }),

            ...(tags.length > 0 && {
                tags: {
                    some: {
                        status: "A",
                        tag_id: {
                            in: tags
                        }
                    }
                }
            }),

            ...(publishers.length > 0 && {
                publisher: {
                    in: publishers
                    // mode: "insensitive"
                }
            })
        };

        return where;
    },

    getBookFiltersWhereClause(filter) {
        const search = filter?.search || null;
        const authors = filter?.authors || [];
        const tags = filter?.tags || [];
        const publishers = filter?.publishers || [];

        const where = {
            status: "A",

            ...(search && {
                OR: [
                    { title: { contains: search, mode: "insensitive" } },
                    { subtitle: { contains: search, mode: "insensitive" } },
                    { description: { contains: search, mode: "insensitive" } },
                    { publisher: { contains: search, mode: "insensitive" } },
                    { summary: { contains: search, mode: "insensitive" } },
                    {
                        authors: {
                            some: {
                                status: "A",
                                author: {
                                    name: { contains: search, mode: "insensitive" }
                                }
                            }
                        }
                    },
                    {
                        tags: {
                            some: {
                                status: "A",
                                tag: { name: { contains: search, mode: "insensitive" } }
                            }
                        }
                    }
                ]
            }),

            ...(authors.length > 0 && {
                authors: {
                    some: {
                        status: "A",
                        author_id: { in: authors }
                    }
                }
            }),

            ...(tags.length > 0 && {
                tags: {
                    some: {
                        status: "A",
                        tag_id: { in: tags }
                    }
                }
            }),

            ...(publishers.length > 0 && {
                publisher: { in: publishers }
            })
        };

        return where;
    }
};
