<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects />
      </v-flex>

      <v-flex xs8 v-if="currentProject">
        <Tasks />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Projects from '@/components/Projects';
import Tasks from '@/components/Tasks';
import router from '../router';

export default {
  components: {
    Projects,
    Tasks
  },
  mounted() {
    if(!this.isLoggedIn){
      return router.push('/login') 
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn'
    ]),
    ...mapState('projects', [
      'currentProject'
    ])
  }
};
</script>
