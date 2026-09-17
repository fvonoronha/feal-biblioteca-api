const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const { createVolumeSchema, updateVolumeSchema } = require("../../utils/schema/Volume");
const volumeService = require("../service/volume.service");

module.exports = {
    async createVolume(req, res, next) {
        const validated = validateSchema(createVolumeSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: validated.err };
            return end(req, res);
        }

        const volume = await volumeService.createVolume(validated.data, req);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.volume = volume;
        return next();
    },

    async updateVolume(req, res, next) {
        const validated = validateSchema(updateVolumeSchema, req.body);

        if (!validated.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: validated.err };
            return end(req, res);
        }

        const volume = await volumeService.updateVolume(req.params.volumeId, validated.data, req);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.volume = volume;
        return next();
    },

    async uploadCover(req, res, next) {
        const volume = await volumeService.uploadCoverImage(req.params.volumeId, req.file.buffer, req);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.volume = volume;
        return next();
    },

    async uploadBack(req, res, next) {
        const volume = await volumeService.uploadBackImage(req.params.volumeId, req.file.buffer, req);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.volume = volume;
        return next();
    },

    async uploadAuxImage(req, res, next) {
        const volume = await volumeService.addAuxImage(req.params.volumeId, req.file.buffer, req);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.volume = volume;
        return next();
    },

    async deleteAuxImage(req, res, next) {
        const volume = await volumeService.removeAuxImage(req.params.volumeId, req.query.url, req);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.volume = volume;
        return next();
    },

    async deleteVolume(req, res, next) {
        const volume = await volumeService.deleteVolume(req.params.volumeId, req);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.volume = volume;
        return next();
    },

    async listVolumes(req, res, next) {
        const volume = await volumeService.listVolumes(req.body.filter, req.body.pagination, req.response.params.user?.id);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        return next();
    },

    async getVolume(req, res, next) {
        const volume = await volumeService.getVolume(req.params.volumeSlug, req.response.params.user?.id);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        return next();
    },

    async listRelatedVolumes(req, res, next) {
        const volume = await volumeService.listRelatedVolumes(
            parseInt(req.params.volumeId),
            req.body.filter,
            req.body.pagination,
            req.response.params.user?.id
        );

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        return next();
    }
};
