import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.min.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueTelInput);

app.mount("#app");
