// chatSidebar.js
import { defineStore } from "pinia";

export const useChatSidebarStore = defineStore("chatSidebar", {
  state: () => ({
    isMenuOpen: false,
    settingsDialog: false,
    logoutDialog: false,
  }),

  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigateSettings() {
      this.settingsDialog = true;
    },
    navigateLogout() {
      this.logoutDialog = true;
    },

    closeDialog() {
      this.settingsDialog = false;
      this.logoutDialog = false;
    },
    logout() {
      // Implement logout logic here
      console.log("Logout");
      // Close the logout dialog
      this.closeDialog("logout");
    },
  },
});
