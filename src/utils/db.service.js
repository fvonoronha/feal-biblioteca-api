const { env } = require("process");
const { PrismaClient, Prisma } = require("../../prisma/generated/client");

const PRISMA_LOG = env.PRISMA_LOG === "true";

// Um único PrismaClient para todo o processo. Todo módulo que precisa do banco
// importa este arquivo (o cache de módulos do Node garante a instância única),
// então nunca crie "new PrismaClient()" em nenhum outro lugar do código.
const prisma = new PrismaClient({
    log: PRISMA_LOG
        ? [
              { emit: "event", level: "query" },
              { emit: "stdout", level: "warn" },
              { emit: "stdout", level: "error" }
          ]
        : [{ emit: "stdout", level: "error" }]
});

if (PRISMA_LOG) {
    prisma.$on("query", (e) => {
        console.log(`[prisma] ${e.query} -- params: ${e.params} -- ${e.duration}ms`);
    });
}

let disconnected = false;
async function disconnect() {
    if (disconnected) return;
    disconnected = true;
    await prisma.$disconnect();
}

// Helper fino para os poucos fluxos que precisam de atomicidade real
// (ex.: criar Book + Volume juntos, devolver um empréstimo verificando o estado atual antes).
async function withTransaction(fn) {
    return prisma.$transaction(fn);
}

const KNOWN_ERROR_CODES = {
    P2000: "value_too_long",
    P2002: "unique_violation",
    P2003: "invalid_relation",
    P2011: "null_constraint_violation",
    P2024: "pool_timeout",
    P2025: "not_found",
    P2034: "write_conflict"
};

// Traduz um erro do Prisma/Postgres (ou um erro "fake" no formato {code, message, meta}
// lançado manualmente pelos services para sinalizar 404/409) em uma resposta segura para o cliente.
// Nunca repassa error.message cru para códigos desconhecidos - loga no servidor e devolve
// uma mensagem genérica, para não vazar detalhes internos de implementação/SQL.
function formatDbError(error) {
    if (error && error.code === "P_UNAUTHORIZED") {
        return {
            httpStatus: "UNAUTHORIZED",
            error: [{ field: "auth", message: error.message || "Não autorizado" }]
        };
    }

    if (error && error.code && Object.prototype.hasOwnProperty.call(KNOWN_ERROR_CODES, error.code)) {
        const reason = KNOWN_ERROR_CODES[error.code];

        switch (error.code) {
            case "P2002":
                return {
                    httpStatus: "CONFLICT",
                    error: [
                        {
                            field: error.meta?.target?.join?.(", ") || error.meta?.target?.[0] || "campo",
                            message: "Já está em uso",
                            reason
                        }
                    ]
                };

            case "P2003":
                return {
                    httpStatus: "BAD_REQUEST",
                    error: [
                        {
                            field: error.meta?.field_name || "campo_relacionado",
                            message: "Relação inválida",
                            reason
                        }
                    ]
                };

            case "P2011":
                return {
                    httpStatus: "BAD_REQUEST",
                    error: [
                        {
                            field: error.meta?.target || "campo",
                            message: "Campo obrigatório não informado",
                            reason
                        }
                    ]
                };

            case "P2000":
                return {
                    httpStatus: "BAD_REQUEST",
                    error: [
                        {
                            field: error.meta?.column_name || "campo",
                            message: "Valor excede o tamanho permitido",
                            reason
                        }
                    ]
                };

            case "P2025":
                return {
                    httpStatus: "NOT_FOUND",
                    error: [
                        {
                            field: error.meta?.field || "id",
                            message: error.message && typeof error.message === "string" ? error.message : "Não encontrado",
                            reason
                        }
                    ]
                };

            case "P2024":
                console.error("[db] Timeout ao obter conexão do pool:", error);
                return {
                    httpStatus: "ERROR",
                    error: [{ field: "error", message: "Serviço temporariamente indisponível", reason }]
                };

            case "P2034":
                return {
                    httpStatus: "CONFLICT",
                    error: [{ field: "error", message: "Conflito de concorrência, tente novamente", reason }]
                };
        }
    }

    // Um erro "fake" lançado manualmente pelos services no formato {code, message}
    // (usado para sinalizar 404 sem precisar de uma query real) ainda cai aqui pois seu
    // "code" (ex: "P2025") já foi tratado acima quando presente.
    if (error && error.code === "P2025") {
        return {
            httpStatus: "NOT_FOUND",
            error: [{ field: "id", message: error.message || "Não encontrado" }]
        };
    }

    // Erro não mapeado: loga o erro real no servidor, mas nunca expõe error.message cru
    // ao cliente - poderia vazar detalhes de SQL/implementação interna.
    console.error("[db] Erro não mapeado:", error);
    return {
        httpStatus: "ERROR",
        error: [{ field: "error", message: "Algo deu errado, tente novamente mais tarde" }]
    };
}

// Lança um erro no formato que formatDbError já sabe traduzir para 404,
// para os muitos pontos do código que hoje faziam `throw { code: "P2025", message: "..." }` à mão.
function notFoundError(message = "Não encontrado") {
    return { code: "P2025", message };
}

// Mesma ideia, mas para falhas de autenticação/sessão (login inválido, token expirado) -
// que semanticamente são 401, não 404.
function unauthorizedError(message = "Não autorizado") {
    return { code: "P_UNAUTHORIZED", message };
}

module.exports = {
    Prisma,
    db: prisma,
    parseError: formatDbError,
    notFoundError,
    unauthorizedError,
    withTransaction,
    disconnect
};
