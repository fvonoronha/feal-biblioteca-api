const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { hasRole } = require("../../utils/permission.service");
const { slug, id } = require("../../utils/urlParams.service");

const { requireAuth, attachUserIfPresent } = require("../../auth/controller/auth.controller");
const {
    createBook,
    updateBook,
    setBookTags,
    deleteBook,
    listBooks,
    getBook,
    listPublicBooks,
    getPublicBook,
    listRelatedBooks,
    listPublicPublishers,
    searchBooks
} = require("../controller/book.controller");

// Mesmo nível de acesso usado para empréstimos/autores - gerenciar o acervo é trabalho de
// rotina de bibliotecário.
const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.post(`/book`, init, requireAuth, canManageCatalog, createBook, end);

method.put(`/book/${id("bookId")}`, init, requireAuth, canManageCatalog, updateBook, end);

method.put(`/book/${id("bookId")}/tags`, init, requireAuth, canManageCatalog, setBookTags, end);

method.delete(`/book/${id("bookId")}`, init, requireAuth, canManageCatalog, deleteBook, end);

method.post(`/books`, init, requireAuth, canManageCatalog, listBooks, end);

method.get(`/book/${slug("bookSlug")}`, init, requireAuth, canManageCatalog, getBook, end);

method.post(`/public/books`, init, attachUserIfPresent, listPublicBooks, end);

method.post(`/public/search-books`, init, attachUserIfPresent, searchBooks, end);

method.get(`/public/book/${slug("bookSlug")}`, init, attachUserIfPresent, getPublicBook, end);

method.post(`/public/book/${id("bookId")}/related-books`, init, attachUserIfPresent, listRelatedBooks, end);

method.post(`/public/publishers`, init, attachUserIfPresent, listPublicPublishers, end);

module.exports = method;
