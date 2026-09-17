const { z } = require("zod");

const requestPasswordResetSchema = z.object({
    login: z.string().min(4, "Login deve ter ao menos 4 caracteres").max(100)
});

const validateResetTokenSchema = z.object({
    token: z.string().min(1, "Token é obrigatório").max(200)
});

const resetPasswordSchema = z.object({
    token: z.string().min(1, "Token é obrigatório").max(200),
    password: z.string().min(8, "Senha deve ter ao menos 8 caracteres").max(200)
});

module.exports = {
    requestPasswordResetSchema,
    validateResetTokenSchema,
    resetPasswordSchema
};
