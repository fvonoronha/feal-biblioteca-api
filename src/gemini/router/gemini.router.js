const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug, id } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const { setupVolume, setupBook, setupBooks, setupPublishers } = require("../controller/gemini.controller");
const { getVolume } = require("../../volume/controller/volume.controller");

method.post(`/gemini/volume/${slug("volumeSlug")}/setup`, init, isAuthOrNot, getVolume, setupVolume, end);

method.post(`/gemini/book/${slug("bookSlug")}/enhance`, init, isAuthOrNot, setupBook, end);

method.post(`/gemini/books/enhance/${id("quantity")}`, init, isAuthOrNot, setupBooks, end);

method.post(`/gemini/publishers/enhance/${id("quantity")}`, init, isAuthOrNot, setupPublishers, end);

module.exports = method;
