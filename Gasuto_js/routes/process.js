const express = require('express');
const { textToKeywords } = require('../controllers/process');
const router = express.Router();

router.route('/text-to-keywords').post(textToKeywords);

module.exports = router;
