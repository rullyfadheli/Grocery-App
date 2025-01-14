const e = require("express");
const userModels = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Registers a user with the provided email, password, username, and confirmPassword.
 *
 * @param {Object} request - The request object containing the user's information.
 * @param {Object} response - The response object to send the registration status.
 * @returns {undefined}
 */
async function register(request, response) {
  const { email, password, username, confirmPassword } = request.body;
  console.log(request.body);
  if (password !== confirmPassword) {
    response.status(400).json({
      message: "Password does't match",
    });
  } else if (password === confirmPassword) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
      const data = await userModels.addUser({ email, hashPassword, username });
      response.status(409).json({
        message: "Register user success",
        data: data,
      });
    } catch (error) {
      response.json({
        message: "User is already exist",
        error: error,
      });
      console.log(error);
    }
  }
}

/**
 * Authenticates the user by comparing the provided password with the hashed password stored in the database.
 * If the passwords match, generates access and refresh tokens and updates the user's refresh token in the database.
 * Sets the refresh token as a cookie and returns the access token in the response.
 * If the password is incorrect or the user's email is not found, returns an appropriate error message.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @returns {Object} - The response object containing the access token or an error message.
 */ async function login(request, response) {
  const { email, password } = request.body;
  const user = await userModels.getUserByEmail(email);
  const match = await bcrypt.compare(password, user[0][0].password);

  if (!match) {
    return response.status(400).json({
      message: "Password is incorrect",
    });
  }

  try {
    const username = user[0][0].username;
    const userId = user[0][0].id;
    const userEmail = user[0][0].email;
    const accessToken = jwt.sign(
      { userId, username, userEmail },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );

    const refreshToken = jwt.sign(
      { userId, username, userEmail },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1D" }
    );

    await userModels.updateRefreshToken(userId, refreshToken);

    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return response.json({
      accessToken: accessToken,
    });
  } catch (error) {
    return response.json({ message: "email is not found" });
  }
}

module.exports = { login, register };
