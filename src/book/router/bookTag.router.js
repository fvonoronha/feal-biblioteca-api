const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { hasRole } = require("../../utils/permission.service");
const { id } = require("../../utils/urlParams.service");

const { requireAuth } = require("../../auth/controller/auth.controller");
const { linkTagToBook, unlinkTagFromBook } = require("../controller/bookTag.controller");

const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.put(`/book/${id("bookId")}/tag/${id("tagId")}/link`, init, requireAuth, canManageCatalog, linkTagToBook, end);

method.delete(`/book/${id("bookId")}/tag/${id("tagId")}/unlink`, init, requireAuth, canManageCatalog, unlinkTagFromBook, end);

module.exports = method;
