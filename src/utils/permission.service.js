const feedbackService = require("./feedback.service");
const { end } = require("./request.service");

module.exports = {
    async isAdmin(req, res, next) {
        if (!req.response.params.user) {
            
            req.response.meta.feedback = feedbackService.getFeedbacks().FORBIDDEN;
            return end(req, res);
        }

        if (req.response.params.user.role !== "ADMIN") {
            
            req.response.meta.feedback = feedbackService.getFeedbacks().FORBIDDEN;
            return end(req, res);
        }

        return next();
    }
};
