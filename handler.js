const express = require("express");
const app = express();
const cors = require('cors');

const employeeController = require("./src/controller/employeeController");
const { auth, validator } = require('./src/middleware');

const port = 3001;

app.use(express.json({
  type: "application/json",
  limit: '50mb'
}));

app.use(cors());

app.post("/v1/getAllUsers", auth(), employeeController.getAll)

app.post("/v1/getByRole", [auth(), validator("getByRole")], employeeController.getByRole)

app.post("/v1/saveEmployee", [auth(), validator("saveEmployee")], employeeController.create)

app.post('/v1/userLogin', validator("userLogin"), employeeController.userLogin);

app.post('/v1/updateRole', [auth(), validator("updateRole")], employeeController.updateRole);

app.post('/hi', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});