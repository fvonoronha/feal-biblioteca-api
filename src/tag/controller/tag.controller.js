const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const tagService = require("../service/tag.service");
const { createTagSchema, updateTagSchema } = require("../../utils/schema/Tag");

module.exports = {
    async createTag(req, res, next) {
        const tag = validateSchema(createTagSchema, req.body);

        if (!tag.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: tag.err };
            return end(req, res);
        }

        const newTag = await tagService.createTag(tag.data, req);

        if (newTag.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.tag = { error: newTag.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.tag = newTag;
        return next();
    },

    async listTags(req, res, next) {
        const tag = await tagService.listTags(req.body.filter, req.body.pagination);

        if (tag.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.tag = { error: tag.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.tag = tag;
        return next();
    },

    async getTag(req, res, next) {
        const tag = await tagService.getTag(req.params.tagId, req.params.tagSlug);

        if (tag.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.tag = { error: tag.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.tag = tag;
        return next();
    },

    async listPublicTags(req, res, next) {
        const tag = await tagService.listPublicTags(req.body.filter, req.body.pagination);

        if (tag.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.tag = { error: tag.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.tag = tag;
        return next();
    },

    async explorePublicTags(req, res, next) {
        const tag = await tagService.explorePublicTags(req.body.filter, req.body.pagination);

        if (tag.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.tag = { error: tag.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.tag = tag;
        return next();
    }
};
