const Jimp = require('jimp');

const barcodeHandler = (async (req, res) => {
  try {
    const { digits } = req.body;

    // Crie a imagem do código de barras usando a biblioteca Jimp
    const image = await Jimp.read(`https://barcode.tec-it.com/barcode.ashx?data=${digits}&code=Code128&dpi=96`);

    // Converta a imagem para um buffer
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG);

    // Retorne a imagem como resposta
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': buffer.length,
    });
    res.end(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar o código de barras');
  }
});

module.exports = barcodeHandler;
