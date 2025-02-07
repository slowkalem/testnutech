const Users = require("../models/Users");
const uuid = require("uuid").v7;
const bcrypt = require("bcrypt");
const { GetFileBuffer, DeleteFile, SaveFile } = require("../utils/FileUtil");
const saltRounds = parseInt(process.env.SALT_ROUND);

class UserService {
    static async createUser(param) {
        let response = { status: 0 };
        try {
            const user = await Users.getUserByEmail(param.email);

            if (user) {
                response.status = 102;
                response.message = "Email sudah terdaftar";
                return response;
            }

            let salt = bcrypt.genSaltSync(saltRounds);
            param.password = bcrypt.hashSync(param.password, salt);
            param.id = uuid();

            await Users.createUser(param);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async getBalance(id) {
        try {
            let response = await Users.getBalanceById(id);

            return response;
        } catch (error) {
            throw error;
        }
    }

    static async getProfile(param) {
        try {
            let user = await Users.getUserByID(param.id);
            user.profile_image = user.profile_image ? `${param.protocol}://${param.host}/user/${user.profile_image}` : null;

            return user;
        } catch (error) {
            throw error;
        }
    }

    static async updateProfile(param) {
        try {
            await Users.updateName(param);

            const user = await this.getProfile(param)

            return user;
        } catch (error) {
            throw error;
        }
    }

    static async updatePhoto(param) {
        try {
            let user = await Users.getUserByID(param.id);

            if (user.profile_image) {
                DeleteFile(`user/${user.profile_image}`)
            }

            param.photo = param.originalname
            await Users.updatePhoto(param);

            SaveFile('user/', param.originalname, param.buffer);
            user.profile_image = `${param.protocol}://${param.host}/user/${param.originalname}`;

            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;