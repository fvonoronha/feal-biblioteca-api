const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug, id } = require("../../utils/urlParams.service");

const { requireAuth } = require("../../auth/controller/auth.controller");
const {
    suggestBookEnhancement,
    suggestAuthorEnhancement,
    setupVolume,
    setupBook,
    setupBooks,
    setupPublishers
} = require("../controller/gemini.controller");
const { getVolume } = require("../../volume/controller/volume.controller");

// Estas rotas disparam chamadas pagas a uma API externa (Gemini) e escrevem em book/publisher,
// por isso exigem sessão de ADMIN - nunca ficam abertas como estavam antes.
method.post(`/gemini/volume/${slug("volumeSlug")}/setup`, init, requireAuth, isAdmin, getVolume, setupVolume, end);

// Só consulta e devolve a sugestão (não grava nada) - usado pela tela de revisão no front,
// que deixa o operador escolher o que aceitar antes de qualquer PUT em /book.
method.post(`/gemini/book/${slug("bookSlug")}/suggest`, init, requireAuth, isAdmin, suggestBookEnhancement, end);

// Mesmo espírito da rota de sugestão de livro: só consulta e devolve, sem gravar nada.
method.post(`/gemini/author/${slug("authorSlug")}/suggest`, init, requireAuth, isAdmin, suggestAuthorEnhancement, end);

method.post(`/gemini/book/${slug("bookSlug")}/enhance`, init, requireAuth, isAdmin, setupBook, end);

method.post(`/gemini/books/enhance/${id("quantity")}`, init, requireAuth, isAdmin, setupBooks, end);

method.post(`/gemini/publishers/enhance/${id("quantity")}`, init, requireAuth, isAdmin, setupPublishers, end);

module.exports = method;
