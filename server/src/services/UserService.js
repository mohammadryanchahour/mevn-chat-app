const User = require("../models/User");

class UserService {
  constructor() {
    this.UserModel = User;
  }

  async getAllUsers() {
    try {
      const users = await this.UserModel.find();
      return users;
    } catch (error) {
      throw new Error("Failed to fetch users: " + error.message);
    }
  }

  async getUserById(userId) {
    return await this.UserModel.findById(userId);
  }

  async createUser(userData) {
    return await this.UserModel.create(userData);
  }

  async updateUser(userId, userData) {
    return await this.UserModel.findByIdAndUpdate(userId, userData);
  }

  async deleteUser(userId) {
    return await this.UserModel.findByIdAndDelete(userId);
  }
}

module.exports = UserService;
