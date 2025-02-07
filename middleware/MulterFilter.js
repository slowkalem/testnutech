const multer = require("multer");
const { BadRequest } = require("../utils/ResponseUtil");
const storage = multer.memoryStorage();
const uuid = require('uuid').v7

const uploadPhoto = multer({
  storage
});

const fileSizeFilter = async (req, res, next) => {
  const maxSizeValue = Number(process.env.MAX_SIZE_UPLOAD);
  if (req.files || req.files?.length) {
    const maxSize = parseFloat(maxSizeValue) * 1024 * 1024;
    for (let i in req.files) {
      let photoExtention = req.files[i]?.originalname.split(".").slice(-1).pop();
      if (!["png", "jpg", "jpeg"].includes(photoExtention)) {
        return BadRequest(res, `Format Image tidak sesuai`);
      }
      let fizeSize = Buffer.byteLength(req.files[i].buffer);
      if (fizeSize > maxSize) {
        return BadRequest(res, `Maximum file size is ${maxSizeValue} MB`);
      }
    }
  }

  next();
};

const changeFileName = async (req, res, next) => {
  if (req.files || req.files?.length) {
    for (let i in req.files) {
      let originalname = req.files[i].originalname;
      let extention = originalname.split(".").slice(-1).pop();
      let filename = originalname.substr(
        0,
        originalname.length - extention.length - 1
      );
      req.files[
        i
      ].originalname = `${filename}-${uuid()}.${extention}`;
    }
  }

  next();
}

module.exports = { uploadPhoto, fileSizeFilter, changeFileName };
