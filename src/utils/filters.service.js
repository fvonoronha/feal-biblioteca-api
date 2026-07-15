const { Prisma } = require("./db.service");

module.exports = {
    getBookFiltersWhereClause(filter) {
        const search = filter?.search || null;
        const authors = filter?.authors || [];
        const tags = filter?.tags || [];
        const publishers = filter?.publishers || [];
        const categories = filter?.category_id || [];

        const where = {
            status: "A",

            ...(search && {
                OR: [
                    { label: { contains: search, mode: "insensitive" } },
                    { title: { contains: search, mode: "insensitive" } },
                    { subtitle: { contains: search, mode: "insensitive" } },
                    { description: { contains: search, mode: "insensitive" } },
                    { publisher: { contains: search, mode: "insensitive" } },
                    { summary: { contains: search, mode: "insensitive" } },
                    { keywords: { has: search } },
                    { category: { name: { contains: search, mode: "insensitive" } } },
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

            ...(categories.length > 0 && {
                category_id: { in: categories }
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
    },

    parseArrayFilter(name, filter) {
        if (filter?.hasOwnProperty(name) && filter[name]) {
            let parsedFilter = (Array.isArray(filter[name]) ? filter[name] : [filter[name]])
                .map((a) => parseInt(a))
                .filter((a) => !isNaN(a));
            return parsedFilter.length > 0 ? parsedFilter : null;
        }
        return null;
    },

    treatVolumeFilters(filter) {
        const categoryFilterList = module.exports.parseArrayFilter("category", filter);
        const tagFilterList = module.exports.parseArrayFilter("tag", filter);
        const authorFilterList = module.exports.parseArrayFilter("author", filter);
        const publisherFilterList = module.exports.parseArrayFilter("publisher", filter);

        let whereQuery = Prisma.sql`
                ${categoryFilterList ? Prisma.sql` AND c.id in (${Prisma.join(categoryFilterList)})` : Prisma.sql``}
                ${publisherFilterList ? Prisma.sql` AND p.id in (${Prisma.join(publisherFilterList)})` : Prisma.sql``}
                ${tagFilterList ? Prisma.sql` AND 0 < (SELECT COUNT(*) FROM book_tag _bt WHERE _bt.book_id = b.id and _bt.tag_id in (${Prisma.join(tagFilterList)}))` : Prisma.sql``}
                ${authorFilterList ? Prisma.sql` AND 0 < (SELECT COUNT(*) FROM volume_author _va WHERE _va.volume_id = v.id and _va.author_id in (${Prisma.join(authorFilterList)}))` : Prisma.sql``}
            `;

        const rawSearch = filter?.search || "";

        const cleanSearch = rawSearch
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // remove acentos
            .replace(/[^a-zA-Z0-9 ]/g, "") // remove caracteres especiais
            .toLowerCase();

        if (cleanSearch) {
            whereQuery = Prisma.sql`${whereQuery} AND (
                b.search_title ~* ${cleanSearch} 
                OR v.label ~* ${cleanSearch} 
                OR c.search_name ~* ${cleanSearch} 
                OR 0 < (select count(*) from volume_author _va 
                        LEFT JOIN author _a ON _a.id = _va.author_id 
                        WHERE _va.volume_id = v.id and _a.search_name ~* ${cleanSearch}) 
                OR v.isbn ~* ${cleanSearch} 
                OR v.isbn_old ~* ${cleanSearch} 
                OR p.search_name ~* ${cleanSearch} 
                OR unaccent(lower(p.abbreviation)) ~* ${cleanSearch} 
                OR 0 < (select count(*) from book_tag _bt 
                        LEFT JOIN tag _t ON _t.id = _bt.tag_id 
                        WHERE _bt.book_id = b.id and _t.search_name ~* ${cleanSearch}) 
                OR unaccent(lower(b.description)) ~* ${cleanSearch}
            )`;
        }

        return {
            search: rawSearch,
            cleanSearch: cleanSearch,
            query: whereQuery
        };
    },

    getVolumeSearchScore(filter) {
        let filters = module.exports.treatVolumeFilters(filter);
        const cleanSearch = filters.cleanSearch;

        let searchScoreQuery = Prisma.sql`0`;

        if (cleanSearch) {
            searchScoreQuery = Prisma.sql`
            (
                (CASE WHEN b.search_title ~* '${Prisma.raw(cleanSearch)}' OR v.label ~* '${Prisma.raw(cleanSearch)}' 
                    THEN 50 ELSE 0 END) +
                (CASE WHEN c.search_name ~* '${Prisma.raw(cleanSearch)}' OR 
                    (select true from volume_author _va 
                        LEFT JOIN author _a ON _a.id = _va.author_id 
                        WHERE _va.volume_id = v.id and _a.search_name ~* '${Prisma.raw(cleanSearch)}' limit 1) 
                    THEN 20 ELSE 0 END) +
                (CASE WHEN v.isbn ~* '${Prisma.raw(cleanSearch)}' OR v.isbn_old ~* '${Prisma.raw(cleanSearch)}' 
                OR p.search_name ~* '${Prisma.raw(cleanSearch)}'  OR unaccent(lower(p.abbreviation)) ~* '${Prisma.raw(cleanSearch)}' 
                    THEN 10 ELSE 0 END) +
                (CASE WHEN c.search_name ~* '${Prisma.raw(cleanSearch)}' OR 
                    (select true from book_tag _bt 
                        LEFT JOIN tag _t ON _t.id = _bt.tag_id 
                        WHERE _bt.book_id = b.id and _t.search_name ~* '${Prisma.raw(cleanSearch)}' limit 1) 
                    THEN 3 ELSE 0 END) +
                (CASE WHEN unaccent(lower(b.description)) ~* '${Prisma.raw(cleanSearch)}' THEN 1 ELSE 0 END)
            )
            `;
        }

        return {
            query: searchScoreQuery
        };
    },

    getAuthorSearchScore(filter) {
        let filters = module.exports.treatVolumeFilters(filter);
        const cleanSearch = filters.cleanSearch;

        let searchScoreQuery = Prisma.sql`0`;

        if (cleanSearch) {
            searchScoreQuery = Prisma.sql`
            (
                (CASE WHEN __a.name ~* '${Prisma.raw(cleanSearch)}' THEN 50 ELSE 0 END) +
                (CASE WHEN unaccent(lower(__a.description)) ~* '${Prisma.raw(cleanSearch)}' THEN 30 ELSE 0 END) +
                (CASE WHEN (select true from volume_author _va 
                        LEFT JOIN volume _v ON _v.id = _va.volume_id 
                        LEFT JOIN book _b ON _b.id = _v.book_id 
                        WHERE _va.author_id = __a.id and _b.search_title ~* '${Prisma.raw(cleanSearch)}' 
                        limit 1) 
                THEN 20 ELSE 0 END)
            )
            `;
        }

        return {
            query: searchScoreQuery
        };
    }
};
