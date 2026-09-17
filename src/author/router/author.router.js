const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { id, slug } = require("../../utils/urlParams.service");
const { hasRole } = require("../../utils/permission.service");

const { imageUpload } = require("../../utils/upload.middleware");

const { requireAuth, attachUserIfPresent } = require("../../auth/controller/auth.controller");
const {
    listAuthors,
    listAuthorsToExplore,
    listAuthorsAdmin,
    getAuthor,
    createAuthor,
    updateAuthor,
    uploadAvatar,
    deleteAuthor
} = require("../controller/author.controller");

// Mesmo nível de acesso usado para gerenciar empréstimos - cadastro de autores é trabalho de
// rotina de bibliotecário, não uma ação restrita só a ADMIN.
const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.post(`/authors`, init, attachUserIfPresent, listAuthors, end);
method.post(`/authors-to-explore`, init, attachUserIfPresent, listAuthorsToExplore, end);

method.post(`/authors/admin`, init, requireAuth, canManageCatalog, listAuthorsAdmin, end);
method.get(`/author/${slug("authorSlug")}`, init, attachUserIfPresent, getAuthor, end);
method.post(`/author`, init, requireAuth, canManageCatalog, createAuthor, end);
method.put(`/author/${id("authorId")}`, init, requireAuth, canManageCatalog, updateAuthor, end);

// multipart/form-data, campo "image" - foto do autor (redimensionada para 800x800).
method.post(
    `/author/${id("authorId")}/avatar`,
    init,
    requireAuth,
    canManageCatalog,
    imageUpload("image"),
    uploadAvatar,
    end
);

method.delete(`/author/${id("authorId")}`, init, requireAuth, canManageCatalog, deleteAuthor, end);

module.exports = method;
