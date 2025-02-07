const TransactionService = require("../services/TransactionService");
const { InternalServerErr, Ok, BadRequest } = require("../utils/ResponseUtil");
const StringUtil = require("../utils/StringUtil");

class TransactionController {
    static async topUp(req, res) {
        try {
            const param = {
                amount: req.body.top_up_amount,
                id: req.user.id
            }

            const response = await TransactionService.topUp(param);

            return Ok(res, "Top Up Balance berhasil", response)
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("topUp", error);
            return InternalServerErr(res, error.message);
        }
    }

    static async transaction(req, res) {
        try {
            const param = {
                service_code: req.body.service_code,
                id: req.user.id
            }

            const response = await TransactionService.transaction(param);

            if (response.status != 0) {
                return BadRequest(res, response.message);
            }

            return Ok(res, "Top Up Balance berhasil", response)
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("transaction", error);
            return InternalServerErr(res, error.message);
        }
    }

    static async getAllTransactionHistory(req, res) {
        req.query.id = req.user.id
        try {
            const response = await TransactionService.getTransactionHistory(req.query)

            return Ok(res, "Get History Berhasil", response)
        } catch (error) {
            console.log("----------------------", StringUtil.getTimestamp());
            console.log("getAllTransactionHistory", error);
            return InternalServerErr(res, error.message);
        }
    }
}

module.exports = TransactionController;