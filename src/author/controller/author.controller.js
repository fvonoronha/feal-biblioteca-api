const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const { createAuthorSchema, updateAuthorSchema } = require("../../utils/schema/Author");
const authorService = require("../service/author.service");

module.exports = {
    async listAuthors(req, res, next) {
        const author = await authorService.listAuthors(req.body.filter, req.body.pagination);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async listAuthorsToExplore(req, res, next) {
        const author = await authorService.listAuthors({ ...req.body.filter, explore: true }, req.body.pagination);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async listAuthorsAdmin(req, res, next) {
        const author = await authorService.listAuthorsAdmin(req.body.filter, req.body.pagination);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async getAuthor(req, res, next) {
        const author = await authorService.getAuthor(req.params.authorSlug, req.response.params.user?.id);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        return next();
    },

    async createAuthor(req, res, next) {
        const validated = validateSchema(createAuthorSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: validated.err };
            return end(req, res);
        }

        const author = await authorService.createAuthor(validated.data, req);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.author = author;
        return next();
    },

    async updateAuthor(req, res, next) {
        const validated = validateSchema(updateAuthorSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.author = { error: validated.err };
            return end(req, res);
        }

        const author = await authorService.updateAuthor(req.params.authorId, validated.data, req);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.author = author;
        return next();
    },

    async uploadAvatar(req, res, next) {
        const author = await authorService.uploadAvatarImage(req.params.authorId, req.file.buffer, req);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.author = author;
        return next();
    },

    async deleteAuthor(req, res, next) {
        const author = await authorService.deleteAuthor(req.params.authorId, req);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.author = author;
        return next();
    }
};
