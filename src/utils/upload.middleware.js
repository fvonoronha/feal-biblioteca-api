const multer = require("multer");
const feedbackService = require("./feedback.service");
const { end } = require("./request.service");

const MAX_UPLOAD_SIZE_BYTES = 10 * 1024 * 1024; // 10MB - arquivo original, antes de comprimir

const uploader = multer({
    storage: multer.memoryStorage(), // processa em memória, nunca grava no disco do container
    limits: { fileSize: MAX_UPLOAD_SIZE_BYTES, files: 1 },
    fileFilter(req, file, cb) {
        if (!file.mimetype.startsWith("image/")) {
            return cb(new Error("O arquivo enviado precisa ser uma imagem."));
        }
        cb(null, true);
    }
});

module.exports = {
    // Middleware para rotas que recebem exatamente um arquivo de imagem via multipart/form-data
    // no campo `fieldName`. Erros do multer (arquivo grande demais, tipo inválido, campo
    // ausente) são convertidos para o envelope de resposta padrão da API (400) em vez de
    // vazarem como um 500 genérico pelo middleware de erro global.
    imageUpload(fieldName = "image") {
        const middleware = uploader.single(fieldName);

        return (req, res, next) => {
            middleware(req, res, (err) => {
                if (err) {
                    req.response.meta.feedback = feedbackService.getFeedbacks().BAD_REQUEST;
                    req.response.body.image = { error: [{ field: fieldName, message: err.message }] };
                    return end(req, res);
                }

                if (!req.file) {
                    req.response.meta.feedback = feedbackService.getFeedbacks().BAD_REQUEST;
                    req.response.body.image = {
                        error: [{ field: fieldName, message: "Nenhum arquivo enviado." }]
                    };
                    return end(req, res);
                }

                return next();
            });
        };
    }
};
