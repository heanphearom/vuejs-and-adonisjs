<template>
    <v-app-bar app color="green" dark>
      <v-toolbar-title class="mr-4">VUE TODO</v-toolbar-title>
      <v-toolbar-items>
        <v-btn text v-if="isLoggedIn">
          <v-icon class="mr-2">mdi-playlist-check</v-icon>
          projects
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/register" v-if="!isLoggedIn">
          <v-icon class="mr-2">mdi-account-box</v-icon>
          register
        </v-btn>
        <v-btn text to="/login" v-if="!isLoggedIn">
          <v-icon class="mr-2">mdi-fingerprint</v-icon>
          login
        </v-btn>
        <v-btn text to="/logout" v-if="isLoggedIn" @click="logout">
          <v-icon class="mr-2">mdi-exit-to-app</v-icon>
          logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions('authentication', [
      'logout'
    ])
  }
}
</script>