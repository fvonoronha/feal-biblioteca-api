const userService = require("../service/user.service");
const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const {
    preRegisterUserSchema,
    updateUserRoleSchema,
    updateUserStatusSchema,
    updateUserInfoSchema
} = require("../../utils/schema/User");
const { getOnlyDigits } = require("../../utils/string.service");

module.exports = {
    async listUsersAdmin(req, res, next) {
        const result = await userService.listUsersAdmin(req.body.filter || {}, req.body.pagination || {});

        if (result.error) {
            return respondError(req, res, "user", result);
        }

        req.response.meta.feedback = FEEDBACK.LISTED;
        req.response.body.user = result;
        return next();
    },

    async searchUsers(req, res, next) {
        const result = await userService.searchUsers(req.body.filter || {}, req.body.pagination || {});

        if (result.error) {
            return respondError(req, res, "user", result);
        }

        req.response.meta.feedback = FEEDBACK.LISTED;
        req.response.body.user = result;
        return next();
    },

    async preRegisterUser(req, res, next) {
        const normalizedBody = {
            ...req.body,
            phone: getOnlyDigits(req.body.phone),
            document: getOnlyDigits(req.body.document)
        };

        const validatedUser = validateSchema(preRegisterUserSchema, normalizedBody);

        if (!validatedUser.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validatedUser.err };
            return end(req, res);
        }

        const user = await userService.preRegisterUser(validatedUser.data);

        if (user.error) {
            return respondError(req, res, "user", user);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.user = user;
        return next();
    },

    async updateUserRole(req, res, next) {
        const validated = validateSchema(updateUserRoleSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validated.err };
            return end(req, res);
        }

        const user = await userService.updateUserRole(req.params.userId, validated.data.role, req);

        if (user.error) {
            return respondError(req, res, "user", user);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.user = user;
        return next();
    },

    async updateUserInfo(req, res, next) {
        const validated = validateSchema(updateUserInfoSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validated.err };
            return end(req, res);
        }

        const user = await userService.updateUserInfo(req.params.userId, validated.data, req);

        if (user.error) {
            return respondError(req, res, "user", user);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.user = user;
        return next();
    },

    async updateUserStatus(req, res, next) {
        const validated = validateSchema(updateUserStatusSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validated.err };
            return end(req, res);
        }

        const user = await userService.updateUserStatus(req.params.userId, validated.data.status, req);

        if (user.error) {
            return respondError(req, res, "user", user);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.user = user;
        return next();
    }
};
