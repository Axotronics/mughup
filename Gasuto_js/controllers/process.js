const tesseract = require('node-tesseract-ocr');
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

// @desc   Convert image into text with tesseract
// @route  GET /api/v1/image-to-text
// @access Private
exports.imageToText = asyncHandler(async (req, res, next) => {
  const config = {
    lang: 'eng',
    oem: 1,
    psm: 3,
  };

  tesseract
    .recognize('image.jpeg', config)
    .then((text) => {
      res.status(200).json({
        success: true,
        message: 'Successfully converted image to text',
        data: text,
      });
    })
    .catch((error) => {
      console.log(error.message);
      return next(new ErrorResponse(`Error converting image to text`, 400));
    });
});
