const { z } = require("zod");

const idField = z.union([z.string(), z.number()]).refine((value) => !Number.isNaN(parseInt(value)), {
    message: "Identificador inválido"
});

const createLoanSchema = z.object({
    user_id: idField,
    volume_id: idField,
    due_date: z.coerce.date().optional(),
    description: z.string().max(500).optional()
});

module.exports = {
    createLoanSchema
};
