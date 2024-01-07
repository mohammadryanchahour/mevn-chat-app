const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/user.middleware");
const authenticate = require("../middlewares/authenticate.middleware");

const AuthController = require("../controllers/AuthController");

router.post("/register", validateUser, AuthController.register);
router.post("/login", AuthController.login);
router.put("/reset-password", authenticate, AuthController.resetPassword);

module.exports = router;
