const Transaction = require("../models/Transaction");
const Users = require("../models/Users");
const UserService = require("../services/UserService");
const Service = require("../models/Services")
const uuid = require("uuid").v7

class TransactionService {
    static async topUp(param) {
        try {
            let user = await Users.getBalanceById(param.id);
            const data_user = {
                amount: user.balance + param.amount,
                id: param.id
            }
            await Users.updateBalance(data_user);

            const data = {
                id: uuid(),
                user_id: param.id,
                invoice_number: "INV-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
                transaction_type: "TOPUP",
                description: "Top Up balance",
                total_amount: param.amount
            }

            await Transaction.createTransaction(data);

            return await UserService.getBalance(param.id);
        } catch (error) {
            throw error;
        }
    }

    static async transaction(param) {
        let response = { status: 0 }
        try {
            const service = await Service.getServiceByServiceCode(param.service_code);

            if (!service) {
                response.status = 102;
                response.message = "Service ataus Layanan tidak ditemukan";
                return response;
            }

            let user = await Users.getBalanceById(param.id);

            if (user.balance < service.service_tariff) {
                response.status = 102;
                response.message = "Balance tidak mencukupi";
                return response;
            }

            const data_balance = {
                id: param.id,
                amount: user.balance - service.service_tariff
            }

            await Users.updateBalance(data_balance);
            const invoice_number = "INV-" + Math.random().toString(36).substring(2, 8).toUpperCase()
            const data = {
                id: uuid(),
                user_id: param.id,
                invoice_number: invoice_number,
                transaction_type: "PAYMENT",
                description: service.service_name,
                total_amount: service.service_tariff
            }

            await Transaction.createTransaction(data);
            response.data = {
                invoice_number: invoice_number,
                service_code: service.service_code,
                service_name: service.service_name,
                transaction_type: "PAYMENT",
                total_amount: service.service_tariff,
                created_on: new Date().toISOString()
            }
            return response;
        } catch (error) {
            throw error;

        }
    }

    static async getTransactionHistory(param) {
        try {
            const response = await Transaction.getTransactionByUserId(param);

            return response;
        } catch (error) {
            throw error;

        }
    }
}

module.exports = TransactionService;