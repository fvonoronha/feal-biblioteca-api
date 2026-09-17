const { z } = require("zod");

const slugField = z
    .string()
    .min(3, "O slug deve ter pelo menos 3 caracteres.")
    .max(50, "O slug deve ter no máximo 50 caracteres.")
    .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
    .optional();

const createCategorySchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200),
    description: z.string().max(2000).optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    slug: slugField
});

const updateCategorySchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200).optional(),
    description: z.string().max(2000).optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    slug: slugField
});

module.exports = {
    createCategorySchema,
    updateCategorySchema
};
