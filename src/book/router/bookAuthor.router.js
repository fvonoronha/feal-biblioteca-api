const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { id } = require("../../utils/urlParams.service");

const { isAuth } = require("../../auth/controller/auth.controller");
const { linkAuthorToBook, unlinkAuthorFromBook } = require("../controller/bookAuthor.controller");

method.put(`/book/${id("bookId")}/author/${id("authorId")}/link`, init, isAuth, isAdmin, linkAuthorToBook, end);

method.delete(
    `/book/${id("bookId")}/author/${id("authorId")}/unlink`,
    init,
    isAuth,
    isAdmin,
    unlinkAuthorFromBook,
    end
);

module.exports = method;
