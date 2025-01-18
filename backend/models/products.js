const dbPool = require("../config/database");

async function getAllProducts() {
  try {
    const query = "SELECT * FROM products";
    dbPool.execute(query);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function insertNewProduct(data) {
  const { name, price, description, category } = data;
  try {
    const query =
      "INSERT INTO products (name, price, description, category) VALUES (?, ?, ?, ?)";
    dbPool.execute(query, [name, price, description, category]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

module.exports = { getAllProducts, insertNewProduct };
