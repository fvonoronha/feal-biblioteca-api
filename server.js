require("json-bigint-patch");
require("dotenv").config();

const { env } = process;
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const express = require("express");

const cmdService = require("./src/utils/cmd.service");
const expressService = require("./src/utils/express.service");
const feedbackService = require("./src/utils/feedback.service");
const { end, init, route404 } = require("./src/utils/request.service");
const { disconnect } = require("./src/utils/db.service");

const CORS_ORIGINS = (env.CORS_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const corsOptions =
    CORS_ORIGINS.length > 0
        ? { origin: CORS_ORIGINS }
        : env.NODE_ENV === "production"
          ? { origin: false } // produção sem CORS_ORIGINS configurado: bloqueia por padrão em vez de liberar geral
          : {}; // fora de produção, sem allow-list configurada: mantém o comportamento permissivo de sempre

const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 600,
    standardHeaders: true,
    legacyHeaders: false
});

const server = express();
server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json({ limit: env.JSON_BODY_LIMIT || "1mb" }));
server.use(globalLimiter);

const httpServer = http.createServer(server);

expressService.importRoutes(server, "./src");
server.use(init, route404, end);

// Rede de segurança final: qualquer erro síncrono ou promise rejeitada que escape de um
// controller (Express 5 encaminha rejeições de handlers async para cá automaticamente)
// cai aqui em vez de travar a requisição ou vazar o handler de erro padrão do Express.
server.use((err, req, res, next) => {
    console.error("[server] Erro não tratado:", err);

    if (res.headersSent) return next(err);

    if (!req.response) {
        // Erro ocorrido antes do middleware `init` rodar (ex.: JSON malformado no corpo,
        // rejeitado pelo body-parser) - não há req.response para usar o envelope padrão,
        // mas ainda respeita o status HTTP que o próprio erro já carrega (400 nesse caso),
        // em vez de responder sempre 500 para qualquer entrada inválida do cliente.
        const status = err.statusCode || err.status || 500;
        return res.status(status).json({ header: { error: err.expose ? err.message : "Internal Server Error" }, body: undefined });
    }

    req.response.meta.feedback = feedbackService.getFeedbacks().ERROR;
    req.response.meta.error = err;
    return end(req, res);
});

httpServer.listen(env.PORT, () => {
    const CMD_STYLE = cmdService.getCMDStyleCodes();
    console.log("");
    expressService.printServerUpStatus();
    console.log(
        `\t[NodeJs] ${CMD_STYLE.UNDERLINE}${CMD_STYLE.BOLD}listening on port ${CMD_STYLE.GREEN}${env.PORT}${CMD_STYLE.DEFAULT}\nRequests: `
    );

    if (env.ENABLE_CRON_JOBS !== "false") {
        const cronService = require("./src/utils/cron.service");
        cronService.setupCronJobs();
    }
});

let shuttingDown = false;
async function shutdown(signal) {
    if (shuttingDown) return;
    shuttingDown = true;
    console.log(`\n[server] ${signal} recebido, encerrando graciosamente...`);

    const forceExitTimer = setTimeout(() => {
        console.error("[server] Timeout no encerramento gracioso, forçando saída.");
        process.exit(1);
    }, 10000);
    forceExitTimer.unref();

    httpServer.close(async () => {
        await disconnect();
        clearTimeout(forceExitTimer);
        process.exit(0);
    });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("unhandledRejection", (reason) => {
    console.error("[server] Unhandled promise rejection:", reason);
});

process.on("uncaughtException", (error) => {
    console.error("[server] Uncaught exception:", error);
    process.exit(1);
});
