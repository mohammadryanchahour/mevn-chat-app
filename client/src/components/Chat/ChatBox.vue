<!-- ChatComponent.vue -->
<template>
  <v-card class="mx-auto" outlined dark>
    <!-- Display messages -->
    <v-card-text>
      <v-list :key="messages.length">
        <!-- Messages go here -->
        <v-list-item v-for="message in messages" :key="message.id">
          <v-list-item-content>
            <v-row
              :class="
                message.sender === 'You' ? 'justify-end' : 'justify-start'
              "
            >
              <v-card
                :class="
                  message.sender === 'You'
                    ? 'message-sender'
                    : 'message-receiver'
                "
              >
                <v-card-text>{{ message.text }}</v-card-text>
              </v-card>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>

  <!-- Input area for sending messages -->
  <v-card class="mx-auto py-auto mt-3" outlined dark>
    <v-card-text>
      <v-row align="center">
        <v-col cols="9">
          <v-text-field
            v-model="newMessage"
            @keyup.enter="sendMessage"
            placeholder="Type your message..."
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn @click="sendMessage" color="success" dark>Send</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref } from "vue";
import { useChatStore } from "@/stores/Chat/chatBox"; // Adjust the path based on your project structure

export default {
  setup() {
    const chatStore = useChatStore();
    const messages = chatStore.messages;
    const newMessage = ref("");

    const sendMessage = () => {
      if (newMessage.value.trim() !== "") {
        chatStore.addMessage({ sender: "You", text: newMessage.value });
        newMessage.value = "";
      }
      console.log("newMessage");
    };

    return { messages, newMessage, sendMessage };
  },
};
</script>

<style scoped>
/* Vuetify utility classes for ChatBox */
.message-sender {
  background-color: #4caf50; /* Green color for sender's message */
  color: white; /* Text color for sender's message */
  border-radius: 15px; /* Add border-radius for rounded corners */
  padding: 8px; /* Add padding for spacing */
}

.message-receiver {
  background-color: #2196f3; /* Blue color for receiver's message */
  color: white; /* Text color for receiver's message */
  border-radius: 15px; /* Add border-radius for rounded corners */
  padding: 8px; /* Add padding for spacing */
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}
</style>
