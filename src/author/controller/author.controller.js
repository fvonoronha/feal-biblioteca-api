const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const authorService = require("../service/author.service");
const { createAuthorSchema, updateAuthorSchema } = require("../../utils/schema/Author");

module.exports = {
    async listAuthors(req, res, next) {
        const author = await authorService.listAuthors(req.body.filter, req.body.pagination);

        if (author.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: author.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async listAuthorsToExplore(req, res, next) {
        const author = await authorService.listAuthors({ ...req.body.filter, explore: true }, req.body.pagination);

        if (author.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: author.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    }
};
