const { Router } = require("express");
const { celebrate } = require("celebrate");
const multer = require("multer");

const router = Router();
const storage = multer.memoryStorage();
const fileFilter = (req, file, callback) => {
    callback(null, true);
};
const upload = multer({
    storage,
    fileFilter,
});

const UserController = require("../controllers/UserController");
const { createUserSchema, updateProfileSchema } = require("../schemas/UserSchema");
const { JwtFilter } = require("../utils/JwtUtil");
const {
    fileSizeFilter,
    changeFileName,
} = require("../middleware/MulterFilter");

router.post("/registration", celebrate({ body: createUserSchema }), UserController.createUser);
router.get("/profile", JwtFilter, UserController.getProfile);
router.put("/profile/image", JwtFilter, upload.any(), fileSizeFilter, changeFileName, UserController.updatePhoto);
router.put("/profile/update", JwtFilter, celebrate({ body: updateProfileSchema }), UserController.updateProfile);
router.get("/balance", JwtFilter, UserController.getBalance);

module.exports = router;