const method = require("express").Router();
const { init, end } = require("../../utils/request.service");
const { hasRole } = require("../../utils/permission.service");

const { requireAuth } = require("../../auth/controller/auth.controller");
const { proxyImageFromUrl } = require("../controller/image.controller");

const canManageCatalog = hasRole("ADMIN", "LIBRARIAN");

// Usado pela tela de gerenciamento de imagens de volume (capa/verso/imagens auxiliares) para
// baixar, no servidor, uma URL colada pelo usuário antes do recorte no front - ver
// imageFetch.service.js para o porquê (evitar o bloqueio de CORS do <canvas>).
method.post(`/image/fetch-from-url`, init, requireAuth, canManageCatalog, proxyImageFromUrl, end);

module.exports = method;
