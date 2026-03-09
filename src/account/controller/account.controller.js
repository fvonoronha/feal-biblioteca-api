const accountService = require("../service/account.service");
const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const { createUserEmailSchema, createUserLoginSchema, createUserSchema } = require("../../utils/schema/User");

module.exports = {
    async validateAccountCreationEmail(req, res, next) {
        const validatedUser = validateSchema(createUserEmailSchema, req.body);

        if (!validatedUser.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validatedUser.err };
            return end(req, res);
        }

        const user = await accountService.validateAccountCreationEmail(validatedUser.data.email);

        if (!user) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: user.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        return next();
    },

    async validateAccountCreationLogin(req, res, next) {
        const validatedUser = validateSchema(createUserLoginSchema, req.body);

        if (!validatedUser.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validatedUser.err };
            return end(req, res);
        }

        const user = await accountService.validateAccountCreationLogin(validatedUser.data.login);

        if (!user) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: user.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        return next();
    },

    async createAccount(req, res, next) {
        const validatedUser = validateSchema(createUserSchema, req.body);

        if (!validatedUser.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validatedUser.err };
            return end(req, res);
        }

        const user = await accountService.createAccount(validatedUser.data);

        if (user.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: user.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.user = user;
        return next();
    }
};
