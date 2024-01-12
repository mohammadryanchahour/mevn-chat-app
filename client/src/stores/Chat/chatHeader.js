import { defineStore } from "pinia";

export const useChatHeaderStore = defineStore("chatHeader", {
  state: () => ({
    drawer: false,
    userAvatarUrl: "path/to/user_avatar.jpg",
    connectionsDialog: false,
    settingsDialog: false,
    logoutDialog: false,
  }),
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    navigateConnections() {
      this.connectionsDialog = true;
    },
    navigateSettings() {
      this.settingsDialog = true;
    },
    navigateLogout() {
      this.logoutDialog = true;
    },

    closeDialog(type) {
      if (type === "connections") {
        this.connectionsDialog = false;
      } else if (type === "settings") {
        this.settingsDialog = false;
      } else if (type === "logout") {
        this.logoutDialog = false;
      }
    },
    logout() {
      // Implement logout logic here
      console.log("Logout");
      // Close the logout dialog
      this.closeDialog("logout");
    },
  },
});
