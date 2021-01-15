/** @format */

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
     destination: './images',
     filename: function (req, file, callback) {
          return callback(null, `image-${Math.floor(Math.random() * 10000000)}${path.extname(file.originalname)}`);
     },
});
const uploader = multer({ storage });
module.exports = uploader;
