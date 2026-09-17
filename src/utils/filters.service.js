const { Prisma } = require("./db.service");

module.exports = {
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
        const bookId = filter?.book_id ? parseInt(filter.book_id) : null;

        let whereQuery = Prisma.sql`
                ${categoryFilterList ? Prisma.sql` AND c.id in (${Prisma.join(categoryFilterList)})` : Prisma.sql``}
                ${publisherFilterList ? Prisma.sql` AND p.id in (${Prisma.join(publisherFilterList)})` : Prisma.sql``}
                ${tagFilterList ? Prisma.sql` AND 0 < (SELECT COUNT(*) FROM book_tag _bt WHERE _bt.book_id = b.id and _bt.tag_id in (${Prisma.join(tagFilterList)}))` : Prisma.sql``}
                ${authorFilterList ? Prisma.sql` AND 0 < (SELECT COUNT(*) FROM volume_author _va WHERE _va.volume_id = v.id and _va.author_id in (${Prisma.join(authorFilterList)}))` : Prisma.sql``}
                ${bookId && !isNaN(bookId) ? Prisma.sql` AND b.id = ${bookId}` : Prisma.sql``}
            `;

        const rawSearch = filter?.search || "";

        const cleanSearch = rawSearch
            .normalize("NFD")
            .replace(/[̀-ͯ]/g, "") // remove acentos
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

    // Recebe o `cleanSearch` já calculado por treatVolumeFilters (evita reprocessar o
    // normalize/regex/whereQuery duas vezes por request) e monta o score de relevância da busca.
    getVolumeSearchScore(filter, precomputed) {
        const cleanSearch = precomputed?.cleanSearch ?? module.exports.treatVolumeFilters(filter).cleanSearch;

        let searchScoreQuery = Prisma.sql`0`;

        if (cleanSearch) {
            searchScoreQuery = Prisma.sql`
            (
                (CASE WHEN b.search_title ~* ${cleanSearch} OR v.label ~* ${cleanSearch}
                    THEN 50 ELSE 0 END) +
                (CASE WHEN c.search_name ~* ${cleanSearch} OR
                    (select true from volume_author _va
                        LEFT JOIN author _a ON _a.id = _va.author_id
                        WHERE _va.volume_id = v.id and _a.search_name ~* ${cleanSearch} limit 1)
                    THEN 20 ELSE 0 END) +
                (CASE WHEN v.isbn ~* ${cleanSearch} OR v.isbn_old ~* ${cleanSearch}
                OR p.search_name ~* ${cleanSearch} OR unaccent(lower(p.abbreviation)) ~* ${cleanSearch}
                    THEN 10 ELSE 0 END) +
                (CASE WHEN c.search_name ~* ${cleanSearch} OR
                    (select true from book_tag _bt
                        LEFT JOIN tag _t ON _t.id = _bt.tag_id
                        WHERE _bt.book_id = b.id and _t.search_name ~* ${cleanSearch} limit 1)
                    THEN 3 ELSE 0 END) +
                (CASE WHEN unaccent(lower(b.description)) ~* ${cleanSearch} THEN 1 ELSE 0 END)
            )
            `;
        }

        return {
            query: searchScoreQuery
        };
    },

    getAuthorSearchScore(filter, precomputed) {
        const cleanSearch = precomputed?.cleanSearch ?? module.exports.treatVolumeFilters(filter).cleanSearch;

        let searchScoreQuery = Prisma.sql`0`;

        if (cleanSearch) {
            searchScoreQuery = Prisma.sql`
            (
                (CASE WHEN __a.name ~* ${cleanSearch} THEN 50 ELSE 0 END) +
                (CASE WHEN unaccent(lower(__a.description)) ~* ${cleanSearch} THEN 30 ELSE 0 END) +
                (CASE WHEN (select true from volume_author _va
                        LEFT JOIN volume _v ON _v.id = _va.volume_id
                        LEFT JOIN book _b ON _b.id = _v.book_id
                        WHERE _va.author_id = __a.id and _b.search_title ~* ${cleanSearch}
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
