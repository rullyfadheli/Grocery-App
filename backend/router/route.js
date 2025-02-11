// Initialize express router
const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");
const cartController = require("../controller/cart");
const productsController = require("../controller/products");
const verifyToken = require("../middleware/verifyToken");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const upload = require("../middleware/uploadImage");
const generateAccessToken = require("../controller/generateAccessToken");

// ------------------- Users -------------------

/**
 * Route serving user registration.
 * @name post/register
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post("/register", (request, response) => {
  usersController.register(request, response);
});

/**
 * Route serving list of all users.
 * @name get/users
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get("/users", verifyAdminToken, (request, response) => {
  usersController.getAllUsers(request, response);
});

/**
 * Route serving user login.
 * @name post/login
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post("/login", (request, response) => {
  usersController.login(request, response);
});

/**
 * GET /token route handler.
 *
 * @param {object} request - The request object.
 * @param {object} response - The response object.
 */
router.get("/token", (request, response) => {
  generateAccessToken(request, response);
});

router.delete("/logout", (request, response) => {
  usersController.logout(request, response);
});

// ------------------- Products -------------------

/**
 * Route serving list of all products.
 * @name get/all-products
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */

router.get("/all-products", (request, response) => {
  productsController.getAllProducts(request, response);
});
/**
 * Handles the POST request for adding a product.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 */
router.post("/add-product", verifyAdminToken, upload, (request, response) => {
  try {
    if (!request.file) {
      response.status(400).json({ message: "No file selected" });
      return;
    }
    productsController.addProduct(request, response);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

/**
 * Route to get a product by name.
 *
 * @param {object} request - The request object.
 * @param {object} response - The response object.
 */
router.get("/product-by-name", (request, response) => {
  productsController.getProductByName(request, response);
});

/**
 * GET request handler for retrieving products by category.
 *
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 * @returns {undefined}
 */
router.get("/product-by-category", (request, response) => {
  productsController.getProductByCategory(request, response);
});

// ------------------- Cart -------------------

/**
 * Route to add an item to the cart.
 * @name post/add-to-cart
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post("/add-to-cart", verifyToken, (request, response) => {
  cartController.addToCart(request, response);
});

/**
 * Route to get all items in the cart.
 * @name get/get-all-cart-items
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get("/get-all-cart-items", verifyToken, (request, response) => {
  cartController.getAllCartItems(request, response);
});

/**
 * Route to increase the quantity of an item in the cart.
 * @name post/increase-item-cart-quantity
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post(
  "/increase-item-cart-quantity",
  verifyToken,
  (request, response) => {
    cartController.increaseItemCartQuantity(request, response);
  }
);

/**
 * Route to decrease the quantity of an item in the cart.
 * @name post/decrease-item-cart-quantity
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post(
  "/decrease-item-cart-quantity",
  verifyToken,
  (request, response) => {
    cartController.decreaseItemCartQuantitycreaseItemCartQuantity(
      request,
      response
    );
  }
);

/**
 * Route to get a product in the cart by its ID.
 * @name get/get-product-cart-by-id
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get("/get-product-cart-by-id", verifyToken, (request, response) => {
  cartController.getProductCartById(request, response);
});

/**
 * Route to delete an item from the cart.
 * @name delete/delete-cart-item
 * @function
 * @memberof module:router/route
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.delete("/delete-cart-item", verifyToken, (request, response) => {
  cartController.deleteCartItem(request, response);
});

module.exports = router;
