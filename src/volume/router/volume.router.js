const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { slug, id } = require("../../utils/urlParams.service");
const { hasRole } = require("../../utils/permission.service");

const { imageUpload } = require("../../utils/upload.middleware");

const { requireAuth, attachUserIfPresent } = require("../../auth/controller/auth.controller");
const {
    listVolumes,
    getVolume,
    listRelatedVolumes,
    createVolume,
    updateVolume,
    uploadCover,
    uploadBack,
    uploadAuxImage,
    deleteAuxImage,
    deleteVolume
} = require("../controller/volume.controller");

const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

method.post(`/volumes`, init, attachUserIfPresent, listVolumes, end);

method.get(`/volume/${slug("volumeSlug")}`, init, attachUserIfPresent, getVolume, end);

method.post(`/volume/${id("volumeId")}/related-volumes`, init, attachUserIfPresent, listRelatedVolumes, end);

method.post(`/volume`, init, requireAuth, canManageCatalog, createVolume, end);

method.put(`/volume/${id("volumeId")}`, init, requireAuth, canManageCatalog, updateVolume, end);

// multipart/form-data, campo "image" - capa do livro (redimensionada para 800x1100).
method.post(
    `/volume/${id("volumeId")}/cover`,
    init,
    requireAuth,
    canManageCatalog,
    imageUpload("image"),
    uploadCover,
    end
);

// multipart/form-data, campo "image" - verso do livro (mesma proporção 800x1100 da capa).
method.post(
    `/volume/${id("volumeId")}/back`,
    init,
    requireAuth,
    canManageCatalog,
    imageUpload("image"),
    uploadBack,
    end
);

// multipart/form-data, campo "image" - anexa uma imagem auxiliar ao array images_url.
method.post(
    `/volume/${id("volumeId")}/images`,
    init,
    requireAuth,
    canManageCatalog,
    imageUpload("image"),
    uploadAuxImage,
    end
);

// ?url=<url exata> - remove uma imagem específica do array images_url.
method.delete(`/volume/${id("volumeId")}/images`, init, requireAuth, canManageCatalog, deleteAuxImage, end);

method.delete(`/volume/${id("volumeId")}`, init, requireAuth, canManageCatalog, deleteVolume, end);

module.exports = method;
