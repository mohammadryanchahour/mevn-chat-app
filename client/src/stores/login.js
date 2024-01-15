import { nextTick } from "vue";
import LoginService from "@/services/LoginService";
import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => ({
    username: "",
    password: "",
    visible: false,
    snackbar: {
      show: false,
      color: "",
      message: "",
      timeout: 5000,
    },
    // isLoggedIn: false,
  }),

  actions: {
    setUsername(username) {
      this.username = username;
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

    async login() {
      try {
        const response = await LoginService.login(this.username, this.password);

        console.log("API Response: ", response);

        if (response && response.token) {
          localStorage.setItem("token", response.token);
          this.showSnackbar("Login Successful", "success");
        }
      } catch (error) {
        console.error("API error:", error);
        this.showSnackbar("Login Failed", "error");
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
