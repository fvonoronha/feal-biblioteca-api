const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const { createTagSchema, updateTagSchema } = require("../../utils/schema/Tag");
const tagService = require("../service/tag.service");

module.exports = {
    async listTags(req, res, next) {
        const tag = await tagService.listTags(req.body.filter, req.body.pagination);

        if (tag.error) {
            return respondError(req, res, "tag", tag);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.tag = tag;
        return next();
    },

    async listTagsToExplore(req, res, next) {
        const tag = await tagService.listTags({ ...req.body.filter, explore: true }, req.body.pagination);

        if (tag.error) {
            return respondError(req, res, "tag", tag);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.tag = tag;
        return next();
    },

    async listTagsAdmin(req, res, next) {
        const tag = await tagService.listTagsAdmin(req.body.filter, req.body.pagination);

        if (tag.error) {
            return respondError(req, res, "tag", tag);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.tag = tag;
        return next();
    },

    async createTag(req, res, next) {
        const validated = validateSchema(createTagSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.tag = { error: validated.err };
            return end(req, res);
        }

        const tag = await tagService.createTag(validated.data, req);

        if (tag.error) {
            return respondError(req, res, "tag", tag);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.tag = tag;
        return next();
    },

    async updateTag(req, res, next) {
        const validated = validateSchema(updateTagSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.tag = { error: validated.err };
            return end(req, res);
        }

        const tag = await tagService.updateTag(req.params.tagId, validated.data, req);

        if (tag.error) {
            return respondError(req, res, "tag", tag);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.tag = tag;
        return next();
    },

    async deleteTag(req, res, next) {
        const tag = await tagService.deleteTag(req.params.tagId, req);

        if (tag.error) {
            return respondError(req, res, "tag", tag);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.tag = tag;
        return next();
    }
};
