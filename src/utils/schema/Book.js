const { z } = require("zod");

const createBookSchema = z.object({
    slug: z
        .string()
        .min(3, "O slug deve ter pelo menos 3 caracteres.")
        .max(50, "O slug deve ter no máximo 50 caracteres.")
        .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
        .optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    title: z.string().min(1, "Título é obrigatório"),
    subtitle: z.string().optional(),
    publisher: z.string().optional(),
    year: z.number().optional(),
    edition: z.string().optional(),
    isbn: z.string().optional(),
    pages: z.number().optional(),
    summary: z.string().optional(),
    pdf_url: z.string().optional(),
    cover_url: z.string().optional(),
    images_url: z.array(z.string()).optional(),
    label: z.string().optional(),
    shelf: z.string().optional(),
    description: z.string().optional()
});

const updateBookSchema = z.object({
    slug: z
        .string()
        .min(3, "O slug deve ter pelo menos 3 caracteres.")
        .max(50, "O slug deve ter no máximo 50 caracteres.")
        .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
        .optional(),
    title: z.string().min(1, "Título é obrigatório"),
    subtitle: z.string().optional(),
    publisher: z.string().optional(),
    year: z.number().optional(),
    edition: z.string().optional(),
    isbn: z.string().optional(),
    pages: z.number().optional(),
    summary: z.string().optional(),
    pdf_url: z.string().optional(),
    cover_url: z.string().optional(),
    images_url: z.array(z.string()).optional(),
    label: z.string().optional(),
    shelf: z.string().optional(),
    description: z.string().optional()
});

const linkAuthorToBookSchema = z.object({
    author_id: z.number(),
    book_id: z.number(),
    description: z.string().optional()
});

const linkTagToBookSchema = z.object({
    tag_id: z.number(),
    book_id: z.number()
});

module.exports = {
    createBookSchema,
    updateBookSchema,

    linkAuthorToBookSchema,
    linkTagToBookSchema
};
