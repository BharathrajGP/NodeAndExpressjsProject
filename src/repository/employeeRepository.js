const { employeeModel } = require('../models');
let { baseRepository } = require("./genericRepository");

baseRepository = baseRepository(employeeModel);

const getByEmail = async (email) => await baseRepository.getByObject({ email });

const getByRole = async (role) => await baseRepository.getByObject({ role });

module.exports = {
  ...baseRepository,

  getByEmail,
  getByRole
}