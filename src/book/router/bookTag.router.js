const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { id } = require("../../utils/urlParams.service");

const { isAuth } = require("../../auth/controller/auth.controller");
const { linkTagToBook, unlinkTagFromBook } = require("../controller/bookTag.controller");

method.put(`/book/${id("bookId")}/tag/${id("tagId")}/link`, init, isAuth, isAdmin, linkTagToBook, end);

method.delete(`/book/${id("bookId")}/tag/${id("tagId")}/unlink`, init, isAuth, isAdmin, unlinkTagFromBook, end);

module.exports = method;
