const { z } = require("zod");

// Cria uma nova edição/exemplar para um livro JÁ existente - para o primeiro volume de um
// livro novo, use POST /book (createBookSchema), que cria os dois juntos.
const createVolumeSchema = z.object({
    book_id: z.union([z.string(), z.number()]).refine((value) => !Number.isNaN(parseInt(value)), {
        message: "book_id inválido"
    }),
    slug: z
        .string()
        .min(3, "O slug deve ter pelo menos 3 caracteres.")
        .max(50, "O slug deve ter no máximo 50 caracteres.")
        .regex(/^[a-z0-9-]+$/, "O slug deve conter apenas letras minúsculas, números e hífens.")
        .optional(),
    status: z.enum(["A", "I", "D"]).optional(),
    publisher_id: z.number().optional().nullable(),
    year: z.number().optional().nullable(),
    edition: z.string().max(100).optional().nullable(),
    isbn: z.string().max(20).optional().nullable(),
    isbn_old: z.string().max(20).optional().nullable(),
    pages: z.number().optional().nullable(),
    description: z.string().max(2000).optional().nullable(),
    pdf_url: z.string().max(500).optional().nullable(),
    cover_url: z.string().max(500).optional().nullable(),
    back_url: z.string().max(500).optional().nullable(),
    images_url: z.array(z.string().max(500)).optional(),
    keywords: z.array(z.string()).optional(),
    label: z.string().max(100).optional().nullable(),
    shelf: z.string().max(100).optional().nullable()
});

const updateVolumeSchema = createVolumeSchema.omit({ book_id: true }).partial();

module.exports = {
    createVolumeSchema,
    updateVolumeSchema
};
