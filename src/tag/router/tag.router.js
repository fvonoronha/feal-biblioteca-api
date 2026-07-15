const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const { listTags } = require("../controller/tag.controller");

method.post(`/tags`, init, isAuthOrNot, listTags, end);

method.post(`/tags-to-explore`, init, isAuthOrNot, listTags, end);

module.exports = method;
