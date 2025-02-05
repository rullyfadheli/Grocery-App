// Initialize express router
const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");
const productsController = require("../controller/products");
const verifyToken = require("../middleware/verifyToken");
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
router.get("/users", (request, response) => {
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
router.post("/add-product", verifyToken, upload, (request, response) => {
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

router.post("/upload", upload, (request, response) => {
  try {
    if (!request.file) {
      response.status(400).json({ message: "No file selected" });
      return;
    }
    response.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
module.exports = router;
