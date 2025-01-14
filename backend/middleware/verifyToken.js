const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
require("dotenv").config();

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split("Bearer ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = verifyToken;
