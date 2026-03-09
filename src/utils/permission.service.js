const feedbackService = require("./feedback.service");
const { end } = require("./request.service");

module.exports = {
    async isAdmin(req, res, next) {
        if (!req.response.params.user) {
            console.log("1");
            req.response.meta.feedback = feedbackService.getFeedbacks().FORBIDDEN;
            return end(req, res);
        }

        if (req.response.params.user.role !== "ADMIN") {
            console.log("2");
            req.response.meta.feedback = feedbackService.getFeedbacks().FORBIDDEN;
            return end(req, res);
        }

        return next();
    }
};
