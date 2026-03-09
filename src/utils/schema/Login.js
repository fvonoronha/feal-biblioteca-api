const { z } = require("zod");

const loginSchema = z.object({
    login: z.string().min(4, "Login deve ter ao menos 4 caracteres"),
    password: z.string().min(8, "Senha deve ter ao menos 8 caracteres"),
    keep: z.boolean().optional()
});

module.exports = {
    loginSchema
};
