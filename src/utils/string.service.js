module.exports = {
    getOnlyDigits(value) {
        return typeof value === "string" ? value.replace(/\D/g, "") : value;
    },

    // Mesma normalização usada em outros pontos de busca do app (remove acentos e
    // caracteres especiais, baixa a caixa) - centralizada aqui para novas buscas simples
    // baseadas em `~*` (ILIKE via regex) que não precisam de uma coluna search_* dedicada.
    normalizeSearchText(value) {
        return (value || "")
            .normalize("NFD")
            .replace(/[̀-ͯ]/g, "")
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .toLowerCase();
    }
};
