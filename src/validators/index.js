const saveEmployee = require("./saveEmployee.validator");
const getByRole = require("./getByRole.validator");
const userLogin = require("./userLogin.validator");
const updateRole = require("./updateRole.validator");

module.exports = {
  getByRole,
  saveEmployee,
  userLogin,
  updateRole
}