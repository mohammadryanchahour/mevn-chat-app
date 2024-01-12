<template>
  <v-card>
    <v-navigation-drawer width="50" dark>
      <v-list class="list-container">
        <v-list-item
          @click="handleNavigation('archive')"
          prepend-icon="mdi-archive"
        ></v-list-item>
        <v-list-item
          @click="handleNavigation('chat')"
          prepend-icon="mdi-chat"
        ></v-list-item>
        <v-list-item
          @click="handleNavigation('alert')"
          prepend-icon="mdi-bell"
        ></v-list-item>
        <v-list-item
          @click="handleNavigation('trash')"
          prepend-icon="mdi-delete"
        ></v-list-item>
        <v-list-item
          @click.prevent="toggleAccountMenu"
          prepend-icon="mdi-account"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-menu v-model="chatSidebarStore.isMenuOpen">
      <v-list>
        <v-list-item @click="handleDialog('settings')">Settings</v-list-item>
        <v-list-item @click="handleDialog('logout')">Logout</v-list-item>
      </v-list>
    </v-menu>

    <!-- Logout Settings -->
    <v-dialog v-model="chatSidebarStore.settingsDialog" max-width="600">
      <v-card>
        <v-card-title>Settings Title</v-card-title>
        <v-card-actions>
          <v-btn @click="navigateClose()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Logout Dialog -->
    <v-dialog v-model="chatSidebarStore.logoutDialog" max-width="400">
      <v-card class="pa-6 pb-6">
        <v-card-title class="d-flex justify-center align-center"
          >Are you sure that you want to logout?</v-card-title
        >
        <v-card-actions class="pa-6 d-flex justify-space-around">
          <v-btn @click="Logout()" variant="elevated" color="green">Yes</v-btn>
          <v-btn @click="navigateClose()" variant="elevated" color="red"
            >No</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<!-- ChatSidebar.vue -->
<script>
import { mapStores } from "pinia";
import { useChatSidebarStore } from "@/stores/Chat/chatSidebar";

export default {
  name: "ChatSidebar",
  computed: {
    ...mapStores(useChatSidebarStore),
  },
  methods: {
    toggleAccountMenu() {
      this.chatSidebarStore.toggleMenu();
      console.log(this.chatSidebarStore.isMenuOpen);
    },

    handleDialog(action) {
      if (action === "settings") {
        this.chatSidebarStore.navigateSettings();
        console.log(this.chatSidebarStore.settingsDialog);
      } else if (action === "logout") {
        this.chatSidebarStore.navigateLogout();
        console.log(this.chatSidebarStore.logoutDialog);
      }
    },

    Logout() {
      this.chatSidebarStore.logout();
    },
    navigateClose() {
      this.chatSidebarStore.closeDialog();
    },
  },
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  position: relative;
  height: 100%;
}

.list-container .v-list-item:last-child {
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
}
</style>
