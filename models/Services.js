const { db } = require("../utils/DBUtil");

class Services {
    static async getAllServices() {
        let query = "SELECT service_code, service_name, service_icon, service_tariff FROM service";
        return db.any(query);
    }

    static async getServiceByServiceCode(service_code) {
        let query = `SELECT * FROM service where service_code = '${service_code}'`
        return db.oneOrNone(query);
    }
}

module.exports = Services;