const { end } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { validateSchema } = require("../../utils/validation.service");
const geminiService = require("../service/gemini.service");
const bookService = require("../../book/service/book.service");
const publisherService = require("../../publisher/service/publisher.service");
const { createTagSchema, updateTagSchema } = require("../../utils/schema/Tag");
const { db } = require("../../utils/db.service");

module.exports = {
    async setupVolume(req, res, next) {
        let vol = req.response.body.volume;
        delete req.response.body.volume;
        const volume = await geminiService.getVolumeEnhancedInfo(vol);

        if (volume.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: volume.error };
            return end(req, res);
        }
        const updatedVolume = updateBookFromGemini(vol.book.id, 90001, volume);

        if (updatedVolume.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: updatedVolume.error };
            return end(req, res);
        }
        // -- ToDo: Retirar isso daqui

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        req.response.body.updatedVolume = updatedVolume;
        return next();
    },

    async setupBook(req, res, next) {
        const book = await bookService.getBookMetaForGemini(req.params.bookSlug);

        if (book.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: book.error };
            return end(req, res);
        }

        const enhancedBook = await geminiService.getVolumeEnhancedInfo(book);

        if (enhancedBook.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: enhancedBook.error };
            return end(req, res);
        }

        const updatedVolume = await updateBookFromGemini(book.id, 90001, enhancedBook);

        if (updatedVolume.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.volume = { error: updatedVolume.error };
            return end(req, res);
        }
        // -- ToDo: Retirar isso daqui

        req.response.meta.feedback = FEEDBACK.READ;
        // req.response.body.book = book;
        req.response.body.book = updatedVolume;
        return next();
    },

    async setupBooks(req, res, next) {
        const books = await bookService.getBooksMetaForGemini(parseInt(req.params.quantity));

        let failBooks = [];
        let okBooks = [];

        if (books.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.book = { error: books.error };
            return end(req, res);
        }

        for (let i in books) {
            const enhancedBook = await geminiService.getVolumeEnhancedInfo(books[i]);

            if (enhancedBook.error) {
                console.log('Erro no Enhance de "', books[i].slug, '": ', enhancedBook.error);
                failBooks.push(books[i].slug);
                continue;
            }

            const updatedVolume = await updateBookFromGemini(books[i].id, 90001, enhancedBook);

            if (updatedVolume.error) {
                console.log('Erro no update de"', books[i].slug, '": ', updatedVolume.error);
                failBooks.push(books[i].slug);
                continue;
            }
            console.log(">>> ", i, " - OK - ", books[i].slug);
            okBooks.push(books[i].slug);
        }

        req.response.body.ok = okBooks;
        req.response.body.fail = failBooks;
        return next();
    },

    async setupPublishers(req, res, next) {
        const publishers = await publisherService.getPublishersMetaForGemini(parseInt(req.params.quantity));

        let failPublishers = [];
        let okPublishers = [];

        if (publishers.error) {
            req.response.meta.feedback = FEEDBACK.BAD_REQUEST;
            req.response.body.publisher = { error: publishers.error };
            return end(req, res);
        }

        for (let i in publishers) {
            const enhancedPublisher = await geminiService.getPublisherEnhancedInfo(publishers[i]);

            if (enhancedPublisher.error) {
                console.log("Erro na editora: ", publishers[i].id, " >>> ", enhancedPublisher.error);
                failPublishers.push(books[i].slug);
                continue;
            }

            const updatedVolume = await updatePublisherFromGemini(publishers[i].id, 90001, enhancedPublisher);

            if (updatedVolume.error) {
                console.log("Erro no enhance: ", publishers[i].id, " >>> ", updatedVolume.error);
                failPublishers.push(publishers[i].slug);
                continue;
            }
            console.log(">>> ", i, " - OK - ", publishers[i].slug);
            okPublishers.push(publishers[i].slug);
        }

        req.response.body.ok = okPublishers;
        req.response.body.fail = failPublishers;
        return next();
    }
};

async function updateBookFromGemini(bookId, userId, dadosGemini) {
    const bId = BigInt(bookId);
    const uId = BigInt(userId);
    const tagsDoBanco = await db.tag.findMany({
        where: {
            slug: { in: dadosGemini.tags },
            status: "A"
        },
        select: { id: true }
    });

    // 2. Atualiza o livro e seus relacionamentos de forma atômica
    return await db.book.update({
        where: { id: bId },
        data: {
            updated_at: new Date(),
            // updated_by: parseInt(uId),
            summary: dadosGemini.summary,
            description: dadosGemini.description,
            recommended_for: dadosGemini.recommended_for,
            keywords: dadosGemini.keywords,

            // Conecta a categoria existente pelo slug
            category: {
                connect: { slug: dadosGemini.category }
            },

            // Atualiza as tags na tabela intermediária (BookTag)
            tags: {
                // Remove os vínculos antigos para evitar duplicações
                deleteMany: {},
                // Cria as novas relações respeitando a obrigatoriedade do criador no seu schema
                create: tagsDoBanco.map((tag) => ({
                    tag_id: tag.id,
                    created_by_user_id: uId,
                    status: "A"
                }))
            }
        }
    });
}

async function updatePublisherFromGemini(publisherId, userId, dadosGemini) {
    const bId = BigInt(publisherId);
    const uId = BigInt(userId);

    // 2. Atualiza o livro e seus relacionamentos de forma atômica
    return await db.publisher.update({
        where: { id: bId },
        data: {
            abbreviation: dadosGemini.abbreviation,
            description: dadosGemini.description
        }
    });
}
