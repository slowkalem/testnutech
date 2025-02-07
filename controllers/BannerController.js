const BannerService = require("../services/BannerService");
const { InternalServerErr, Ok } = require("../utils/ResponseUtil");
const StringUtil = require("../utils/StringUtil");

class BannerController {
    static async getAllBanner(req, res) {
        try {
            const param = {
                protocol: req.protocol,
                host: req.get("host"),
            }

            const response = await BannerService.getAllBanner(param);

            return Ok(res, "Sukses", response);
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("getAllBanner", error);
            return InternalServerErr(res, error.message);
        }
    }
}

module.exports = BannerController