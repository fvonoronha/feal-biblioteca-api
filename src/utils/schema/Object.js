const { z } = require("zod");

const allowedStorages = [
    "STANDARD",
    "REDUCED_REDUNDANCY",
    "STANDARD_IA",
    "ONEZONE_IA",
    "INTELLIGENT_TIERING",
    "GLACIER",
    "DEEP_ARCHIVE",
    "OUTPOSTS",
    "GLACIER_IR",
    "SNOW",
    "EXPRESS_ONEZONE"
];

const objectScheme = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    storage: z
        .string()
        .toUpperCase()
        .superRefine((st, ctx) => {
            if (!allowedStorages.includes(st)) {
                ctx.addIssue({
                    message: "Tier não suportado",
                    code: z.ZodIssueCode.custom
                });
            }
        })
});

const { validateSchema } = require("../validation.service");

module.exports = {
    Schema: objectScheme,
    validate: (sup) => validateSchema(objectScheme, sup)
};
