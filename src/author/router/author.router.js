const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuthOrNot, isAuth } = require("../../auth/controller/auth.controller");
const { listAuthors, listAuthorsToExplore } = require("../controller/author.controller");

method.post(`/authors`, init, isAuthOrNot, listAuthors, end);

method.post(`/authors-to-explore`, init, isAuthOrNot, listAuthorsToExplore, end);

module.exports = method;
