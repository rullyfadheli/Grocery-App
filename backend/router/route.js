// Initialize express router
const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");
const productsController = require("../controller/products");

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

router.post("/add-product", (request, response) => {
  productsController.addProduct(request, response);
});

router.get("/product-by-name", (request, response) => {
  productsController.getProductByName(request, response);
});

module.exports = router;
