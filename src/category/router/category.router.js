const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { id } = require("../../utils/urlParams.service");
const { hasRole } = require("../../utils/permission.service");

const { attachUserIfPresent, requireAuth } = require("../../auth/controller/auth.controller");
const {
    listCategories,
    listCategoriesToExplore,
    listCategoriesAdmin,
    createCategory,
    updateCategory,
    deleteCategory
} = require("../controller/category.controller");

const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.post(`/categories`, init, attachUserIfPresent, listCategories, end);

method.post(`/categories-to-explore`, init, attachUserIfPresent, listCategoriesToExplore, end);

method.post(`/categories/admin`, init, requireAuth, canManageCatalog, listCategoriesAdmin, end);

method.post(`/category`, init, requireAuth, canManageCatalog, createCategory, end);

method.put(`/category/${id("categoryId")}`, init, requireAuth, canManageCatalog, updateCategory, end);

method.delete(`/category/${id("categoryId")}`, init, requireAuth, canManageCatalog, deleteCategory, end);

module.exports = method;
