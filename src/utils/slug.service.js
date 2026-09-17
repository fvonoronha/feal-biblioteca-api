const { getId } = require("./id.service");

const MAX_SLUG_BASE_LENGTH = 40;

// Transforma um texto livre (ex.: título de um livro) num slug amigável: sem acentos, minúsculo,
// separado por hífens - ex. "O meu título é esse aqui" -> "o-meu-titulo-e-esse-aqui".
function slugify(text) {
    return (text || "")
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, MAX_SLUG_BASE_LENGTH)
        .replace(/-+$/g, "");
}

// Gera um slug único a partir de um texto: tenta a versão "limpa" primeiro e, se já estiver em
// uso, acrescenta um short-id no final até encontrar uma variação livre. `isTaken` é assíncrona
// e específica de cada tabela/coluna que precisa da unicidade (ex.: `slug` de Book, Volume,
// Author ou Publisher são unicidades independentes entre si).
async function generateUniqueSlug(text, isTaken) {
    const base = slugify(text) || "item";

    if (!(await isTaken(base))) return base;

    for (let attempt = 0; attempt < 5; attempt++) {
        const suffixLength = 6 + attempt;
        const candidate = `${base}-${getId(suffixLength, "hex")}`;
        if (!(await isTaken(candidate))) return candidate;
    }

    // Praticamente impossível de chegar aqui (exigiria 5 colisões seguidas), mas evita deixar a
    // função sem retorno - o `@unique` do banco ainda protege contra qualquer duplicata residual.
    return `${base}-${getId(10, "hex")}`;
}

module.exports = { slugify, generateUniqueSlug };
