const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { id } = require("../../utils/urlParams.service");
const { hasRole } = require("../../utils/permission.service");

const { attachUserIfPresent, requireAuth } = require("../../auth/controller/auth.controller");
const {
    listTags,
    listTagsToExplore,
    listTagsAdmin,
    createTag,
    updateTag,
    deleteTag
} = require("../controller/tag.controller");

const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.post(`/tags`, init, attachUserIfPresent, listTags, end);

method.post(`/tags-to-explore`, init, attachUserIfPresent, listTagsToExplore, end);

method.post(`/tags/admin`, init, requireAuth, canManageCatalog, listTagsAdmin, end);

method.post(`/tag`, init, requireAuth, canManageCatalog, createTag, end);

method.put(`/tag/${id("tagId")}`, init, requireAuth, canManageCatalog, updateTag, end);

method.delete(`/tag/${id("tagId")}`, init, requireAuth, canManageCatalog, deleteTag, end);

module.exports = method;
