const { Joi } = require("celebrate");

const topUpSchema = Joi.object()
    .options({ abortEarly: false })
    .keys({
        top_up_amount: Joi.number().greater(0).required().messages({
            "any.required": "top_up_amount tidak boleh kosong",
            "number.base": "Parameter amount hanya boleh angka",
            "number.greater": "Parameter amount tidak boleh lebih kecil dari 0",
        })
    }).unknown(false)

const transactionSchema = Joi.object()
    .options({ abortEarly: false })
    .keys({
        service_code: Joi.string().max(255).required().messages({
            "any.required": "service_code tidak boleh kosong",
        })
    }).unknown(false)

const getTransactionHistorySchema = Joi.object().keys({
    offset: Joi.number().default(0).empty(''),
    limit: Joi.number().default(0).empty('')
}).unknown(false)

module.exports = {
    topUpSchema,
    transactionSchema,
    getTransactionHistorySchema
}