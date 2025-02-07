const { Joi } = require("celebrate");
const { emailField, passwordField } = require("./BaseField");

const loginSchema = Joi.object()
    .options({ abortEarly: false })
    .keys({
        email: Joi.string()
            .max(255)
            .regex(emailField.pattern)
            .messages({
                "string.pattern.base": emailField.message.pattern,
                "any.required": emailField.message.required,
                "string.empty": emailField.message.required,
            })
            .required(),
        password: Joi.string()
            .max(255)
            .regex(passwordField.pattern)
            .messages({
                "string.pattern.base": passwordField.message.pattern,
                "any.required": passwordField.message.required,
                "string.empty": passwordField.message.required,
            })
            .required()
    }).unknown(false);

module.exports = {
    loginSchema
}