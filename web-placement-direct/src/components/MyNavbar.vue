<template>
  <b-navbar toggleable="md"
    type="dark"
    variant="dark"
  >
    <b-navbar-brand href="#" to="/">Placement Direct</b-navbar-brand>
    <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Accueil</router-link>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="this.getToken === null" class="ml-auto">
          <b-nav-item>
            <router-link to="/subscribe">Inscription</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/login">Connection</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-else class="ml-auto">
            <b-nav-item>
              <router-link to="/profil">Mon compte</router-link>
            </b-nav-item>
            <b-nav-item>
              <a @click="logOut">Déconnection</a>
            </b-nav-item>
          </b-navbar-nav>
  </b-navbar>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MyNavbar',
  computed: {
    ...mapGetters([
      'getToken'
    ])
  },
  methods: {
    ...mapActions(['actionLogOut']),
    logOut() {
      this.actionLogOut();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  height: 10vh;
  a {
    color: white;
  }
  a:hover {
    color: orange;
  }
}
</style>
