const dbPool = require("../config/database");

async function getUserByEmail(email) {
  const query = "SELECT * FROM users WHERE email = ?";

  return dbPool.execute(query, [email]);
}

async function addUser(data) {
  const email = data.email;
  const password = data.hashPassword;
  const username = data.username;
  const query =
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)";

  return dbPool.execute(query, [email, password, username]);
}

module.exports = { getUserByEmail, addUser };
