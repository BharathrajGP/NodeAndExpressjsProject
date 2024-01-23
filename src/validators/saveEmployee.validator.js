const Joi = require('joi')

const saveEmployeeSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    age: Joi.number().required(),
    role: Joi.string().required(),
    salary: Joi.number().required(),
    experience: Joi.string().required(),
    manager: Joi.string().required(),
});

module.exports = saveEmployeeSchema;