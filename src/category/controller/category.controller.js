const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const categoryService = require("../service/category.service");
const { createTagSchema, updateTagSchema } = require("../../utils/schema/Tag");

module.exports = {
    async listPublicCategories(req, res, next) {
        const category = await categoryService.listPublicCategories(req.body.filter, req.body.pagination);

        if (category.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.category = { error: category.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.category = category;
        return next();
    }
};
