const { env } = require("process");
const idService = require("./id.service");
const cmdService = require("./cmd.service");
const expressService = require("./express.service");
const feedbackService = require("./feedback.service");

const PRINT_REQUESTS = env.PRINT_REQUESTS === "true" ? true : false;

const CMD_STYLE = cmdService.getCMDStyleCodes();

module.exports = {
    // Padroniza a resposta de erro de um controller a partir do retorno de um service
    // (que já passou por db.service.js#parseError). `result.httpStatus` (quando presente)
    // escolhe o FEEDBACK certo (404/409/500/...); na ausência dele cai em BAD_REQUEST,
    // que é o caso de erro de validação de schema (entrada do cliente é sempre 400).
    respondError(req, res, bodyKey, result) {
        const feedbacks = feedbackService.getFeedbacks();
        req.response.meta.feedback = feedbacks[result?.httpStatus] || feedbacks.BAD_REQUEST;
        req.response.body[bodyKey] = { error: result?.error || result };
        return module.exports.end(req, res);
    },

    async init(req, res, next) {
        const requestId = await idService.getId(10);
        const method = expressService.getHttpMethodList()[req.method];
        if (PRINT_REQUESTS)
            console.log(
                `[${requestId}] received as [${method.color}${method?.name}${method.color_after}] ${req.originalUrl}`
            );

        const defaultObj = {
            header: {},
            user: {},
            meta: {
                feedback: feedbackService.getFeedbacks().OK,
                id: requestId,
                timeStamp: new Date(),
                timeSpent: process.hrtime()
            },
            params: {},
            body: {}
        };
        req.response = defaultObj;
        return next();
    },

    async route404(req, res, next) {
        req.response.meta.feedback.http = 404;
        req.response.body = undefined;
        return next();
    },

    async end(req, res) {
        const initialTime = process.hrtime(req.response.meta.timeSpent);
        req.response.meta.timeSpent = Math.round((initialTime[0] + initialTime[1] / 1e9 + Number.EPSILON) * 1e3) / 1e3;

        res.status(parseInt(req.response.meta.feedback.http));
        res.json({
            header: {
                id: req.response.meta.id,
                http: parseInt(req.response.meta.feedback.http),
                error: req.response.meta.error
                    ? `${req.response.meta.error.name ? `${req.response.meta.error.name}: ` : ``}${req.response.meta.error.message}`
                    : undefined,
                ...req.response.header
            },
            body: req.response.body
        });

        const method = expressService.getHttpMethodList()[req.method];
        if (PRINT_REQUESTS)
            console.log(
                `[${req.response.meta.id}] received as [${method.color}${method?.name}${method.color_after}] ${req.originalUrl}`
            );
        if (PRINT_REQUESTS)
            console.log(
                `             ╚═ after [${req.response.meta.timeSpent > 2 ? CMD_STYLE.BRIGHT_RED : req.response.meta.timeSpent > 1 ? CMD_STYLE.BRIGHT_YELLOW : CMD_STYLE.BRIGHT_GREEN}${req.response.meta.timeSpent}s${CMD_STYLE.DEFAULT}] returned with status ${
                    req.response.meta.feedback.http >= 500
                        ? CMD_STYLE.BRIGHT_RED
                        : req.response.meta.feedback.http >= 400
                          ? CMD_STYLE.BRIGHT_YELLOW
                          : CMD_STYLE.BRIGHT_GREEN
                }${req.response.meta.feedback.http}${CMD_STYLE.DEFAULT}`
            );
    }
};
