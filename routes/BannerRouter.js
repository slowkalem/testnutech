const { Router } = require("express");
const BannerController = require("../controllers/BannerController");
const router = Router();

router.get("/banner", BannerController.getAllBanner);

module.exports = router;