// routes.js
const express = require('express');
const router = express.Router();
const cpfValidationHandler = require('../handlers/cpfValidation');
const {postBarcodeHandler} = require('../handlers/barcode');
const {getBarcodeHandler} = require('../handlers/barcode');

router.post('/cpfValidation', cpfValidationHandler);
/* router.get('/barcode/:digits', cpfValidationHandler); */
router.post('/barcode/', postBarcodeHandler);
router.get('/barcode/:digits', getBarcodeHandler);

module.exports = router;