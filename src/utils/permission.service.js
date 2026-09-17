const feedbackService = require("./feedback.service");
const { end } = require("./request.service");

module.exports = {
    async isAdmin(req, res, next) {
        if (!req.response.params.user || req.response.params.user.role !== "ADMIN") {
            req.response.meta.feedback = feedbackService.getFeedbacks().FORBIDDEN;
            return end(req, res);
        }

        return next();
    },

    // Middleware factory: hasRole("ADMIN", "LIBRARIAN") só deixa passar usuários com um desses papéis.
    // Precisa rodar depois de um middleware de autenticação que já populou req.response.params.user.
    hasRole(...roles) {
        return async (req, res, next) => {
            if (!req.response.params.user || !roles.includes(req.response.params.user.role)) {
                req.response.meta.feedback = feedbackService.getFeedbacks().FORBIDDEN;
                return end(req, res);
            }

            return next();
        };
    }
};
