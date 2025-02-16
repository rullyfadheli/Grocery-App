const dbPool = require("../config/database");

async function addNewAadmin(adminData) {
  const { name, email, password } = adminData;
  const query = "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)";
  dbPool.execute(query, [name, email, password]);
}

module.exports = { addNewAadmin };
