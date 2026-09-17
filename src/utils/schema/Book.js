const { z } = require("zod");

const slugField = z
    .string()
    .min(3, "O slug deve ter pelo menos 3 caracteres.")
    .max(50, "O slug deve ter no máximo 50 caracteres.")
    .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
    .optional();

// POST /book cria o Book e seu primeiro Volume juntos (um livro sem nenhum exemplar/edição
// não é útil para a biblioteca), por isso o payload é dividido em duas partes.
const createBookSchema = z.object({
    book: z.object({
        slug: slugField,
        status: z.enum(["A", "I", "D"]).optional(),
        title: z.string().min(1, "Título é obrigatório").max(300),
        subtitle: z.string().max(300).optional(),
        summary: z.string().max(2000).optional(),
        description: z.string().max(2000).optional(),
        recommended_for: z.string().max(500).optional(),
        keywords: z.array(z.string()).optional(),
        category_id: z.number().optional()
    }),
    volume: z
        .object({
            slug: slugField,
            status: z.enum(["A", "I", "D"]).optional(),
            publisher_id: z.number().optional(),
            year: z.number().optional(),
            edition: z.string().max(100).optional(),
            isbn: z.string().max(20).optional(),
            isbn_old: z.string().max(20).optional(),
            pages: z.number().optional(),
            description: z.string().max(2000).optional(),
            pdf_url: z.string().max(500).optional(),
            cover_url: z.string().max(500).optional(),
            back_url: z.string().max(500).optional(),
            images_url: z.array(z.string()).optional(),
            keywords: z.array(z.string()).optional(),
            label: z.string().max(100).optional(),
            shelf: z.string().max(100).optional()
        })
        .optional()
});

const updateBookSchema = z.object({
    slug: slugField,
    status: z.enum(["A", "I", "D"]).optional(),
    title: z.string().min(1, "Título é obrigatório").max(300).optional(),
    subtitle: z.string().max(300).optional(),
    summary: z.string().max(2000).optional(),
    description: z.string().max(2000).optional(),
    recommended_for: z.string().max(500).optional(),
    keywords: z.array(z.string()).optional(),
    category_id: z.number().optional()
});

const linkAuthorToBookSchema = z.object({
    author_id: z.number(),
    volume_id: z.number(),
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
