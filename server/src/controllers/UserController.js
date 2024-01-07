const UserService = require("../services/UserService");
const userService = new UserService(); // Instantiate UserService

const UserController = {
  userService: userService, // Assign the instantiated UserService

  getAllUsers: async (req, res) => {
    try {
      console.log("Controller ...");
      const users = await userService.getAllUsers();
      res
        .status(200)
        .json({ message: "User Fetched Successfully!", users: users });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // createUser: async (req, res) => {
  //   const userData = req.body;
  //   console.log("reached here");
  //   try {
  //     const newUser = await userService.createUser(userData);
  //     res
  //       .status(200)
  //       .json({ message: "User Created Successfully!", user: newUser });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // },

  updateUser: async (req, res) => {
    const userData = req.body;
    try {
      const updatedUser = await userService.updateUser(userId, userData); // Use 'userData' instead of 'UserData'
      res
        .status(200)
        .json({ message: "User Updated Successfully!", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    const userData = req.body;
    try {
      await userService.deleteUser(userId); // Use 'userData' instead of 'UserData'
      res.status(200).json({ message: "User Deleted Successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id; // Extract 'id' from URL params
    try {
      const user = await userService.getUserById(userId); // Use 'userId' to get specific user
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res
        .status(200)
        .json({ message: "User Fetched Successfully!", user: user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = UserController;
