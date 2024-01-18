<template>
  <v-card>
    <v-card-title>Chat Box</v-card-title>
    <v-card-text>
      <div v-for="message in messages" :key="message.id">
        {{ message.text }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-text-field
        v-model="newMessage"
        label="Type your message"
        @keyup.enter="sendMessage"
      />
      <v-btn @click="sendMessage">Send</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useChatStore } from "@/stores/Chat/chatBox";
import io from "socket.io-client";

export default defineComponent({
  name: "ChatBox",
  data() {
    return {
      newMessage: "",
    };
  },
  computed: {
    messages() {
      return useChatStore().messages;
    },
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === "") return;

      const chatStore = useChatStore();

      // Emit the message to the server through Socket.io
      socket.emit("chatMessage", {
        id: Date.now(),
        text: this.newMessage,
      });

      // Add the message to the local store
      chatStore.addMessage({
        id: Date.now(),
        text: this.newMessage,
      });

      this.newMessage = "";
    },
  },
  setup() {
    // Connect to the Socket.io server
    const socket = io("http://localhost:3000");
    console.log("error");

    // Listen for incoming messages and update the local store
    socket.on("chatMessage", (message) => {
      const chatStore = useChatStore();
      chatStore.addMessage(message);
    });

    // Clean up the socket connection when the component is unmounted
    onMounted(() => {
      socket.on("disconnect", () => {
        console.log("Socket disconnected");
      });
    });

    return { socket };
  },
});
</script>
