const { z } = require("zod");

const slugField = z
    .string()
    .min(3, "O slug deve ter pelo menos 3 caracteres.")
    .max(50, "O slug deve ter no máximo 50 caracteres.")
    .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
    .optional();

const dateField = z.coerce.date().optional().nullable();

const createAuthorSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200),
    description: z.string().max(4000).optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    slug: slugField,
    avatar_url: z.string().max(500).optional().nullable(),
    is_spirit: z.boolean().default(false),
    birth_date: dateField,
    death_date: dateField
});

const updateAuthorSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório").max(200).optional(),
    description: z.string().max(4000).optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    slug: slugField,
    // Aceita `null` explicitamente pra permitir limpar a foto do autor (ver
    // AuthorImageManager/onClearImage no front) - o mesmo padrão de cover_url/back_url em Volume.
    avatar_url: z.string().max(500).optional().nullable(),
    is_spirit: z.boolean().optional(),
    birth_date: dateField,
    death_date: dateField
});

module.exports = {
    createAuthorSchema,
    updateAuthorSchema
};
