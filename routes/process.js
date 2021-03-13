const express = require('express');
const { imageToText } = require('../controllers/process');
const router = express.Router();

router.route('/image-to-text').get(imageToText);

module.exports = router;
