const express = require('express');
const router = express.Router();

// import router files
const processRouter = require('./process');

// use router files
router.use('/process', processRouter);

module.exports = router;
