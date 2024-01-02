const express = require("express");
const router = express.Router();
const AuthService = require("../services/AuthService");

//User SignUp
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await AuthService.signup(username, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Call the AuthService method for user login
    const loggedInUser = await AuthService.login(username, password);
    res.status(200).json(loggedInUser); // Return user details or tokens
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

module.exports = router;
