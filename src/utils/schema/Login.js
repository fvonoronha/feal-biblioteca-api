const { z } = require("zod");

const loginSchema = z.object({
    login: z.string().min(4, "Login deve ter ao menos 4 caracteres").max(100),
    password: z.string().min(8, "Senha deve ter ao menos 8 caracteres").max(200),
    keep: z.boolean().optional()
});

module.exports = {
    loginSchema
};
