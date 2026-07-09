const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const authorService = require("../service/author.service");
const { createAuthorSchema, updateAuthorSchema } = require("../../utils/schema/Author");

module.exports = {
    async createAuthor(req, res, next) {
        const author = validateSchema(createAuthorSchema, req.body);

        if (!author.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: author.err };
            return end(req, res);
        }

        const newAuthor = await authorService.createAuthor(author.data, req);

        if (newAuthor.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: newAuthor.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.author = newAuthor;
        return next();
    },

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

    async getAuthor(req, res, next) {
        const author = await authorService.getAuthor(req.params.authorId, req.params.authorSlug);

        if (author.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: author.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async listPublicAuthors(req, res, next) {
        const author = await authorService.listPublicAuthors(
            req.body.filter,
            req.body.pagination,
            req.body.trim || req.body.filter.trim
        );

        if (author.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: author.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async filterAuthors(req, res, next) {
        const author = await authorService.listPublicAuthors(req.body.filter, {
            limit: 5,
            page: 1
        });

        if (author.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: author.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async explorePublicAuthors(req, res, next) {
        const author = await authorService.explorePublicAuthors(
            { ...req.body.filter },
            {
                ...req.body.pagination
            }
        );

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
