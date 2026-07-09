const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const { createTag, listPublicTags, getTag, listTags, explorePublicTags } = require("../controller/tag.controller");

method.post(`/tag`, init, isAuth, isAdmin, createTag, end);

method.post(`/tags`, init, isAuth, isAdmin, listTags, end);

method.get(`/tag/${slug("tagSlug")}`, init, isAuth, isAdmin, getTag, end);

method.post(`/public/tags`, init, isAuthOrNot, listPublicTags, end);

method.post(`/public/explore-tags`, init, isAuthOrNot, explorePublicTags, end);

module.exports = method;
