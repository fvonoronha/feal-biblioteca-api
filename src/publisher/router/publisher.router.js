const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const { listPublishers } = require("../controller/publisher.controller");

method.post(`/publishers`, init, isAuthOrNot, listPublishers, end);

method.post(`/publishers-to-explore`, init, isAuthOrNot, listPublishers, end);

module.exports = method;
