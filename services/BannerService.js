const Banner = require("../models/Banner");

class BannerService {
    static async getAllBanner(param) {
        try {
            let banner = await Banner.getAllBanner();

            for (let i in banner) {
                banner[i].banner_image = `${param.protocol}://${param.host}/banner/${banner[i].banner_image}`
            }

            return banner;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BannerService;