module.exports = {
    replaceVariables(baseText, variables) {
        let newText = baseText;
        for (const key in variables) {
            if (Object.prototype.hasOwnProperty.call(variables, key)) {
                newText = `${newText}`.replaceAll(
                    new RegExp(`{{${key.toUpperCase()}}}`, "g"),
                    variables[key] !== null ? variables[key] : ""
                );
            }
        }

        return newText;
    },

    cap(name) {
        return name.toLocaleLowerCase("pt-BR").replace(/(^|\s)\S/g, (char) => char.toLocaleUpperCase("pt-BR"));
    }
};
