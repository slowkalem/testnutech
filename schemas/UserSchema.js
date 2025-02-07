const { Joi } = require("celebrate");
const { emailField, firstNameField, lastNameField, passwordField } = require("./BaseField");

const createUserSchema = Joi.object()
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
        first_name: Joi.string()
            .max(255)
            .messages({
                "any.required": firstNameField.message.required,
                "string.empty": firstNameField.message.required,
            })
            .required(),
        last_name: Joi.string()
            .max(255)
            .messages({
                "any.required": lastNameField.message.required,
                "string.empty": lastNameField.message.required,
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

const updateProfileSchema = Joi.object()
    .options({ abortEarly: false })
    .keys({
        first_name: Joi.string()
            .max(255)
            .messages({
                "any.required": firstNameField.message.required,
                "string.empty": firstNameField.message.required,
            })
            .required(),
        last_name: Joi.string()
            .max(255)
            .messages({
                "any.required": lastNameField.message.required,
                "string.empty": lastNameField.message.required,
            })
            .required(),
    }).unknown(false);

module.exports = {
    createUserSchema,
    updateProfileSchema
}