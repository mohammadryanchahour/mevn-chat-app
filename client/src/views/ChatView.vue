<template>
  <v-container class="full-height" fluid>
    <v-row>
      <!-- Chat Sidebar -->
      <v-col cols="3">
        <ChatSidebar></ChatSidebar>
      </v-col>

      <!-- Chat Box -->
      <v-col cols="9">
        <ChatBox></ChatBox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Import ChatSidebar and ChatBox components
import ChatSidebar from "@/components/Chat/ChatSidebar.vue";
import ChatBox from "@/components/Chat/ChatBox.vue";
// Import ChatHeader component
import ChatHeader from "@/components/Chat/ChatHeader.vue";

export default {
  components: {
    ChatSidebar,
    ChatBox,
    ChatHeader, // Include the ChatHeader component
  },
};
</script>

<style>
.full-height {
  height: 100vh;
  overflow: hidden;
}
</style>
