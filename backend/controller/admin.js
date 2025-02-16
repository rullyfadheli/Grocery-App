const bcrypt = require("bcrypt");
const adminModels = require("../models/admin");
const jwt = require("jsonwebtoken");

async function registerNewAdmin(request, response) {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response
      .status(400)
      .json({ message: "Please fill required fields" });
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await adminModels.addNewAadmin({ name, email, password: hashedPassword });

    return response
      .status(201)
      .json({ message: "Admin registered succesfully" });
  } catch (error) {
    return response.status(500).json({ mesage: error.message });
  }
}

module.exports = { registerNewAdmin };
