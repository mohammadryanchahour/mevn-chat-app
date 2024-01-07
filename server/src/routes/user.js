const express = require("express");

const router = express.Router();

const UserController = require("../controllers/UserController");
const authenticate = require("../middlewares/authenticate.middleware");

router.get("/", authenticate, UserController.getAllUsers);
router.get("/:id", authenticate, UserController.getUserById);
router.put("/update", authenticate, UserController.updateUser);
router.delete("/delete", authenticate, UserController.deleteUser);

module.exports = router;
