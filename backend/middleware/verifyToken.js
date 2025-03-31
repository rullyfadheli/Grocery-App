require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY, (err) => {
      if (err) {
        return res.status(403).json({ message: "Invalid token" });
      }
    });
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = verifyToken;
