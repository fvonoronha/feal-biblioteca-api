const { z } = require("zod");

const createTagSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    description: z.string().optional(),
    slug: z
        .string()
        .min(3, "O slug deve ter pelo menos 3 caracteres.")
        .max(50, "O slug deve ter no máximo 50 caracteres.")
        .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
        .optional()
});

const updateTagSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").optional(),
    description: z.string().optional(),
    slug: z
        .string()
        .min(3, "O slug deve ter pelo menos 3 caracteres.")
        .max(50, "O slug deve ter no máximo 50 caracteres.")
        .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
        .optional()
});

module.exports = {
    createTagSchema,
    updateTagSchema
};
