const { respondError } = require("../../utils/request.service");
const FEEDBACK = require("../../utils/feedback.service").getFeedbacks();
const { fetchImageFromUrl } = require("../../utils/imageFetch.service");

module.exports = {
    // Baixa uma URL de imagem colada pelo usuário no servidor e devolve os bytes como
    // data URL - usado pela tela de gerenciamento de imagens de volume (capa/verso/imagens
    // auxiliares) antes do recorte no front, que de outra forma esbarraria em CORS ao tentar
    // ler pixels de uma imagem de outro domínio direto no <canvas>.
    async proxyImageFromUrl(req, res, next) {
        const result = await fetchImageFromUrl(req.body.url);

        if (result.error) {
            return respondError(req, res, "image", result);
        }

        req.response.meta.feedback = FEEDBACK.OK;
        req.response.body.image = {
            dataUrl: `data:${result.contentType};base64,${result.buffer.toString("base64")}`
        };
        return next();
    }
};
