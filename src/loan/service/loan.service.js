const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { treatVolumeFilters, getAuthorSearchScore } = require("../../utils/filters.service");
const { db, Prisma, parseError } = require("../../utils/db.service");

module.exports = {
    async listLoans(filter, pagination) {
        try {
            const paginationObj = parsePagination(pagination, {
                sortFields: {
                    // search_score: "search_score",
                    // name: "__a.search_name",
                    // volumes_count: "volumes_count",
                    // books_count: "books_count"
                }
            });

            // const orderQuery = paginationObj.orderBy
            //     ? Prisma.sql`${paginationObj.orderQuery}, vl.due_date desc nulls last `
            //     : Prisma.sql`vl.due_date desc nulls first `;

            const orderQuery = Prisma.sql`vl.return_date desc nulls first, vl.due_date asc `;

            const loans = await db.$queryRaw`
                SELECT 
                    vl.id,
                    vl.created_at, 
                    vl.status,
                    vl.loan_date,
                    vl.due_date,
                    vl.return_date,
                    vl.description,

                COALESCE(json_build_object(
                    'id', u.id, 
                    'slug', u.slug, 
                    'name', u.name,
                    'display_name', u.display_name,
                    'phone', u.phone
                
                ), null) as user,

                COALESCE(json_build_object(
                    'id', v.id, 
                    'slug', v.slug, 
                    'year', v.year, 
                    'edition', v.edition, 
                    'isbn', v.isbn, 
                    'isbn_old', v.isbn_old, 
                    'pages', v.pages,
                    'cover_url', v.cover_url, 
                    'back_url', v.back_url, 
                    'images_url', v.images_url,
                    'label', v.label, 
                    'shelf', v.shelf, 
                    'description', v.description, 
                    'keywords', v.keywords,
                    'all_time_access_count', v.all_time_access_count,
                    'last_month_access_count', v.last_month_access_count,
                    'book', COALESCE(json_build_object(
                    'id', b.id, 'slug', b.slug, 'title', b.title, 
                    'subtitle', b.subtitle, 'summary', b.summary, 
                    'description', b.description, 'recommended_for', b.recommended_for, 
                    'keywords', b.keywords, 'last_month_access_count', b.last_month_access_count, 
                    'all_time_access_count', b.all_time_access_count
                ), null),
                'publisher',  COALESCE(json_build_object(
                    'id', p.id, 'slug', p.slug, 'name', p.name, 
                    'abbreviation', p.abbreviation, 'avatar_url', p.avatar_url
                ), null),
                'category', COALESCE(json_build_object(
                    'id', c.id, 'slug', c.slug, 'name', c.name
                ), null),
                'tags', COALESCE((
                    SELECT json_agg(json_build_object('id', _t.id, 'slug', _t.slug, 'name', _t.name, 'description', _t.description))
                    FROM tag _t 
                    JOIN book_tag _bt ON _t.id = _bt.tag_id 
                    WHERE _bt.book_id = b.id AND _bt.status = 'A'
                ), '[]'::json),
                'authors', COALESCE((
                    SELECT json_agg(json_build_object('id', _a.id, 'slug', _a.slug, 'name', _a.name, 'role', _va.description, 'avatar_url', _a.avatar_url, 'is_spirit', _a.is_spirit))
                    FROM author _a 
                    JOIN volume_author _va ON _a.id = _va.author_id 
                    WHERE _va.volume_id = v.id AND _va.status = 'A'
                ), '[]'::json)
                
                ), null) as volume
                FROM volume_loan vl
                left join volume v on v.id = vl.volume_id
                left join book b on b.id = v.book_id
                LEFT JOIN publisher p ON p.id = v.publisher_id
                LEFT JOIN category c ON c.id = b.category_id
                left join "user" u on u.id = vl.user_id
                WHERE vl.status='A'
                ORDER BY  ${orderQuery}
                LIMIT ${paginationObj.limitQuery} OFFSET ${paginationObj.offsetQuery}`;

            const countResult = await db.$queryRaw`
                SELECT COUNT(*) as total 
                FROM volume_loan vl
                WHERE vl.status='A'
                `;

            const total = Number(countResult[0].total);
            const totalPages = Math.ceil(total / paginationObj.limit);

            return {
                elements: loans,
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

    async returnLoan(id) {
        try {
            const loans =
                await db.$queryRaw`Update volume_loan set return_date = now() where return_date is null and id = ${parseInt(id)}`;

           

            return loans;
        } catch (err) {
          
            return parseError(err);
        }
    }
};
