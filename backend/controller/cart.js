const cartModels = require("../models/cart");

/**
 * Asynchronously adds a product to the cart.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @returns {Promise} - A promise that resolves when the product is added to the cart.
 */
async function addToCart(request, response) {
  const { userId, productId, quantity } = request.body;

  try {
    await cartModels.addToCart(userId, productId, quantity);
    response
      .status(200)
      .json({ message: "Product added to cart successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

/**
 * Retrieves all cart items for a given user.
 *
 * @param {string} userId - The ID of the user.
 * @returns {Promise} - A promise that resolves to the cart items data.
 * @throws {Error} - If an error occurs while retrieving the cart items.
 */ async function getAllCartItems(request, response) {
  const { userId } = request.body;
  try {
    const data = await cartModels.getAllCartItems(userId);
    response.status(200).json(data[0]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

/**
 * Increases the quantity of an item in the user's cart.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @returns {Promise} - A promise that resolves when the item quantity is increased successfully.
 * @throws {Error} - If there is an error while increasing the item quantity.
 */
async function increaseItemCartQuantity(request, response) {
  const { userId, productId, quantity } = request.body;

  try {
    await cartModels.increaseItemCartQuantity(userId, productId, quantity);
    response
      .status(200)
      .json({ message: "item quantity increased successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

/**
 * Decreases the quantity of an item in the user's cart.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @returns {Promise} A promise that resolves to the updated cart or an error message.
 */
async function decreaseItemCartQuantity(request, response) {
  const { userId, productId, quantity } = request.body;

  try {
    await cartModels.decreaseItemCartQuantity(userId, productId, quantity);
    response
      .status(200)
      .json({ message: "item quantity decreased successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function getProductCartById(request, response) {
  const { id } = request.body;
  try {
    const data = await cartModels.getProductCartById(id);
    response.status(200).json(data[0]);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

async function deleteCartItem(request, response) {
  const { userId, id } = request.body;
  try {
    await cartModels.deleteCartItem(userId, id);
    response
      .status(200)
      .json({ message: "Item succesfully deleted from cart" });
  } catch (error) {
    response.status(500).json({ messsage: error.message });
  }
}

module.exports = {
  addToCart,
  getAllCartItems,
  increaseItemCartQuantity,
  decreaseItemCartQuantity,
  getProductCartById,
  deleteCartItem,
};
