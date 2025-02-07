const AuthService = require("../services/AuthService");
const { InternalServerErr, Ok, BadRequest } = require("../utils/ResponseUtil");
const StringUtil = require("../utils/StringUtil");

class AuthController {
    static async login(req, res) {
        try {
            let response = await AuthService.login(req.body);
            if (response.status != 0) {
                return BadRequest(res, "Username atau password salah");
            }
            return Ok(res, "Login Sukses", response.data);
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("login", error);
            return InternalServerErr(res, error.message);
        }
    }
}

module.exports = AuthController