const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const { createPublisherSchema, updatePublisherSchema } = require("../../utils/schema/Publisher");
const publisherService = require("../service/publisher.service");

module.exports = {
    async listPublishers(req, res, next) {
        const publisher = await publisherService.listPublishers(req.body.filter, req.body.pagination);

        if (publisher.error) {
            return respondError(req, res, "publisher", publisher);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.publisher = publisher;
        return next();
    },

    async listPublishersToExplore(req, res, next) {
        const publisher = await publisherService.listPublishers({ ...req.body.filter, explore: true }, req.body.pagination);

        if (publisher.error) {
            return respondError(req, res, "publisher", publisher);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.publisher = publisher;
        return next();
    },

    async listPublishersAdmin(req, res, next) {
        const publisher = await publisherService.listPublishersAdmin(req.body.filter, req.body.pagination);

        if (publisher.error) {
            return respondError(req, res, "publisher", publisher);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.publisher = publisher;
        return next();
    },

    async createPublisher(req, res, next) {
        const validated = validateSchema(createPublisherSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.publisher = { error: validated.err };
            return end(req, res);
        }

        const publisher = await publisherService.createPublisher(validated.data, req);

        if (publisher.error) {
            return respondError(req, res, "publisher", publisher);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.publisher = publisher;
        return next();
    },

    async updatePublisher(req, res, next) {
        const validated = validateSchema(updatePublisherSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.publisher = { error: validated.err };
            return end(req, res);
        }

        const publisher = await publisherService.updatePublisher(req.params.publisherId, validated.data, req);

        if (publisher.error) {
            return respondError(req, res, "publisher", publisher);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.publisher = publisher;
        return next();
    },

    async deletePublisher(req, res, next) {
        const publisher = await publisherService.deletePublisher(req.params.publisherId, req);

        if (publisher.error) {
            return respondError(req, res, "publisher", publisher);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.publisher = publisher;
        return next();
    }
};
