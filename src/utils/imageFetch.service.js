const MAX_DOWNLOAD_SIZE_BYTES = 15 * 1024 * 1024;
const FETCH_TIMEOUT_MS = 15000;

// Bloqueia hosts internos/privados óbvios - este endpoint é só para ADMIN/LIBRARIAN, mas
// ainda assim faz uma requisição HTTP a partir do servidor para uma URL escolhida pelo
// cliente, então vale a proteção básica contra SSRF (ex.: apontar para o metadata service
// de um provedor de nuvem ou para a rede interna).
const BLOCKED_HOSTNAME_PATTERNS = [
    /^localhost$/i,
    /^127\./,
    /^0\.0\.0\.0$/,
    /^\[?::1\]?$/,
    /^169\.254\./,
    /^10\./,
    /^172\.(1[6-9]|2\d|3[01])\./,
    /^192\.168\./
];

module.exports = {
    // Baixa a imagem no SERVIDOR (nunca no navegador) e devolve seus bytes - assim o front
    // consegue recortá-la num <canvas> sem esbarrar em CORS, já que a URL colada pelo usuário
    // quase nunca pertence a um domínio que libera Access-Control-Allow-Origin para o nosso site.
    async fetchImageFromUrl(url) {
        let parsed;
        try {
            parsed = new URL(url);
        } catch {
            return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "URL inválida." }] };
        }

        if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
            return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "A URL precisa usar http ou https." }] };
        }

        if (BLOCKED_HOSTNAME_PATTERNS.some((pattern) => pattern.test(parsed.hostname))) {
            return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "Este endereço não é permitido." }] };
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

        try {
            const response = await fetch(parsed, { signal: controller.signal, redirect: "follow" });

            if (!response.ok) {
                return {
                    httpStatus: "BAD_REQUEST",
                    error: [{ field: "url", message: `Não foi possível baixar a imagem (HTTP ${response.status}).` }]
                };
            }

            const contentType = response.headers.get("content-type") || "";
            if (!contentType.startsWith("image/")) {
                return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "O endereço informado não aponta para uma imagem." }] };
            }

            const contentLength = Number(response.headers.get("content-length") || 0);
            if (contentLength > MAX_DOWNLOAD_SIZE_BYTES) {
                return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "Imagem muito grande (máximo 15MB)." }] };
            }

            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            if (buffer.length > MAX_DOWNLOAD_SIZE_BYTES) {
                return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "Imagem muito grande (máximo 15MB)." }] };
            }

            return { buffer, contentType };
        } catch (err) {
            if (err.name === "AbortError") {
                return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "Tempo esgotado ao baixar a imagem." }] };
            }
            return { httpStatus: "BAD_REQUEST", error: [{ field: "url", message: "Não foi possível baixar a imagem informada." }] };
        } finally {
            clearTimeout(timeout);
        }
    }
};
