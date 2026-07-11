const DEFAULT_PAGINATION_LIMIT = 10;
const DEFAULT_PAGINATION_PAGE = 1;

const { Prisma } = require("./db.service");

module.exports = {
    parsePagination(pagination = {}) {
        const obj = {};
        obj.limit = Object.prototype.hasOwnProperty.call(pagination, "limit")
            ? pagination.limit >= 0
                ? parseInt(pagination.limit)
                : DEFAULT_PAGINATION_LIMIT
            : DEFAULT_PAGINATION_LIMIT;

        obj.limitQuery = Prisma.sql`${Prisma.raw(obj.limit)}`;

        obj.page = Object.prototype.hasOwnProperty.call(pagination, "page")
            ? pagination.page > 0
                ? parseInt(pagination.page)
                : DEFAULT_PAGINATION_PAGE
            : DEFAULT_PAGINATION_PAGE;

        obj.offset = obj.limit * (obj.page - 1);

        obj.offsetQuery = Prisma.sql`${Prisma.raw(obj.offset)}`;

        // ToDo: Validar orderBy e orderDirection
        if (Object.prototype.hasOwnProperty.call(pagination, "sort") && pagination.sort?.by && pagination.sort?.order) {
            obj.order = true;
            obj.orderBy = pagination.sort?.by;
            obj.orderDirection = ["asc", "desc"].includes(pagination.sort?.order.toLowerCase())
                ? pagination.sort?.order.toLowerCase()
                : "asc";
            // ToDo: Essa vírgula no final é uma péssima prática
            obj.orderQuery = Prisma.sql`${Prisma.raw(obj.orderBy)} ${Prisma.raw(obj.orderDirection)},`;
        } else {
            obj.order = false;
            obj.orderQuery = Prisma.empty;
        }
        return obj;
    },

    parseListToPagination(pagination, obj) {
        const pgnation = module.exports.parsePagination(pagination);

        const response = {};

        response.elements = obj.elements;
        response.totalElements =
            pgnation.limit === 0
                ? obj.elements.length
                : Object.prototype.hasOwnProperty.call(obj.elements[0] || {}, "_count")
                  ? obj.elements[0]._count
                  : obj.elements.length;
        response.limit = pgnation.limit === 0 ? obj.elements.length : pgnation.limit;
        response.totalPages = pgnation.limit === 0 ? 1 : Math.ceil(response.totalElements / pgnation.limit);
        response.page = pgnation.limit === 0 ? 1 : pgnation.page;
        response.pagingCounter = pgnation.limit === 0 ? 1 : (response.page - 1) * response.limit + 1;
        response.hasPrevPage = pgnation.page > 1 && response.totalPages > pgnation.page;
        response.hasNextPage = pgnation.page < response.totalPages;
        response.prevPage = response.hasPrevPage ? response.page - 1 : null;
        response.nextPage = response.hasNextPage ? response.page + 1 : null;

        return response;
    },

    parseListToScrollPagination(pagination, obj) {
        const pgnation = module.exports.parsePagination(pagination);

        const response = {};

        response.elements = obj.elements;
        response.limit = pgnation.limit === 0 ? obj.elements.length : pgnation.limit;
        response.hasNextPage =
            pgnation.limit === 0
                ? false
                : Object.prototype.hasOwnProperty.call(obj.elements[0] || {}, "_token")
                  ? obj.elements[0]._token
                      ? true
                      : false
                  : false;
        response.nextPage =
            pgnation.limit === 0
                ? obj.elements.length
                : Object.hasOwn(obj.elements[0] || {}, "_token")
                  ? obj.elements[0]._token
                  : 0;

        return response;
    }
};
