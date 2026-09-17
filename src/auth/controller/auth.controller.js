const authService = require("../service/auth.service");
const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { getClientIp } = require("../../utils/ip.service");

const { validateSchema } = require("../../utils/validation.service");

const { loginSchema } = require("../../utils/schema/Login");
const {
    requestPasswordResetSchema,
    validateResetTokenSchema,
    resetPasswordSchema
} = require("../../utils/schema/PasswordReset");

module.exports = {
    async login(req, res, next) {
        const validatedLogin = validateSchema(loginSchema, req.body);

        if (!validatedLogin.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.user = { error: validatedLogin.err };
            return end(req, res);
        }

        const { error, httpStatus, user, token } = await authService.login(validatedLogin.data, getClientIp(req));

        if (error) {
            return respondError(req, res, "user", { error, httpStatus });
        }

        user.has_overdue_loan = await authService.hasOverdueLoan(user.id);

        req.response.meta.feedback = FEEDBACK.VALIDATED;
        req.response.user = user;
        req.response.body.user = user;
        req.response.body.token = token;
        return next();
    },

    // Middleware obrigatório: bloqueia com 401 se não houver uma sessão válida.
    // Não escreve corpo de resposta - use `checkSession` (GET /is-auth) para isso.
    async requireAuth(req, res, next) {
        const { error, user } = await authService.isAuth(req, getClientIp(req));

        if (error) {
            req.response.meta.feedback = FEEDBACK.UNAUTHORIZED;
            return end(req, res);
        }

        req.response.params.user = user;
        return next();
    },

    // Middleware opcional: nunca bloqueia a requisição, só popula req.response.params.user
    // quando existir uma sessão válida (usado nas rotas públicas que mudam de comportamento
    // conforme o usuário estar ou não autenticado).
    async attachUserIfPresent(req, res, next) {
        const { error, user } = await authService.isAuth(req, getClientIp(req));

        req.response.params.user = error ? null : user;
        return next();
    },

    // GET /is-auth: devolve o usuário/token atual no corpo da resposta, ou 401 se a sessão
    // não for válida.
    async checkSession(req, res, next) {
        const { error, httpStatus, user, token } = await authService.isAuth(req, getClientIp(req));

        if (error) {
            return respondError(req, res, "user", { error, httpStatus: httpStatus || "UNAUTHORIZED" });
        }

        user.has_overdue_loan = await authService.hasOverdueLoan(user.id);

        req.response.meta.feedback = FEEDBACK.VALIDATED;
        req.response.params.user = user;
        req.response.body.user = user;
        req.response.body.token = token;
        return next();
    },

    async logout(req, res, next) {
        const result = await authService.logout(req, getClientIp(req));

        if (result.error) {
            return respondError(req, res, "user", result);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        return next();
    },

    async requestPasswordReset(req, res, next) {
        const validated = validateSchema(requestPasswordResetSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.passwordReset = { error: validated.err };
            return end(req, res);
        }

        const result = await authService.requestPasswordReset(validated.data.login, getClientIp(req));

        if (result.error) {
            return respondError(req, res, "passwordReset", result);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.passwordReset = result;
        return next();
    },

    async validateResetToken(req, res, next) {
        const validated = validateSchema(validateResetTokenSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.passwordReset = { error: validated.err };
            return end(req, res);
        }

        const result = await authService.validateResetToken(validated.data.token);

        if (result.error) {
            return respondError(req, res, "passwordReset", result);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.passwordReset = result;
        return next();
    },

    async resetPassword(req, res, next) {
        const validated = validateSchema(resetPasswordSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.passwordReset = { error: validated.err };
            return end(req, res);
        }

        const result = await authService.resetPassword(validated.data.token, validated.data.password);

        if (result.error) {
            return respondError(req, res, "passwordReset", result);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.passwordReset = result;
        return next();
    }
};
