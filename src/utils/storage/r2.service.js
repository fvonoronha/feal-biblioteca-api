const { env } = require("process");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME, R2_PUBLIC_URL } = env;

// Mesmo padrão de fail-fast já usado para SMTP/Gemini: preferível o boot falhar alto e claro
// do que um upload quebrar silenciosamente só quando alguém tentar usá-lo em produção.
if (!R2_ACCOUNT_ID) throw new Error("R2_ACCOUNT_ID não configurado.");
if (!R2_ACCESS_KEY_ID) throw new Error("R2_ACCESS_KEY_ID não configurado.");
if (!R2_SECRET_ACCESS_KEY) throw new Error("R2_SECRET_ACCESS_KEY não configurado.");
if (!R2_BUCKET_NAME) throw new Error("R2_BUCKET_NAME não configurado.");
if (!R2_PUBLIC_URL) throw new Error("R2_PUBLIC_URL não configurado.");

// Aceita R2_PUBLIC_URL com ou sem esquema, mesma convenção usada para WEB_URL.
const PUBLIC_BASE_URL = (/^https?:\/\//i.test(R2_PUBLIC_URL) ? R2_PUBLIC_URL : `https://${R2_PUBLIC_URL}`).replace(
    /\/+$/,
    ""
);

// R2 fala o protocolo S3; basta apontar o SDK oficial da AWS para o endpoint da Cloudflare.
const client = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY
    }
});

module.exports = {
    // Envia `buffer` para `key` dentro do bucket configurado e devolve a URL pública final
    // (via domínio customizado do R2), pronta para ser salva em cover_url/avatar_url.
    async uploadObject(key, buffer, contentType) {
        await client.send(
            new PutObjectCommand({
                Bucket: R2_BUCKET_NAME,
                Key: key,
                Body: buffer,
                ContentType: contentType,
                CacheControl: "public, max-age=31536000, immutable"
            })
        );

        return `${PUBLIC_BASE_URL}/${key}`;
    }
};
