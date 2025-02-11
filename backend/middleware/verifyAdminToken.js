const jwt = require("jsonwebtoken");

function verifyAdminToken(request, response, next) {
  const authHeader = request.headers["authorization"];

  if (!authHeader) {
    return response.status(401).json({ message: "Access denied" });
  }

  const token = authHeader.split("Bearer ")[1];
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (decoded.role !== "admin") {
      return response.status(403).json({ message: "Access denied" });
    }

    request.admin = decoded;

    next();
  } catch (error) {
    return response.status(403).json({ message: "Invalid or expired token" });
  }
}

module.exports = verifyAdminToken;
