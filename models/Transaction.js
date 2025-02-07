const { db } = require("../utils/DBUtil");

class Transaction {
    static async createTransaction(param) {
        let query =
            "INSERT INTO transaction (id, user_id, invoice_number, transaction_type, description, total_amount, created_on) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7)";
        let dt = new Date();
        return await db.none(query, [
            param.id,
            param.user_id,
            param.invoice_number,
            param.transaction_type,
            param.description,
            param.total_amount,
            dt
        ])
    }

    //get History Transaction By UserId
    static async getTransactionByUserId(param) {
        let query = `SELECT invoice_number, transaction_type, description, total_amount, created_on 
        FROM transaction where user_id = '${param.id}' order by created_on DESC `

        if (param.limit && param.limit !== "") {
            query += `LIMIT ${param.limit} `
        }

        if (param.offset && param.offset !== "") {
            query += `OFFSET ${param.offset} `
        }

        const result = await db.any(query);

        return {
            offset: param.offset ? param.offset : 0,
            limit: param.limit ? param.limit : 0,
            records: result
        }
    }
}

module.exports = Transaction;