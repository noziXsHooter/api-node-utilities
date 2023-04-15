// routes.js
const express = require('express');
const router = express.Router();
const cpfValidationHandler = require('../handlers/cpfValidation');
const getAdressByCep = require('../handlers/adressByCep');
const { postBarcodeHandler } = require('../handlers/barcode');
const { getBarcodeHandler } = require('../handlers/barcode');

router.post('/api/cpf-validation', cpfValidationHandler);
router.post('/api/address-by-cep', getAdressByCep);
/* router.get('/barcode/:digits', cpfValidationHandler); */
router.post('/api/barcode/', postBarcodeHandler);
router.get('/api/barcode/:digits', getBarcodeHandler);

module.exports = router;