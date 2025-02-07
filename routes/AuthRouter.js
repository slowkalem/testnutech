const { Router } = require("express");
const { celebrate } = require("celebrate");
const { loginSchema } = require("../schemas/AuthSchema");
const AuthController = require("../controllers/AuthController");
const router = Router();

router.post("/login", celebrate({ body: loginSchema }), AuthController.login);

module.exports = router;