/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./node_modules/vuetify/**/*.js", // Include Vuetify's files for purging
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
