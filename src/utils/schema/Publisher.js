const { z } = require("zod");

const slugField = z
    .string()
    .min(3, "O slug deve ter pelo menos 3 caracteres.")
    .max(50, "O slug deve ter no máximo 50 caracteres.")
    .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
    .optional();

const createPublisherSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200),
    abbreviation: z.string().max(50).optional(),
    description: z.string().max(2000).optional(),
    avatar_url: z.string().max(500).optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    slug: slugField
});

const updatePublisherSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200).optional(),
    abbreviation: z.string().max(50).optional(),
    description: z.string().max(2000).optional(),
    avatar_url: z.string().max(500).optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    slug: slugField
});

module.exports = {
    createPublisherSchema,
    updatePublisherSchema
};
