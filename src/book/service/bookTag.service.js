const { db, parseError, notFoundError } = require("../../utils/db.service");

module.exports = {
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
                return { httpStatus: "CONFLICT", error: [{ field: "tag_id", message: "Tema já vinculado a este livro" }] };
            }

            const newBookTag = await db.bookTag.create({
                data: {
                    tag_id: bookTag.tag_id,
                    book_id: bookTag.book_id,
                    created_at: new Date(),
                    created_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    tag_id: true,
                    book_id: true,
                    status: true
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
                    tag_id: parseInt(tagId),
                    book_id: parseInt(bookId),
                    status: "A"
                }
            });

            if (!bookTag) {
                throw notFoundError("Tema não está vinculado a este livro");
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
