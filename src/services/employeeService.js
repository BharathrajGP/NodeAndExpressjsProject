const { employeeRepository } = require("../repository");
let { baseService } = require("./genericService");
const { jwt } = require("../helper")

baseService = baseService(employeeRepository);

const getByRole = async (request) => {
  const { role } = request;
  let user = await employeeRepository.getByRole(role);
  return user;
}

const updateRole = async (request) => {
  const { currentUser: { userId: id }, role } = request;
  let _user = await employeeRepository.getById(id);
  if (_user.role !== role ) {
      return await employeeRepository.update({ id, role });
  } else {
      return "Can't Change the same role"
  }
}

const userLogin = async (request) => {
  const { email, password } = request;
  let user = await employeeRepository.getByEmail(email);
  if ((user) && ((password === user[0].password))) {
    let token = jwt.jwtSign(user[0]);
    let data = { jwt: token, userName: (user[0].firstName + " " + user[0].lastName) };
    return data;
  }
}

module.exports = {
  ...baseService,

  getByRole,
  userLogin,
  updateRole
}