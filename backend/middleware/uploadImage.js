// ------------------- Middleware -------------------

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "images");
  },
  filename: function (request, file, callback) {
    const rename = file.originalname.replaceAll(" ", "").toLowerCase();
    callback(null, rename);
  },
});

const upload = multer({ storage: storage }).single("image");

module.exports = upload;
