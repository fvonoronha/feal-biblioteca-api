const { z } = require("zod");

const createUserSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    display_name: z.string().optional(),
    // sex: z.enum(["M", "F", "N"]),
    phone: z.string().min(10, "O telefone informado não é válido").max(11, "O telefone informado não é válido"),
    login: z.string().min(4, "Login deve ter ao menos 4 caracteres"),
    email: z.string().email("Email é obrigatório"),
    password: z.string().min(8, "Senha deve ter ao menos 8 caracteres")
});

const createUserEmailSchema = z.object({
    email: z.string().email("Email é obrigatório")
});

const createUserLoginSchema = z.object({
    login: z.string().min(4, "Login deve ter ao menos 4 caracteres")
});

module.exports = {
    createUserSchema,
    createUserEmailSchema,
    createUserLoginSchema
};
