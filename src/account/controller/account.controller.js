const accountService = require("../service/account.service");
const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const {
    createUserEmailSchema,
    createUserLoginSchema,
    createUserSchema,
    updateProfileSchema,
    changePasswordSchema
} = require("../../utils/schema/User");

module.exports = {
    async validateAccountCreationEmail(req, res, next) {
        const validatedUser = validateSchema(createUserEmailSchema, req.body);

        if (!validatedUser.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validatedUser.err };
            return end(req, res);
        }

        const available = await accountService.isEmailAvailable(validatedUser.data.email);

        if (available && available.error) {
            return respondError(req, res, "user", available);
        }

        if (available === false) {
            req.response.meta.feedback = FEEDBACK.CONFLICT;
            req.response.body.user = { error: [{ field: "email", message: "Este e-mail já está em uso." }] };
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

        const available = await accountService.isLoginAvailable(validatedUser.data.login);

        if (available && available.error) {
            return respondError(req, res, "user", available);
        }

        if (available === false) {
            req.response.meta.feedback = FEEDBACK.CONFLICT;
            req.response.body.user = { error: [{ field: "login", message: "Este login já está em uso." }] };
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
            return respondError(req, res, "user", user);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.user = user;
        return next();
    },

    async updateProfile(req, res, next) {
        const validatedUser = validateSchema(updateProfileSchema, req.body);

        if (!validatedUser.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validatedUser.err };
            return end(req, res);
        }

        const user = await accountService.updateProfile(req.response.params.user.id, validatedUser.data);

        if (user.error) {
            return respondError(req, res, "user", user);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.user = user;
        return next();
    },

    async changePassword(req, res, next) {
        const validated = validateSchema(changePasswordSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validated.err };
            return end(req, res);
        }

        const result = await accountService.changePassword(
            req.response.params.user.id,
            validated.data.current_password,
            validated.data.new_password
        );

        if (result.error) {
            return respondError(req, res, "user", result);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.user = result;
        return next();
    }
};
