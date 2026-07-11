const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const { listCategories } = require("../controller/category.controller");

method.post(`/categories`, init, isAuthOrNot, listCategories, end);

method.post(`/categories-to-explore`, init, isAuthOrNot, listCategories, end);

module.exports = method;
