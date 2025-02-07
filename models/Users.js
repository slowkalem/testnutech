const { db } = require("../utils/DBUtil");

class Users {
    //Create user
    static async createUser(param) {
        let query =
            "INSERT INTO users (id, email, first_name, last_name, password, created_on) " +
            "VALUES ($1, $2, $3, $4, $5, $6)";
        let dt = new Date();
        return await db.none(query, [
            param.id,
            param.email,
            param.first_name,
            param.last_name,
            param.password,
            dt
        ])
    }

    //Find user by email
    static async getUserByEmail(email) {
        let query = `SELECT * FROM users where email = '${email}'`
        return await db.oneOrNone(query);
    }

    //Find user by ID
    static async getUserByID(id) {
        let query = `SELECT email, first_name, last_name, profile_image FROM users where id = '${id}'`
        return await db.one(query);
    }

    static async getBalanceById(id) {
        let query = `SELECT balance FROM users where id = '${id}'`
        return await db.one(query);
    }

    //Update photo
    static async updatePhoto(param) {
        let query = `UPDATE users SET profile_image = '${param.photo}', updated_on = NOW() where id = '${param.id}'`
        return await db.none(query);
    }

    //Update balance
    static async updateBalance(param) {
        let query = `UPDATE users SET balance = '${param.amount}', updated_on = NOW() where id = '${param.id}'`
        return await db.none(query);
    }

    //update firstname and lastname
    static async updateName(param) {
        let query = `UPDATE users SET first_name = '${param.first_name}', last_name = '${param.last_name}', updated_on = NOW() where id = '${param.id}'`
        return await db.none(query);
    }
}

module.exports = Users;