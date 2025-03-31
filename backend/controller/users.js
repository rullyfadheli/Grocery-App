require("dotenv").config();
const userModels = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

  if (!email || !password || !username || !confirmPassword) {
    return response
      .status(400)
      .json({ message: "Please fill required fields" });
  }

  if (password !== confirmPassword) {
    response.status(400).json({
      message: "Password does't match",
    });
  } else if (password === confirmPassword) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
      await userModels.addUser({ email, hashPassword, username });
      response.status(200).json({
        message: "Register user success",
      });
    } catch (error) {
      console.log(error);
      response.status(409).json({
        message: "User is already exist",
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

  // Checking if the user fill the requiered request data
  if (!email || !password) {
    return response
      .status(400)
      .json({ message: "Please fill required fields" });
  }

  const user = await userModels.getUserByEmail(email);

  // Validate user login information
  if (!user[0][0]) {
    return response.status(400).json({ message: "Email is not found" });
  }
  const match = await bcrypt.compare(password, user[0][0].password);

  // Send response if password is incorrect
  if (!match) {
    return response.status(400).json({
      message: "Password is incorrect",
    });
  }

  try {
    const username = user[0][0].username;
    const userId = user[0][0].id;
    const userEmail = user[0][0].email;
    const role = user[0][0].role;

    // setting accessToken data
    const accessToken = jwt.sign(
      { userId, username, userEmail, role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60s" }
    );
    // setting refreshToken data
    const refreshToken = jwt.sign(
      { userId, username, userEmail, role },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1D" }
    );

    await userModels.updateRefreshToken(userId, refreshToken);

    // send refreshToken as a cookie
    response.cookie("refreshToken", refreshToken, {
      httpOnly: true, // Ensures the cookie is accessible only via HTTP(S), not JavaScript
      // secure: true, // Ensures the cookie is sent only over HTTPS
      secure: false,
      // sameSite: "strict", // Protects against CSRF attacks
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // Expiration time
    });
    // send accessToken after the user succesfully logged in
    return response.json({ accessToken, refreshToken });
  } catch (error) {
    return response.json({ message: "email is not found" });
  }
}

async function logout(request, response) {
  const refreshToken = request.cookies?.refreshToken;

  if (!refreshToken) {
    return response.status(401).json({ message: "Refresh token is required" });
  }

  // Validate refreshToken
  if (typeof refreshToken !== "string" || refreshToken.trim() === "") {
    return response.status(400).json({ message: "Invalid refresh token" });
  }

  const user = await userModels.getRefreshToken(refreshToken);

  // Handle cases where user is not found
  if (!user || !user[0] || !user[0][0]) {
    return response.status(403).json({ message: "Refresh token is invalid" });
  }

  try {
    const userId = user[0][0].id;

    await userModels.deleteRefreshToken(userId);

    // Clear the refreshToken cookie
    response.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    return response.status(200).json({ message: "Logout success" });
  } catch (error) {
    console.error("Logout error:", error);
    return response.status(502).json({ message: "Server error occurred" });
  }
}

async function forgetPassword(request, response) {
  const { email } = request.body;

  console.log(email);

  if (!email) {
    return response.status(400).json({ message: "Please provide your email" });
  }
  const userData = await userModels.getUserByEmail(email);

  if (!userData[0][0]) {
    return response
      .status(400)
      .json({ message: "Email is not found, please register" });
  }

  const userId = userData[0][0].id;
  const token = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.GMAIL_ACCOUNT,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const receiver = {
    from: process.env.GMAIL_ACCOUNT,
    to: email,
    subject: "Password reset request",
    text: `Please click this link to reset your password: ${process.env.CLIENT_URL}/reset-password?token=${token}`,
  };

  transporter.sendMail(receiver, (error, info) => {
    if (error) {
      console.log(error);
      return response
        .status(400)
        .json({ message: "Failed to send reset password email" });
    }

    console.log("Email sent: " + info.response);

    return response.status(200).json({
      message: "Email has sent, please check your email",
    });
  });
}

async function resetPassword(request, response) {
  // checking the token
  const { token } = request.body;

  if (!token) {
    return response.status(400).json({ message: "Invalid token" });
  }

  // decoding the token to get user id
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const { userId } = decoded;
  // checking if the user exist in the database
  const userData = await userModels.getUserById(userId);
  console.log(userData);

  if (!userData[0][0]) {
    return response
      .status(400)
      .json({ message: "Reset password link has expired" });
  }

  // hashing the new password
  const newPassword = request.body.password;

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(newPassword, salt);

  try {
    // updating the user password in the database
    await userModels.updatePassword(userId, hashPassword);
    return response.status(200).json({ message: "Password reset success" });
  } catch (error) {
    return response.status(400).json({
      mesage: "Failed to reset password",
      error: error.message,
    });
  }
}

module.exports = { login, register, logout, forgetPassword, resetPassword };
