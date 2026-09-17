const shortId = require("short-unique-id");

const DEFAULT_SHORT_ID_LENGTH = 10;
const DEFAULT_DICTIONARY = "alphanum";

const getRandomId = new shortId({ length: DEFAULT_SHORT_ID_LENGTH }).randomUUID;

module.exports = {
    // `dictionary` só é usado quando precisamos de um alfabeto diferente do padrão (ex.: "hex"
    // para sufixos de nome de arquivo de imagem, alinhado com o padrão histórico do acervo).
    getId(length = DEFAULT_SHORT_ID_LENGTH, dictionary = DEFAULT_DICTIONARY) {
        if (length === DEFAULT_SHORT_ID_LENGTH && dictionary === DEFAULT_DICTIONARY) {
            return getRandomId();
        }
        const { randomUUID } = new shortId({ length, dictionary });
        return randomUUID();
    },

    getSlug() {
        return getRandomId();
    }
};
