import RegisterService from "@/services/RegisterService";
import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => ({
    username: "",
    phoneNumber: "",
    password: "",
    visible: false,
    snackbar: {
      show: false,
      color: "",
      message: "",
      timeout: 5000,
    },
    isRegistered: false,
  }),

  actions: {
    setUsername(username) {
      this.username = username;
    },

    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
    },

    setPassword(password) {
      this.password = password;
    },

    // setRememberMe(rememberMe) {
    //   this.rememberMe = rememberMe;
    // },

    togglePasswordVisibility() {
      this.visible = !this.visible;
    },

    async register() {
      try {
        const response = await RegisterService.register(
          this.username,
          this.phoneNumber,
          this.password
        );

        console.log("API Response: ", response);

        if (response) {
          this.showSnackbar("User Registered Successfully!", "success");
          this.isRegistered = true;
        }
      } catch (error) {
        console.error("API error:", error);
        this.showSnackbar("Registration Failed", "error");
        this.isRegistered = false;
      }
    },

    handleSocialLogin(provider) {
      console.log("Logging In...");
    },

    showSnackbar(message, type) {
      this.snackbar.message = message;
      this.snackbar.color = type;
      this.snackbar.show = true;

      setTimeout(() => {
        this.snackbar.show = false;
      }, this.snackbar.timeout);
    },
  },
});
