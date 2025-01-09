const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

function verifyToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader.split("Bearer ")[1];
  console.log(token);
  console.log(authHeader);
  try {
    const token = jwt.verify(token, SECRET_KEY);
    request.user = token;
    next();
  } catch (error) {
    return response.status(403).json({
      message: "Invalid token",
    });
  }
}

module.exports = verifyToken;
