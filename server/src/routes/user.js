const express = require("express");

const router = express.Router();

const UserController = require("../controllers/UserController");
const { validateCreateUser } = require("../middlewares/user.middleware");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/create", validateCreateUser, UserController.createUser);
router.put("/update", UserController.updateUser);
router.delete("/delete", UserController.deleteUser);

module.exports = router;
