// routes.js
const express = require('express');
const router = express.Router();
const cpfValidationHandler = require('../handlers/cpfValidation');
const barcodeHandler = require('../handlers/barcode');

router.post('/cpfValidation', cpfValidationHandler);
router.post('/barcode', barcodeHandler);

module.exports = router;