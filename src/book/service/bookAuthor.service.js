const { getSlug } = require("../../utils/id.service");
const { db, parseError, notFoundError } = require("../../utils/db.service");

module.exports = {
    async linkAuthorToBook(volumeAuthor, req) {
        try {
            const exists = await db.volumeAuthor.findFirst({
                where: {
                    author_id: volumeAuthor.author_id,
                    volume_id: volumeAuthor.volume_id,
                    status: "A"
                }
            });

            if (exists) {
                return { httpStatus: "CONFLICT", error: [{ field: "author_id", message: "Autor já vinculado a este volume" }] };
            }

            const newVolumeAuthor = await db.volumeAuthor.create({
                data: {
                    author_id: volumeAuthor.author_id,
                    volume_id: volumeAuthor.volume_id,
                    description: volumeAuthor.description,
                    created_at: new Date(),
                    created_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    author_id: true,
                    volume_id: true,
                    description: true,
                    status: true
                }
            });

            return newVolumeAuthor;
        } catch (err) {
            return parseError(err);
        }
    },

    async unlinkAuthorFromBook(authorId, volumeId, req) {
        try {
            const volumeAuthor = await db.volumeAuthor.findFirst({
                where: {
                    author_id: parseInt(authorId),
                    volume_id: parseInt(volumeId),
                    status: "A"
                }
            });

            if (!volumeAuthor) {
                throw notFoundError("Autor não está vinculado a este volume");
            }

            const updatedVolumeAuthor = await db.volumeAuthor.update({
                where: {
                    id: volumeAuthor.id
                },
                data: {
                    status: "D",
                    updated_at: new Date(),
                    updated_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    author_id: true,
                    volume_id: true,
                    status: true,
                    updated_at: true
                }
            });

            return updatedVolumeAuthor;
        } catch (err) {
            return parseError(err);
        }
    }
};
