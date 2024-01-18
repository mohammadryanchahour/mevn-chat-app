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

      <v-form @submit.prevent="register">
        <v-text-field
          id="username"
          v-model="registerStore.username"
          name="username"
          density="compact"
          placeholder="Enter your username"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>

        <div class="text-phone text-medium-emphasis d-flex align-center">
          Phone Number
        </div>

        <vue-tel-input
          name="phone"
          density="compact"
          variant="outlined"
          v-model="registerStore.phoneNumber"
          mode="international"
        ></vue-tel-input>

        <br />
        <!-- Add line break for spacing -->

        <div
          class="text-password text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password
        </div>

        <v-text-field
          :append-inner-icon="
            registerStore.visible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
          "
          :type="registerStore.visible ? 'text' : 'password'"
          v-model="registerStore.password"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          :prepend-inner-icon-color="registerStore.visible ? 'primary' : ''"
          variant="outlined"
          @click:append-inner="togglePasswordVisibility"
        ></v-text-field>

        <br />
        <v-btn
          type="submit"
          block
          class="mb-8"
          color="green"
          size="large"
          variant="tonal"
        >
          Register
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
      <v-snackbar
        v-model="registerStore.snackbar.show"
        :color="registerStore.snackbar.color"
        :timeout="registerStore.snackbar.timeout"
        variant="elevated"
        top
        right
      >
        {{ registerStore.snackbar.message }}
        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="registerStore.snackbar.show = false"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
    </v-card>
  </div>
</template>

<script>
import { useRegisterStore } from "@/stores/register";
import { useRouter } from "vue-router";

export default {
  setup() {
    const registerStore = useRegisterStore();
    const router = useRouter();

    const register = async () => {
      await registerStore.register();
      // // Navigate to the /chat route
      if (registerStore.isRegistered) {
        router.push("/verify");
      } else {
        console.log("Not Registered");
      }
    };

    const showSnackBar = () => {
      registerStore.showSnackbar();
    };

    const togglePasswordVisibility = () => {
      registerStore.togglePasswordVisibility();
    };

    const handleSocialLogin = (provider) => {
      registerStore.handleSocialLogin(provider);
    };

    return {
      registerStore,
      register,
      showSnackBar,
      togglePasswordVisibility,
      handleSocialLogin,
    };
  },
};
</script>

<style></style>
