const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuthOrNot, isAuth } = require("../../auth/controller/auth.controller");
const {
    createAuthor,
    listAuthors,
    getAuthor,
    listPublicAuthors,
    explorePublicAuthors
} = require("../controller/author.controller");

method.post(`/author`, init, isAuth, isAdmin, createAuthor, end);

method.post(`/authors`, init, isAuth, isAdmin, listAuthors, end);

method.get(`/author/${slug("authorSlug")}`, init, isAuth, isAdmin, getAuthor, end);

method.post(`/public/authors`, init, isAuthOrNot, listPublicAuthors, end);

method.post(`/public/explore-authors`, init, isAuthOrNot, explorePublicAuthors, end);

module.exports = method;
