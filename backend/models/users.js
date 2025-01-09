const dbPool = require("../config/database");
/**
 * Retrieves a user from the database based on their email address.
 *
 * @param {string} email - The email address of the user.
 * @returns {Promise} A promise that resolves with the user data.
 */
async function getUserByEmail(email) {
  const query = "SELECT * FROM users WHERE email = ?";

  return dbPool.execute(query, [email]);
}
/**
 * Adds a user to the database.
 *
 * @param {Object} data - The user data.
 * @param {string} data.email - The email of the user.
 * @param {string} data.hashPassword - The hashed password of the user.
 * @param {string} data.username - The username of the user.
 * @returns {Promise} A promise that resolves with the result of the database insertion.
 */
async function addUser(data) {
  const email = data.email;
  const password = data.hashPassword;
  const username = data.username;
  const query =
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)";

  return dbPool.execute(query, [email, password, username]);
}

async function updateRefreshToken(id, refresh_token) {
  const query = "UPDATE users SET refresh_token = ? WHERE id = ?";
  dbPool.execute(query, [refresh_token, id]);
}

module.exports = { getUserByEmail, addUser, updateRefreshToken };
