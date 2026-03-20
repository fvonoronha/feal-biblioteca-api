const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const bookService = require("../service/book.service");
const { createBookSchema, updateBookSchema } = require("../../utils/schema/Book");

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
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: newBook.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.book = newBook;
        return next();
    },

    async listBooks(req, res, next) {
        const book = await bookService.listBooks(req.body.filter, req.body.pagination);

        if (book.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: book.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async getBook(req, res, next) {
        const book = await bookService.getBook(req.params.bookId, req.params.bookSlug);

        if (book.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: book.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async listPublicBooks(req, res, next) {
        const book = await bookService.listPublicBooks(req.body.filter, req.body.pagination);

        if (book.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: book.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async getPublicBook(req, res, next) {
        const book = await bookService.getPublicBook(req.params.bookId, req.params.bookSlug);

        if (book.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: book.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async listRelatedBooks(req, res, next) {
        const book = await bookService.listRelatedBooks(req.params.bookId, req.body.pagination);

        if (book.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: book.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        return next();
    },

    async listPublicPublishers(req, res, next) {
        const publishers = await bookService.listPublicPublishers(req.body.filter, req.body.pagination);

        if (publishers.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.publisher = { error: publishers.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.publisher = publishers;
        return next();
    }
};
