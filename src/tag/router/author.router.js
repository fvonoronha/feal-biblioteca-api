const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuth } = require("../../auth/controller/auth.controller");
const { createTag, listPublicTags, getTag, listTags } = require("../controller/tag.controller");

method.post(`/tag`, init, isAuth, isAdmin, createTag, end);

method.post(`/tags`, init, isAuth, isAdmin, listTags, end);

method.get(`/tag/${slug("tagSlug")}`, init, isAuth, isAdmin, getTag, end);

method.post(`/public/tags`, init, isAuth, listPublicTags, end);

module.exports = method;
