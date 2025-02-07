const UserService = require("../services/UserService");
const { Ok, BadRequest, InternalServerErr } = require("../utils/ResponseUtil");
const StringUtil = require("../utils/StringUtil");

class UserController {
    static async createUser(req, res) {
        try {
            let response = await UserService.createUser(req.body);
            if (response.status != 0) {
                return BadRequest(res, response.message)
            }
            return Ok(res, "Registrasi berhasil silahkan login");
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("createUser", error);
            return InternalServerErr(res, error.message);
        }
    }

    static async getProfile(req, res) {
        try {
            const param = {
                protocol: req.protocol,
                host: req.get("host"),
                id: req.user.id
            }

            const response = await UserService.getProfile(param);

            return Ok(res, "Sukses", response);
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("getProfile", error);
            return InternalServerErr(res, error.message);
        }
    }

    static async getBalance(req, res) {
        try {
            const response = await UserService.getBalance(req.user.id)

            return Ok(res, "Get Balance Berhasil", response);
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("getBalance", error);
            return InternalServerErr(res, error.message);
        }
    }

    static async updateProfile(req, res) {
        try {
            const param = {
                protocol: req.protocol,
                host: req.get("host"),
                id: req.user.id,
                first_name: req.body.first_name,
                last_name: req.body.last_name
            }

            const response = await UserService.updateProfile(param);

            return Ok(res, "Update Pofile berhasil", response);
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("updateProfile", error);
            return InternalServerErr(res, error.message);
        }
    }

    static async updatePhoto(req, res) {
        try {
            let param = req.files[0]
            param.id = req.user.id
            param.protocol = req.protocol
            param.host = req.get("host")

            let response = await UserService.updatePhoto(param);

            return Ok(res, "Update Profile Image berhasil", response);
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("updatePhoto", error);
            return InternalServerErr(res, error.message);
        }
    }
}

module.exports = UserController;