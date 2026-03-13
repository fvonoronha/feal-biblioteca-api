const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const bookAuthorService = require("../service/bookAuthor.service");
const { linkAuthorToBookSchema } = require("../../utils/schema/Book");

module.exports = {
    async linkAuthorToBook(req, res, next) {
        const bookAuthor = validateSchema(linkAuthorToBookSchema, {
            ...req.body,
            book_id: parseInt(req.params.bookId),
            author_id: parseInt(req.params.authorId)
        });

        if (!bookAuthor.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book_author = { error: bookAuthor.err };
            return end(req, res);
        }

        const newBookAuthor = await bookAuthorService.linkAuthorToBook(bookAuthor.data, req);

        if (newBookAuthor.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book_author = { error: newBookAuthor.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.book_author = newBookAuthor;
        return next();
    },

    async unlinkAuthorFromBook(req, res, next) {
        const newBookAuthor = await bookAuthorService.unlinkAuthorFromBook(req.params.authorId, req.params.bookId, req);

        if (newBookAuthor.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book_author = { error: newBookAuthor.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.book_author = newBookAuthor;
        return next();
    }
};
