const dbPool = require("../config/database");

async function addToCart(userId, productId, quantity) {
  const query =
    "INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)";
  dbPool.execute(query, [userId, productId, quantity]);
}

async function getAllCartItems(userId) {
  const query = "SELECT * FROM cart_items WHERE user_id = ?";
  return dbPool.execute(query, [userId]);
}

async function increaseItemCartQuantity(userId, productId, quantity) {
  const updateQuantity = quantity + 1;
  const query =
    "UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?";
  dbPool.execute(query, [updateQuantity, userId, productId]);
}

async function decreaseItemCartQuantity(userId, productId, quantity) {
  const updateQuantity = quantity - 1;
  const query =
    "UPDATE cart_items SET QUANTITY = ? WHERE user_id = ? AND product_id = ?";
  dbPool.execute(query, [updateQuantity, userId, productId]);
}

async function getProductCartById(id) {
  const query = "SELECT * FROM cart_items WHERE id= ?";
  return dbPool.execute(query, [id]);
}

async function deleteCartItem(userId, id) {
  const query = "DELETE FROM cart_items WHERE user_id = ? AND id = ?";
  dbPool.execute(query, [userId, id]);
}
module.exports = {
  addToCart,
  getAllCartItems,
  increaseItemCartQuantity,
  decreaseItemCartQuantity,
  getProductCartById,
  deleteCartItem,
};
