const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

module.exports = {
    // Operaçoes de Gerenciamento
    async linkTagToBook(bookTag, req) {
        try {
            const exists = await db.bookTag.findFirst({
                where: {
                    tag_id: bookTag.tag_id,
                    book_id: bookTag.book_id,
                    status: "A"
                }
            });

            if (exists) {
                throw new Error("Tag already linked to this book");
            }

            const newBookTag = await db.bookTag.create({
                data: {
                    ...bookTag,
                    slug: getSlug(),
                    created_at: new Date(),
                    created_by_user_id: req.response.params.user.id
                },
                select: {
                    // ToDo: Ajustar os campos retornados
                    id: true,
                    slug: true
                }
            });

            return newBookTag;
        } catch (err) {
            return parseError(err);
        }
    },

    async unlinkTagFromBook(tagId, bookId, req) {
        try {
            const bookTag = await db.bookTag.findFirst({
                where: {
                    tag_id: tagId,
                    book_id: bookId,
                    status: "A"
                }
            });

            if (!bookTag) {
                throw new Error("Tag is not linked to this book");
            }
            const updatedBookTag = await db.bookTag.update({
                where: {
                    id: bookTag.id
                },
                data: {
                    status: "D",
                    updated_at: new Date(),
                    updated_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    tag_id: true,
                    book_id: true,
                    status: true,
                    updated_at: true
                }
            });

            return updatedBookTag;
        } catch (err) {
            return parseError(err);
        }
    }
};
