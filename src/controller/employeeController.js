let { baseController } = require("./genericController");
const { employeeService } = require("../services");

baseController = baseController(employeeService);

const getByRole = async (req, res, next) => {
  try {
    let request = req.body;
    let result = await employeeService.getByRole(request);
    res.send({ "Items": result });
  } catch (error) {
    next(error);
  }
}

const userLogin = async (req, res, next) => {
  try {
      let request = req.body;
      let result = await employeeService.userLogin(request);
      res.send({ "Items": result })
  }
  catch (error) {
      next(error)
  }
}

const updateRole = async (req, res, next) => {
  try {
      let request = req.body;
      let result = await employeeService.updateRole(request);
      res.send({ "Items": result })
  } catch (error) {
      next(error);
  }
};

module.exports = {
  ...baseController,

  getByRole,
  userLogin,
  updateRole
}