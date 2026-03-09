module.exports = {
    validateSchema: (schema, body) => {
        const result = schema.safeParse(body);
        let err = undefined;
        if (!result.success) {
            err = result.error.issues.map((err) => ({
                field: err.path.join("."),
                message: err.message
            }));
        }
        return { ...result, err };
    }
};
