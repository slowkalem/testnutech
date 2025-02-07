const { db } = require("../utils/DBUtil");

class Banner {
    static async getAllBanner() {
        let query = "SELECT banner_name, banner_image, description FROM banner"
        return db.any(query);
    }
}

module.exports = Banner;