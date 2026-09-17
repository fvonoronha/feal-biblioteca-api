const { end, respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const geminiService = require("../service/gemini.service");
const bookService = require("../../book/service/book.service");
const publisherService = require("../../publisher/service/publisher.service");
const authorService = require("../../author/service/author.service");
const { db, parseError } = require("../../utils/db.service");

const CONCURRENCY = 3;

// Executa `items` através de `worker` com no máximo CONCURRENCY chamadas em paralelo,
// em vez de 100% sequencial (cada chamada ao Gemini já faz até NUMBER_OF_RETRIES tentativas,
// então processar tudo em série multiplicava a latência total por `quantity`).
async function processWithConcurrencyLimit(items, worker) {
    const results = new Array(items.length);
    let cursor = 0;

    async function runNext() {
        while (cursor < items.length) {
            const currentIndex = cursor++;
            results[currentIndex] = await worker(items[currentIndex], currentIndex);
        }
    }

    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, runNext));
    return results;
}

module.exports = {
    // Só CONSULTA o Gemini e devolve a sugestão para o front revisar - não grava nada no
    // banco. Quem decide o que aplicar é o operador, campo por campo (ver PUT /book/:bookId e
    // PUT /book/:bookId/tags, chamados separadamente só com o que foi aceito).
    async suggestBookEnhancement(req, res, next) {
        const book = await bookService.getBookMetaForGemini(req.params.bookSlug);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        const suggestion = await geminiService.getVolumeEnhancedInfo(book);

        if (suggestion.error) {
            return respondError(req, res, "book", suggestion);
        }

        const [category, tags] = await Promise.all([
            suggestion.category ? db.category.findFirst({ where: { slug: suggestion.category }, select: { id: true, slug: true, name: true } }) : null,
            suggestion.tags?.length
                ? db.tag.findMany({ where: { slug: { in: suggestion.tags } }, select: { id: true, slug: true, name: true } })
                : []
        ]);

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = book;
        req.response.body.suggestion = {
            summary: suggestion.summary,
            description: suggestion.description,
            recommended_for: suggestion.recommended_for,
            keywords: suggestion.keywords || [],
            category,
            tags
        };
        return next();
    },

    // Só CONSULTA o Gemini e devolve a sugestão para o front revisar - não grava nada no
    // banco. Mesmo espírito de suggestBookEnhancement: quem aplica é o operador, via PUT
    // /author/:authorId normal, só com o que foi aceito.
    async suggestAuthorEnhancement(req, res, next) {
        const author = await authorService.getAuthorMetaForGemini(req.params.authorSlug);

        if (author.error) {
            return respondError(req, res, "author", author);
        }

        const suggestion = await geminiService.getAuthorEnhancedInfo(author);

        if (suggestion.error) {
            return respondError(req, res, "author", suggestion);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.author = author;
        req.response.body.suggestion = {
            description: suggestion.description,
            birth_date: suggestion.birth_date || null,
            death_date: suggestion.death_date || null
        };
        return next();
    },

    async setupVolume(req, res, next) {
        let vol = req.response.body.volume;
        delete req.response.body.volume;
        const volume = await geminiService.getVolumeEnhancedInfo(vol);

        if (volume.error) {
            return respondError(req, res, "volume", volume);
        }

        const updatedVolume = await updateBookFromGemini(vol.book.id, req.response.params.user.id, volume);

        if (updatedVolume.error) {
            return respondError(req, res, "volume", updatedVolume);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.volume = volume;
        req.response.body.updatedVolume = updatedVolume;
        return next();
    },

    async setupBook(req, res, next) {
        const book = await bookService.getBookMetaForGemini(req.params.bookSlug);

        if (book.error) {
            return respondError(req, res, "book", book);
        }

        const enhancedBook = await geminiService.getVolumeEnhancedInfo(book);

        if (enhancedBook.error) {
            return respondError(req, res, "book", enhancedBook);
        }

        const updatedVolume = await updateBookFromGemini(book.id, req.response.params.user.id, enhancedBook);

        if (updatedVolume.error) {
            return respondError(req, res, "book", updatedVolume);
        }

        req.response.meta.feedback = FEEDBACK.READ;
        req.response.body.book = updatedVolume;
        return next();
    },

    async setupBooks(req, res, next) {
        const books = await bookService.getBooksMetaForGemini(parseInt(req.params.quantity));

        if (books.error) {
            return respondError(req, res, "book", books);
        }

        const userId = req.response.params.user.id;
        const failBooks = [];
        const okBooks = [];

        await processWithConcurrencyLimit(books, async (book) => {
            const enhancedBook = await geminiService.getVolumeEnhancedInfo(book);

            if (enhancedBook.error) {
                console.log('Erro no Enhance de "', book.slug, '": ', enhancedBook.error);
                failBooks.push(book.slug);
                return;
            }

            const updatedVolume = await updateBookFromGemini(book.id, userId, enhancedBook);

            if (updatedVolume.error) {
                console.log('Erro no update de"', book.slug, '": ', updatedVolume.error);
                failBooks.push(book.slug);
                return;
            }

            okBooks.push(book.slug);
        });

        req.response.body.ok = okBooks;
        req.response.body.fail = failBooks;
        return next();
    },

    async setupPublishers(req, res, next) {
        const publishers = await publisherService.getPublishersMetaForGemini(parseInt(req.params.quantity));

        if (publishers.error) {
            return respondError(req, res, "publisher", publishers);
        }

        const userId = req.response.params.user.id;
        const failPublishers = [];
        const okPublishers = [];

        await processWithConcurrencyLimit(publishers.elements || publishers, async (publisher) => {
            const enhancedPublisher = await geminiService.getPublisherEnhancedInfo(publisher);

            if (enhancedPublisher.error) {
                console.log("Erro na editora: ", publisher.id, " >>> ", enhancedPublisher.error);
                failPublishers.push(publisher.slug);
                return;
            }

            const updatedPublisher = await updatePublisherFromGemini(publisher.id, userId, enhancedPublisher);

            if (updatedPublisher.error) {
                console.log("Erro no enhance: ", publisher.id, " >>> ", updatedPublisher.error);
                failPublishers.push(publisher.slug);
                return;
            }

            okPublishers.push(publisher.slug);
        });

        req.response.body.ok = okPublishers;
        req.response.body.fail = failPublishers;
        return next();
    }
};

async function updateBookFromGemini(bookId, userId, dadosGemini) {
    try {
        const bId = BigInt(bookId);
        const uId = BigInt(userId);
        const tagsDoBanco = await db.tag.findMany({
            where: {
                slug: { in: dadosGemini.tags },
                status: "A"
            },
            select: { id: true }
        });

        return await db.book.update({
            where: { id: bId },
            data: {
                updated_at: new Date(),
                updated_by_user_id: uId,
                summary: dadosGemini.summary,
                description: dadosGemini.description,
                recommended_for: dadosGemini.recommended_for,
                keywords: dadosGemini.keywords,

                category: {
                    connect: { slug: dadosGemini.category }
                },

                tags: {
                    deleteMany: {},
                    create: tagsDoBanco.map((tag) => ({
                        tag_id: tag.id,
                        created_by_user_id: uId,
                        status: "A"
                    }))
                }
            }
        });
    } catch (err) {
        return parseError(err);
    }
}

async function updatePublisherFromGemini(publisherId, userId, dadosGemini) {
    try {
        const pId = BigInt(publisherId);
        const uId = BigInt(userId);

        return await db.publisher.update({
            where: { id: pId },
            data: {
                updated_at: new Date(),
                updated_by_user_id: uId,
                abbreviation: dadosGemini.abbreviation,
                description: dadosGemini.description
            }
        });
    } catch (err) {
        return parseError(err);
    }
}
