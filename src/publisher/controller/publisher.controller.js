const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const publisherService = require("../service/publisher.service");
const { createTagSchema, updateTagSchema } = require("../../utils/schema/Tag");

module.exports = {
    async listPublishers(req, res, next) {
        const publisher = await publisherService.listPublishers(req.body.filter, req.body.pagination);

        if (publisher.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.publisher = { error: publisher.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.publisher = publisher;
        return next();
    }
};
