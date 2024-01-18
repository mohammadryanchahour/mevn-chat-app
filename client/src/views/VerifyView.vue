<template>
  <v-card
    class="py-8 px-6 text-center mx-auto ma-4"
    elevation="12"
    max-width="400"
    width="100%"
  >
    <h3 class="text-h6 mb-4">Verify Your Account</h3>

    <div class="text-body-2">
      We sent a verification code to your number <br />
    </div>

    <v-sheet color="surface">
      <v-otp-input v-model="otp" type="password" variant="solo"></v-otp-input>
    </v-sheet>

    <v-btn
      class="my-4"
      color="green"
      height="40"
      text="Verify"
      variant="flat"
      width="70%"
    ></v-btn>

    <div class="text-caption">
      Didn't receive the code? <a href="#" @click.prevent="otp = ''">Resend</a>
    </div>
  </v-card>
</template>

<script>
// import { useLoginStore } from "@/stores/login";
// import { useRouter } from "vue-router";

// export default {
//   setup() {
//     const loginStore = useLoginStore();
//     const router = useRouter();

//     const login = async () => {
//       await loginStore.login();
//       // // Navigate to the /chat route
//       if (loginStore.isLoggedIn) {
//         router.push("/chat");
//       } else {
//         console.log("Not Logged in");
//       }
//     };

//     const showSnackBar = () => {
//       loginStore.showSnackbar();
//     };

//     const togglePasswordVisibility = () => {
//       loginStore.togglePasswordVisibility();
//     };

//     const handleSocialLogin = (provider) => {
//       loginStore.handleSocialLogin(provider);
//     };

//     return {
//       loginStore,
//       login,
//       showSnackBar,
//       togglePasswordVisibility,
//       handleSocialLogin,
//     };
//   },
// };
</script>
