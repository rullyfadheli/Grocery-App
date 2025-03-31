const jwt = require("jsonwebtoken");
const userModels = require("../models/users");
require("dotenv").config();

async function generateAccessToken(request, response) {
  const data = request.headers.authorization;
  const refreshToken = data.replace("Bearer ", "");
  console.log(refreshToken);

  if (!refreshToken) {
    return response.status(403).json({ message: "Refresh token is required" });
  }

  try {
    const user = await userModels.getRefreshToken(refreshToken);
    if (!user) {
      return response.status(403).json({ message: "Refresh token is invalid" });
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return response
            .status(403)
            .json({ message: "Refresh token is invalid" });
        }

        const userId = user[0].idusers;
        const username = user[0].username;
        const userEmail = user[0].email;
        const role = user[0][0].role;

        const accessToken = jwt.sign(
          { userId, username, userEmail, role },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "60s" }
        );

        return response.json({ accessToken });
      }
    );
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

module.exports = generateAccessToken;
