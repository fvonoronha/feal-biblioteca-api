const DEFAULT_PAGINATION_LIMIT = 10;
const DEFAULT_PAGINATION_PAGE = 1;

const { Prisma } = require("./db.service");

module.exports = {
    parsePagination(pagination = {}, options = {}) {
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

        if (options?.sortFields && pagination?.sort) {
            // 1. Normaliza: se for um objeto simples, coloca dentro de um array
            const sortArray = Array.isArray(pagination.sort) ? pagination.sort : [pagination.sort];

            // 2. Filtra para garantir que só vamos processar objetos de ordenação válidos
            const validSorts = sortArray.filter((s) => s?.by && s?.order && options.sortFields.hasOwnProperty(s.by));

            if (validSorts.length > 0) {
                obj.orderBy = true;

                // 3. Mapeia cada objeto válido para a sua string SQL correspondente
                const orderChunks = validSorts.map((s) => {
                    const orderBy = options.sortFields[s.by];
                    const orderDirection = ["asc", "desc"].includes(String(s.order).toLowerCase())
                        ? String(s.order).toLowerCase()
                        : "asc";

                    return `${orderBy} ${orderDirection} nulls last`;
                });

                // 4. O .join(", ") resolve a vírgula perfeitamente em 1 ou múltiplos itens
                obj.orderQuery = Prisma.sql`${Prisma.raw(orderChunks.join(", "))}`;
            } else {
                obj.orderBy = false;
                obj.orderQuery = Prisma.empty;
            }
        } else {
            obj.orderBy = false;
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
