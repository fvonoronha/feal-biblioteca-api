const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const volumeService = require("../service/volume.service");
const UAParser = require("ua-parser-js");

module.exports = {
    async listVolumes(req, res, next) {
        const volume = await volumeService.listVolumes(req.body.filter, req.body.pagination);

        if (volume.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: volume.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        return next();
    },

    async getVolume(req, res, next) {
        const volume = await volumeService.getVolume(req.params.volumeSlug);

        if (volume.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: volume.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        return next();
    },

    async listRelatedVolumes(req, res, next) {
        const volume = await volumeService.listRelatedVolumes(
            parseInt(req.params.volumeId),
            req.body.filter,
            req.body.pagination
        );

        if (volume.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: volume.error };
            return end(req, res);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        return next();
    }
};
