import { defineStore } from "pinia";

export const useChatViewStore = defineStore("chatView", {
  state: () => ({
    currentComponent: "ChatBox",
  }),

  actions: {
    setCurrentComponent(component) {
      this.currentComponent = component;
    },
  },
});
