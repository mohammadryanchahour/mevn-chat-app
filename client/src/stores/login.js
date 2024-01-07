import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => ({
    username: "",
    password: "",
    visible: false,
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

    resetForm() {
      this.username = "";
      this.password = "";
      this.visible = false;
    },

    login() {
      try {
        // Implement login functionality using your service
        // For example:
        // const response = await authService.login(this.username, this.password);
        // Handle the response as needed, set tokens, etc.
        console.log("Logging in with username:", this.username);
      } catch (error) {
        console.error("Login error:", error);
        // Handle login errors here
      }
    },

    handleSocialLogin(provider) {
      console.log("Logging In...");
    },
  },
});
