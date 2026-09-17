const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { id } = require("../../utils/urlParams.service");
const { hasRole } = require("../../utils/permission.service");

const { attachUserIfPresent, requireAuth } = require("../../auth/controller/auth.controller");
const {
    listPublishers,
    listPublishersToExplore,
    listPublishersAdmin,
    createPublisher,
    updatePublisher,
    deletePublisher
} = require("../controller/publisher.controller");

const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.post(`/publishers`, init, attachUserIfPresent, listPublishers, end);

method.post(`/publishers-to-explore`, init, attachUserIfPresent, listPublishersToExplore, end);

method.post(`/publishers/admin`, init, requireAuth, canManageCatalog, listPublishersAdmin, end);

method.post(`/publisher`, init, requireAuth, canManageCatalog, createPublisher, end);

method.put(`/publisher/${id("publisherId")}`, init, requireAuth, canManageCatalog, updatePublisher, end);

method.delete(`/publisher/${id("publisherId")}`, init, requireAuth, canManageCatalog, deletePublisher, end);

module.exports = method;
