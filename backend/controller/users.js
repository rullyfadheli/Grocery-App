const userModels = require("../models/users");
const bcrypt = require("bcrypt");

async function getUserByEmail(request, response) {
  try {
    const email = request.body.email;
    const data = await userModels.getUserByEmail(email);
    if (data.length === 0) {
      return response.status(404).json({
        message: "User not found",
      });
    }
    response.json({
      message: "Get user success",
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    response.json({ message: "Failed to get user data", error: error });
  }
}

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

module.exports = { getUserByEmail, register };
