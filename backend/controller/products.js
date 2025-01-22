const productsModel = require("../models/products");

async function getAllProducts(request, response) {
  try {
    const data = await productsModel.getAllProducts();
    response.status(200).json(data);
  } catch (error) {}
}

async function addProduct(request, response) {
  const { name, price, description, category } = request.body;

  const data = await productsModel.getProductByName(name);

  const productData = data[0][0];

  if (productData.name === name) {
    return response.status(400).json({ message: "Product already exists" });
  }

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

async function getProductByName(request, response) {
  const { name } = request.body;

  try {
    const data = await productsModel.getProductByName(name);
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

module.exports = { getAllProducts, addProduct, getProductByName };
