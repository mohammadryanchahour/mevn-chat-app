<template>
  <v-app-bar app class="mx-auto" dark>
    <v-avatar size="36">
      <v-img :src="chatHeaderStore.userAvatarUrl" alt="User Avatar"></v-img>
    </v-avatar>

    <v-toolbar-title>Chatify</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="chatHeaderStore.toggleDrawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="chatHeaderStore.drawer"
    temporary
    scroll-behavior="collapse"
  >
    <v-avatar size="64" class="mt-3">
      <v-img :src="chatHeaderStore.userAvatarUrl" alt="User Avatar"></v-img>
    </v-avatar>

    <v-divider></v-divider>

    <v-list>
      <v-list-item @click="chatHeaderStore.navigateConnections" class="mt-3">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Connections</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click="chatHeaderStore.navigateSettings" class="mt-3">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click="chatHeaderStore.navigateLogout" class="mt-3">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- Connections Dialog -->
  <v-dialog v-model="chatHeaderStore.connectionsDialog" max-width="600">
    <v-card>
      <v-card-title>Connections</v-card-title>
      <!-- Your connections content goes here -->
      <v-card-actions>
        <v-btn @click="chatHeaderStore.closeDialog('connections')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Settings Dialog -->
  <v-dialog v-model="chatHeaderStore.settingsDialog" max-width="600">
    <v-card>
      <v-card-title>Settings</v-card-title>
      <!-- Your settings content goes here -->
      <v-card-actions>
        <v-btn @click="chatHeaderStore.closeDialog('settings')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Logout Confirmation Dialog -->
  <v-dialog v-model="chatHeaderStore.logoutDialog" max-width="400">
    <v-card class="pa-6 pb-6">
      <v-card-title class="d-flex justify-center align-center"
        >Are you sure that you want to logout?</v-card-title
      >
      <v-card-actions class="pa-6 d-flex justify-space-around">
        <v-btn @click="chatHeaderStore.logout" variant="elevated" color="green"
          >Yes</v-btn
        >
        <v-btn
          @click="chatHeaderStore.closeDialog('logout')"
          variant="elevated"
          color="red"
          >No</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { useChatHeaderStore } from "@/stores/Chat/chatHeader";

export default {
  setup() {
    const chatHeaderStore = useChatHeaderStore();

    return {
      chatHeaderStore,
    };
  },
};
</script>
