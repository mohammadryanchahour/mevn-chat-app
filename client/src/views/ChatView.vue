<template>
  <v-container fluid>
    <ChatSidebar></ChatSidebar>
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
/* Add any additional styling or adjustments as needed */
</style>
