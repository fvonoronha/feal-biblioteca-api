const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const { listPublicCategories } = require("../controller/category.controller");

method.post(`/public/categories`, init, isAuthOrNot, listPublicCategories, end);

module.exports = method;
