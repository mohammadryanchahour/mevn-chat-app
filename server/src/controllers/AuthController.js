const AuthService = require("../services/AuthService");
const authService = new AuthService();

const AuthController = {
  authService: authService,

  register: async (req, res) => {
    try {
      const userData = req.body;
      const user = await authService.register(userData);
      res.status(201).json({ message: "User Registered Successfully!", user });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Registration failed", error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const token = await authService.login(username, password);
      if (token) {
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          expires: new Date(Date.now() + 3600000),
        });
      }
      res.status(200).json({ message: "User Logged In Successfully!", token });
    } catch (error) {
      res.status(401).json({ message: "Login failed", error: error.message });
    }
  },

  resetPassword: async (req, res) => {
    try {
      const { phoneNumber, newPassword } = req.body;
      await authService.resetPassword(phoneNumber, newPassword);
      res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Password reset failed", error: error.message });
    }
  },
};

module.exports = AuthController;
