const productsModel = require("../models/products");

/**
 * Asynchronously retrieves all products.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @returns {undefined}
 */
async function getAllProducts(request, response) {
  try {
    const data = await productsModel.getAllProducts();
    response.status(200).json(data[0]);
  } catch (error) {
    if (error) {
      response.status(500).json({ message: error.message });
    }
  }
}

/**
 * Function to add a new product.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @returns {Object} - The response object.
 */
async function addProduct(request, response) {
  const { name, price, description, category, imageUrl } = request.body;

  let image = `https://grocery-app.my.id/images/${imageUrl.toLowerCase()}`;

  const data = await productsModel.getProductByName(name);

  const productData = data[0][0];

  if (productData && productData.name === name) {
    return response.status(400).json({ message: "Product is already exists" });
  }

  try {
    await productsModel.insertNewProduct({
      name,
      price,
      description,
      category,
      image,
    });
    response.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

/**
 * Retrieves a product by its name from the database and sends it as a JSON response.
 *
 * @param {string} name - The name of the product.
 * @returns {void}
 * @throws {Error} If there is an error retrieving the product or sending the response.
 */ async function getProductByName(request, response) {
  const { name } = request.body;

  try {
    const data = await productsModel.getProductByName(name);
    response.status(200).json(data[0][0]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function getProductByCategory(request, response) {
  const { category } = request.body;

  try {
    const data = await productsModel.getProductByCategory(category);
    response.status(200).json(data[0]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function searchProductByName(request, response) {
  const { name } = request.body;
  try {
    const data = await productsModel.searchProductByName(name);
    return response.status(200).json({ data: data[0] });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  getProductByName,
  getProductByCategory,
  searchProductByName,
};
