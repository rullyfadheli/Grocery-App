const sql = require("../config/database");

async function getAllProductsFromDB() {
  try {
    const products = await sql`SELECT * FROM products`;
    console.log(products);
    return products;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function insertNewProduct(data) {
  const { name, price, description, category, image } = data;
  try {
    const query =
      "INSERT INTO products (name, price, description, category, image) VALUES (?, ?, ?, ?, ?)";
    dbPool.execute(query, [name, price, description, category, image]);
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getProductByName(name) {
  try {
    const query = "SELECT * FROM products WHERE LOWER(name) = LOWER(?)";
    return dbPool.execute(query, [name]);
  } catch (error) {
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
}

module.exports = {
  getAllProductsFromDB,
  insertNewProduct,
  getProductByName,
  getProductByCategory,
  searchProductByName,
};
