const db = require("mysql2");
require("dotenv").config();

const dbPool = db.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

module.exports = dbPool.promise();
