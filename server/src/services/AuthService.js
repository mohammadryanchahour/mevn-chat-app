const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Redis = require("../config/redis");
const User = require("../models/User");
const { Error } = require("mongoose");

class AuthService {
  constructor() {
    this.UserModel = User;
    this.redis = Redis;
  }

  async register(userData) {
    try {
      const { username, phoneNumber, password } = userData;

      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

      const newUser = await this.UserModel.create({
        username,
        phoneNumber,
        password: hashedPassword,
      });

      return newUser;
    } catch (error) {
      throw new Error("Failed to register user: " + error.message);
    }
  }

  async login(username, password) {
    try {
      const user = await this.UserModel.findOne({ username: username });
      if (!user) {
        throw new Error("User does not exist");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        throw new Error("Password is invalid");
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      return token;
    } catch (error) {
      console.error("Error in login:", error);
      throw new Error("Something went wrong during login");
    }
  }

  async resetPassword() {}
}

module.exports = AuthService;
