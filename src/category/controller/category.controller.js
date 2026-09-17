const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const { createCategorySchema, updateCategorySchema } = require("../../utils/schema/Category");
const categoryService = require("../service/category.service");

module.exports = {
    async listCategories(req, res, next) {
        const category = await categoryService.listCategories(req.body.filter, req.body.pagination);

        if (category.error) {
            return respondError(req, res, "category", category);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.category = category;
        return next();
    },

    async listCategoriesToExplore(req, res, next) {
        const category = await categoryService.listCategories({ ...req.body.filter, explore: true }, req.body.pagination);

        if (category.error) {
            return respondError(req, res, "category", category);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.category = category;
        return next();
    },

    async listCategoriesAdmin(req, res, next) {
        const category = await categoryService.listCategoriesAdmin(req.body.filter, req.body.pagination);

        if (category.error) {
            return respondError(req, res, "category", category);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.category = category;
        return next();
    },

    async createCategory(req, res, next) {
        const validated = validateSchema(createCategorySchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.category = { error: validated.err };
            return end(req, res);
        }

        const category = await categoryService.createCategory(validated.data, req);

        if (category.error) {
            return respondError(req, res, "category", category);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.category = category;
        return next();
    },

    async updateCategory(req, res, next) {
        const validated = validateSchema(updateCategorySchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.category = { error: validated.err };
            return end(req, res);
        }

        const category = await categoryService.updateCategory(req.params.categoryId, validated.data, req);

        if (category.error) {
            return respondError(req, res, "category", category);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.category = category;
        return next();
    },

    async deleteCategory(req, res, next) {
        const category = await categoryService.deleteCategory(req.params.categoryId, req);

        if (category.error) {
            return respondError(req, res, "category", category);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.category = category;
        return next();
    }
};
