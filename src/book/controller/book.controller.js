const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const bookService = require("../service/book.service");
const { createBookSchema, updateBookSchema } = require("../../utils/schema/Book");
const { getClientIp } = require("../../utils/ip.service");
const UAParser = require("ua-parser-js");

module.exports = {
    async createBook(req, res, next) {
        const book = validateSchema(createBookSchema, req.body);

        if (!book.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: book.err };
            return end(req, res);
        }

        const newBook = await bookService.createBook(book.data, req);

        if (newBook.error) {
            return respondError(req, res, "book", newBook);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.book = newBook;
        return next();
    },

    async updateBook(req, res, next) {
        const validated = validateSchema(updateBookSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: validated.err };
            return end(req, res);
        }

        const book = await bookService.updateBook(req.params.bookId, validated.data, req);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.book = book;
        return next();
    },

    async setBookTags(req, res, next) {
        const tagIds = Array.isArray(req.body.tag_ids) ? req.body.tag_ids : [];
        const book = await bookService.setBookTags(req.params.bookId, tagIds, req);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.book = book;
        return next();
    },

    async deleteBook(req, res, next) {
        const book = await bookService.deleteBook(req.params.bookId, req);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.book = book;
        return next();
    },

    async listBooks(req, res, next) {
        const book = await bookService.listBooks(req.body.filter, req.body.pagination);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async getBook(req, res, next) {
        const book = await bookService.getBook(req.params.bookId, req.params.bookSlug);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async listPublicBooks(req, res, next) {
        const book = await bookService.listPublicBooks(req.body.filter, req.body.pagination);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async searchBooks(req, res, next) {
        const book = await bookService.searchBooks(req.body.filter, req.body.pagination);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async filterBooks(req, res, next) {
        const book = await bookService.listPublicBooks(req.body.filter, {
            limit: 5,
            page: 1
        });

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async getPublicBook(req, res, next) {
        const ua = req.headers["user-agent"];
        const parser = new UAParser(ua);
        const info = parser.getResult();

        const book = await bookService.getPublicBook(
            req.params.bookId,
            req.params.bookSlug,
            req.response.params.user,
            info,
            getClientIp(req)
        );

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async listRelatedBooks(req, res, next) {
        const book = await bookService.listRelatedBooks(req.params.bookId, req.body.pagination);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async listPublicPublishers(req, res, next) {
        const publishers = await bookService.listPublicPublishers(req.body.filter, req.body.pagination);

        if (publishers.error) {
            return respondError(req, res, "publisher", publishers);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.publisher = publishers;
        return next();
    }
};
