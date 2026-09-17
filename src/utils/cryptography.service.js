const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { env } = require("process");

const ALGORITHM = "aes-256-cbc";
const SALT_ROUNDS = parseInt(env.CRYPTOGRAPHY_ROUNDS_OF_SALT, 10);

// Falha rápido no boot em vez de deixar `NaN`/"Invalid key length" estourarem
// só quando a primeira requisição chegar a usar essas funções.
if (Number.isNaN(SALT_ROUNDS) || SALT_ROUNDS < 4) {
    throw new Error("CRYPTOGRAPHY_ROUNDS_OF_SALT precisa ser um número inteiro (recomendado >= 10).");
}
if (!env.CRYPTOGRAPHY_SECRET) {
    throw new Error("CRYPTOGRAPHY_SECRET não configurado.");
}

// AES-256 exige uma chave de exatamente 32 bytes. Em vez de exigir que CRYPTOGRAPHY_SECRET
// tenha esse tamanho exato (frágil de configurar e de trocar), deriva uma chave de 32 bytes
// a partir do segredo via SHA-256, aceitando um segredo de qualquer tamanho.
const KEY = crypto.createHash("sha256").update(env.CRYPTOGRAPHY_SECRET, "utf8").digest();

module.exports = {
    async encrypt(plain) {
        return await bcrypt.hash(plain, SALT_ROUNDS);
    },

    async compare(plain, encrypted) {
        if (!plain || !encrypted) return false;
        return await bcrypt.compare(plain, encrypted);
    },

    // Gera um IV novo a cada chamada (nunca reaproveitado entre criptografias),
    // como exige o uso seguro de AES-CBC. O IV vai prefixado no próprio texto retornado.
    async encrypt2(plain) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
        const encrypted = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
        return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
    },

    async decrypt2(encryptedText) {
        const [ivHex, encryptedHex] = encryptedText.split(":");
        const iv = Buffer.from(ivHex, "hex");
        const encrypted = Buffer.from(encryptedHex, "hex");
        const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
        const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
        return decrypted.toString("utf8");
    }
};
