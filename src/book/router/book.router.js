const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const {
    createBook,
    listBooks,
    getBook,
    listPublicBooks,
    listPublicPublishers
} = require("../controller/book.controller");

method.post(`/book`, init, isAuth, isAdmin, createBook, end);

method.post(`/books`, init, isAuth, isAdmin, listBooks, end);

method.get(`/book/${slug("bookSlug")}`, init, isAuth, isAdmin, getBook, end);

method.post(`/public/books`, init, isAuthOrNot, listPublicBooks, end);

method.post(`/public/publishers`, init, isAuthOrNot, listPublicPublishers, end);

module.exports = method;
