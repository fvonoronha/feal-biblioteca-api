const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { isAdmin } = require("../../utils/permission.service");
const { slug, id } = require("../../utils/urlParams.service");

const { isAuth, isAuthOrNot } = require("../../auth/controller/auth.controller");
const { listVolumes, getVolume, listRelatedVolumes } = require("../controller/volume.controller");

method.post(`/volumes`, init, isAuthOrNot, listVolumes, end);

method.get(`/volume/${slug("volumeSlug")}`, init, isAuthOrNot, getVolume, end);

method.post(`/volume/${id("volumeId")}/related-volumes`, init, isAuthOrNot, listRelatedVolumes, end);

module.exports = method;
