<template>
  <v-app>
    <Toolbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";

export default {
  name: "App",
  components: {
    Toolbar
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  #app {
    font-family: 'Ubuntu', sans-serif;
  }
</style>
