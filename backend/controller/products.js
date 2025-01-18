const productsModel = require("../models/products");

async function getAllProducts(request, response) {
  try {
    const data = await productsModel.getAllProducts();
    response.status(200).json(data);
  } catch (error) {}
}

async function addProduct(request, response) {
  const { name, price, description, category } = request.body;
  try {
    await productsModel.insertNewProduct({
      name,
      price,
      description,
      category,
    });
    response.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

module.exports = { getAllProducts, addProduct };
