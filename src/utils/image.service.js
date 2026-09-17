const sharp = require("sharp");

// Mesmos parâmetros já validados manualmente no script Python de referência
// (feal-biblioteca-scripts/resize.py e resize_author.py): quality 75 é o ponto de equilíbrio
// entre tamanho de arquivo e qualidade visual para fotos/capas exibidas na web.
const JPEG_OPTIONS = {
    quality: 75,
    progressive: true,
    mozjpeg: true, // encoder mozjpeg produz arquivos menores que o libjpeg padrão, mesma qualidade
    chromaSubsampling: "4:2:0"
};

module.exports = {
    // Redimensiona para exatamente width x height (esticando, sem manter proporção - mesmo
    // comportamento do script Python de referência, que usa Image.resize() puro), converte
    // para JPEG e descarta todo metadado (EXIF/GPS/câmera): o sharp já não inclui EXIF na
    // saída por padrão, e como nunca chamamos .withMetadata() nada disso é preservado.
    async processImage(inputBuffer, width, height) {
        return await sharp(inputBuffer)
            .rotate() // aplica a orientação gravada no EXIF antes de o EXIF ser descartado
            .resize(width, height, { fit: "fill" })
            .flatten({ background: { r: 255, g: 255, b: 255 } }) // remove transparência (JPEG não suporta alpha)
            .jpeg(JPEG_OPTIONS)
            .toBuffer();
    }
};
