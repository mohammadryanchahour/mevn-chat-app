<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8 my-12"
      elevation="8"
      max-width="448"
      rounded="lg"
      dark
    >
      <div class="text-username text-medium-emphasis">Account</div>

      <v-form @submit.prevent="login">
        <v-text-field
          id="username"
          v-model="loginStore.username"
          name="username"
          density="compact"
          placeholder="Enter your username"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-password text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password

          <a
            class="text-caption text-decoration-none text-green"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot password?
          </a>
        </div>

        <v-text-field
          :append-inner-icon="
            loginStore.visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
          "
          :type="loginStore.visible ? 'text' : 'password'"
          v-model="loginStore.password"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          :prepend-inner-icon-color="loginStore.visible ? 'primary' : ''"
          variant="outlined"
          @click:append-inner="togglePasswordVisibility"
        ></v-text-field>

        <v-btn
          type="submit"
          block
          class="mb-8"
          color="green"
          size="large"
          variant="tonal"
        >
          Log In
        </v-btn>
        <div class="social-login d-flex justify-center align-center">
          <v-btn
            fab
            color="red-darken-4"
            variant="text"
            @click="handleSocialLogin('google')"
          >
            <v-icon>mdi-google</v-icon>
          </v-btn>
          <v-btn
            fab
            color="blue darken-4"
            variant="text"
            @click="handleSocialLogin('facebook')"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <!-- Add buttons for other social platforms as needed -->
        </div>
      </v-form>

      <v-card-text class="text-center">
        <a
          class="text-green text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Don't have an account? Register
          <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { useLoginStore } from "@/stores/login";
import LoginService from "@/services/LoginService";

export default {
  setup() {
    const loginStore = useLoginStore();
    // console.log(loginStore);

    const togglePasswordVisibility = () => {
      loginStore.togglePasswordVisibility();
    };

    const login = async () => {
      try {
        const response = await LoginService.login(
          loginStore.username,
          loginStore.password
        );

        console.log("API Response:", response);

        if (response && response.token) {
          localStorage.setItem("token", response.token);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    return {
      loginStore,
      login,
      togglePasswordVisibility,
    };
  },
};
</script>
