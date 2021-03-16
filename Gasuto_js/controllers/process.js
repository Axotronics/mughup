const rake = require('node-rake');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc   Convert image into text with tesseract
// @route  POST /api/v1/process/text-to-keywords
// @access Private
exports.textToKeywords = asyncHandler(async (req, res, next) => {
  const text = req.params.text;
  console.log(text);

  if (!text) {
    return next(new ErrorResponse(`Please enter the text`));
  }
  const keywords = rake.generate(text);
  res.status(200).json({
    success: true,
    message: keywords,
  });
});
