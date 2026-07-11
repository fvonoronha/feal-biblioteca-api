const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, Prisma, parseError } = require("../../utils/db.service");

const { getBookFiltersWhereClause } = require("../../utils/filters.service");

module.exports = {
    async listAuthors(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            // ToDo: Tratar filtros

            const authors = await db.$queryRaw`
                SELECT 
                    a.id,
                    a.slug,
                    a.name,
                    a.search_name,
                    a.description,
                    a.avatar_url,
                    a.is_spirit,
                    (SELECT count(*) FROM volume_author _va WHERE _va.author_id = a.id) as volumes_count,
                    (SELECT count(*) over() FROM volume_author _va LEFT JOIN volume _v ON _v.id = _va.volume_id WHERE _va.author_id = a.id GROUP BY _v.book_id LIMIT 1) as books_count
                FROM author a
                ORDER BY ${paginationObj.orderQuery} a.search_name asc nulls last
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`SELECT COUNT(*) as total FROM author`;
            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: authors,
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

    async listAuthorsToExplore(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination);

            // Todo: Os principais autores estão definidos estaticamente, talvez seja necessário rever isso

            const authors = await db.$queryRaw`
                SELECT 
                    a.id,
                    a.slug,
                    a.name,
                    a.search_name,
                    a.description,
                    a.avatar_url,
                    a.is_spirit,
                    (SELECT count(*) FROM volume_author _va WHERE _va.author_id = a.id) as volumes_count,
                    (SELECT count(*) over() FROM volume_author _va LEFT JOIN volume _v ON _v.id = _va.volume_id WHERE _va.author_id = a.id GROUP BY _v.book_id LIMIT 1) as books_count
                FROM author a
                WHERE a.slug in (
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
                ORDER BY volumes_count desc
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`SELECT COUNT(*) as total FROM author`;
            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: authors,
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
            console.log("?? ", err);
            return parseError(err);
        }
    }
};
