const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const { createJwtToken } = require("../utils/JwtUtil");

class AuthService {
    static async login(param) {
        let response = { status: 0 }
        try {
            const user = await Users.getUserByEmail(param.email);
            if (!user) {
                response.status = 103;
                return response;
            }

            const match = bcrypt.compareSync(param.password, user.password);

            if (!match) {
                response.status = 103;
                return response;
            }

            let data = {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            }
            response.data = {}
            response.data.token = createJwtToken(data);

            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthService;