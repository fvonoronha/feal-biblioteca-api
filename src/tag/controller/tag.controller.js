const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const tagService = require("../service/tag.service");
const { createTagSchema, updateTagSchema } = require("../../utils/schema/Tag");

module.exports = {
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
    }
};
