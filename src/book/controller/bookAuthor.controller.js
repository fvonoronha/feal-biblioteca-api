const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const bookAuthorService = require("../service/bookAuthor.service");
const { linkAuthorToBookSchema } = require("../../utils/schema/Book");

module.exports = {
    async linkAuthorToBook(req, res, next) {
        const volumeAuthor = validateSchema(linkAuthorToBookSchema, {
            ...req.body,
            volume_id: parseInt(req.params.volumeId),
            author_id: parseInt(req.params.authorId)
        });

        if (!volumeAuthor.success) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume_author = { error: volumeAuthor.err };
            return end(req, res);
        }

        const newVolumeAuthor = await bookAuthorService.linkAuthorToBook(volumeAuthor.data, req);

        if (newVolumeAuthor.error) {
            return respondError(req, res, "volume_author", newVolumeAuthor);
        }

        req.response.meta.feedback = FEEDBACK.CREATED;
        req.response.body.volume_author = newVolumeAuthor;
        return next();
    },

    async unlinkAuthorFromBook(req, res, next) {
        const newVolumeAuthor = await bookAuthorService.unlinkAuthorFromBook(req.params.authorId, req.params.volumeId, req);

        if (newVolumeAuthor.error) {
            return respondError(req, res, "volume_author", newVolumeAuthor);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.volume_author = newVolumeAuthor;
        return next();
    }
};
