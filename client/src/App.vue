<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <v-theme-provider theme="dark" with-background class="pa-10">
    <v-app>
      <v-container>
        <RouterView />
      </v-container>
    </v-app>
  </v-theme-provider>
</template>
