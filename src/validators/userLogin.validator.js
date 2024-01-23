const Joi = require('joi')

const userLoginSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
});

module.exports = userLoginSchema;