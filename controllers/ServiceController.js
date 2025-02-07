const ServiceService = require("../services/ServiceService");
const { Ok, InternalServerErr } = require("../utils/ResponseUtil");
const StringUtil = require("../utils/StringUtil");

class ServiceController {
    static async getAllServices(req, res) {
        try {
            const param = {
                protocol: req.protocol,
                host: req.get("host"),
            }

            const response = await ServiceService.getAllServices(param);

            return Ok(res, "Sukses", response);
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("getAllServices", error);
            return InternalServerErr(res, error.message);
        }
    }
}

module.exports = ServiceController;