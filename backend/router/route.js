const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");

router.post("/register", (request, response) => {
  usersController.register(request, response);
});
router.get("/users", (request, response) => {
  usersController.getAllUsers(request, response);
});

router.post("/login", (request, response) => {
  usersController.login(request, response);
});

module.exports = router;
