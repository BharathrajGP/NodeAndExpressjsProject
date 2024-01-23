const dynamoose = require("dynamoose");
const { v4: uuidv4 } = require('uuid');

const schema = new dynamoose.Schema(
    {
        "id": { type: String, default: () => uuidv4(), hashKey: true },
        "firstName": { type: String },
        "lastName": { type: String },
        "email": {
            type: String,
            index: {
                "global": true,
                "name": "email-index"
            }
        },
        "age": { type: Number },
        "role": {
            type: String,
            index: {
                "global": true,
                "name": "role-index"
            },
        },
        "salary": { type: Number },
        "experience": { type: String },
        "manager": { type: String },
        "password": { type: String }
    },
    {
        "timestamps": true
    }
);

const employeeModel = dynamoose.model("employeeTable", schema, {
    create: true,
    throughput: "ON_DEMAND",
});
module.exports = employeeModel;
