const jwt = require('jsonwebtoken');

exports.jwtSign = function (request) {
  return jwt.sign({ userId: request.id, email: request.email, firstName: request.firstName, lastName: request.lastName, role: request.role }, "Sotr07eb7iph1R+tAdOy", { expiresIn: "2 days" });
}

exports.jwtVerify = (token) => jwt.verify(token, "Sotr07eb7iph1R+tAdOy");