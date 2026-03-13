const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const bookTagService = require("../service/bookTag.service");
const { linkTagToBookSchema } = require("../../utils/schema/Book");

module.exports = {
    async linkTagToBook(req, res, next) {
        const bookTag = validateSchema(linkTagToBookSchema, {
            ...req.body,
            book_id: parseInt(req.params.bookId),
            tag_id: parseInt(req.params.tagId)
        });

        if (!bookTag.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book_tag = { error: bookTag.err };
            return end(req, res);
        }

        const newBookTag = await bookTagService.linkTagToBook(bookTag.data, req);

        if (newBookTag.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book_tag = { error: newBookTag.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.book_tag = newBookTag;
        return next();
    },

    async unlinkTagFromBook(req, res, next) {
        const newBookTag = await bookTagService.unlinkTagFromBook(req.params.tagId, req.params.bookId, req);

        if (newBookTag.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book_tag = { error: newBookTag.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.book_tag = newBookTag;
        return next();
    }
};
