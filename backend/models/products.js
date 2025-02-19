const dbPool = require("../config/database");

async function getAllProducts() {
  try {
    const query = "SELECT * FROM products";
    return dbPool.execute(query);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function insertNewProduct(data) {
  const { name, price, description, category, image } = data;
  try {
    const query =
      "INSERT INTO products (name, price, description, category, image) VALUES (?, ?, ?, ?, ?)";
    dbPool.execute(query, [name, price, description, category, image]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function getProductByName(name) {
  try {
    const query = "SELECT * FROM products WHERE LOWER(name) = LOWER(?)";
    return dbPool.execute(query, [name]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function searchProductByName(name) {
  const query = "SELECT * FROM products WHERE name LIKE ?";
  return dbPool.execute(query, [`%${name}%`]);
}

async function getProductByCategory(category) {
  try {
    const query = "SELECT * FROM products WHERE LOWER(category) = LOWER(?)";
    return dbPool.execute(query, [category]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllProducts,
  insertNewProduct,
  getProductByName,
  getProductByCategory,
  searchProductByName,
};
