const { parsePagination } = require("../../utils/pagination.service");
const { getSlug } = require("../../utils/id.service");
const { encrypt2, decrypt2 } = require("../../utils/cryptography.service");
const { db, parseError } = require("../../utils/db.service");

module.exports = {
    // Operaçoes de Gerenciamento
    async linkAuthorToBook(bookAuthor, req) {
        try {
            const exists = await db.bookAuthor.findFirst({
                where: {
                    author_id: bookAuthor.author_id,
                    book_id: bookAuthor.book_id,
                    status: "A"
                }
            });

            if (exists) {
                throw new Error("Author already linked to this book");
            }

            const newBookAuthor = await db.bookAuthor.create({
                data: {
                    ...bookAuthor,
                    slug: getSlug(),
                    created_at: new Date(),
                    created_by_user_id: req.response.params.user.id
                },
                select: {
                    // ToDo: Ajustar os campos retornados
                    id: true,
                    slug: true,
                    description: true
                }
            });

            return newBookAuthor;
        } catch (err) {
            return parseError(err);
        }
    },

    async unlinkAuthorFromBook(authorId, bookId, req) {
        try {
            const bookAuthor = await db.bookAuthor.findFirst({
                where: {
                    author_id: authorId,
                    book_id: bookId,
                    status: "A"
                }
            });

            if (!bookAuthor) {
                throw new Error("Author is not linked to this book");
            }
            const updatedBookAuthor = await db.bookAuthor.update({
                where: {
                    id: bookAuthor.id
                },
                data: {
                    status: "D",
                    updated_at: new Date(),
                    updated_by_user_id: req.response.params.user.id
                },
                select: {
                    id: true,
                    author_id: true,
                    book_id: true,
                    status: true,
                    updated_at: true
                }
            });

            return updatedBookAuthor;
        } catch (err) {
            return parseError(err);
        }
    }
};
