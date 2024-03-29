import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import ChatView from "@/views/ChatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatView,
      // meta: { requiresAuth: true },
    },
  ],
});

export default router;
