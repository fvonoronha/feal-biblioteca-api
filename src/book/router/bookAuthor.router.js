const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { hasRole } = require("../../utils/permission.service");
const { id } = require("../../utils/urlParams.service");

const { requireAuth } = require("../../auth/controller/auth.controller");
const { linkAuthorToBook, unlinkAuthorFromBook } = require("../controller/bookAuthor.controller");

// Alinhado com o resto do gerenciamento de acervo (book.router.js/author.router.js): ADMIN e
// LIBRARIAN, não só ADMIN.
const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.put(`/volume/${id("volumeId")}/author/${id("authorId")}/link`, init, requireAuth, canManageCatalog, linkAuthorToBook, end);

method.delete(
    `/volume/${id("volumeId")}/author/${id("authorId")}/unlink`,
    init,
    requireAuth,
    canManageCatalog,
    unlinkAuthorFromBook,
    end
);

module.exports = method;
