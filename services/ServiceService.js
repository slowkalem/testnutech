const Services = require("../models/Services");

class ServiceService {
    static async getAllServices(param) {
        let services = await Services.getAllServices();

        for (let service of services) {
            service.service_icon = `${param.protocol}://${param.host}/service/${service.service_icon}`
        }
        return services;
    }
}

module.exports = ServiceService