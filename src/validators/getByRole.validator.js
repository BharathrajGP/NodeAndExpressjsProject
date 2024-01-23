const Joi = require('joi')

const getByRoleSchema = Joi.object({
    role: Joi.string().required()
});

module.exports = getByRoleSchema;