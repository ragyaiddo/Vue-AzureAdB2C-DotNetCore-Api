<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand container">
      <router-link class="navbar-item" to="/" exact>
        <img src="http://bit.ly/vue-img" alt="Vue SPA" />
      </router-link>
      <router-link class="navbar-item is-tab" to="/" exact>Home</router-link>
      <router-link class="navbar-item is-tab" to="/category/chemistry">Chemistry</router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: {id: 'physics'}}">Physics</router-link>
       <!-- <router-link class="navbar-item is-tab" to="/Login" exact>Login</router-link> -->
      <a class="navbar-item is-tab" v-if="isAuthenticated" v-on:click="logout">Logout</a>
      <a class="navbar-item is-tab" v-else v-on:click="login">Login</a>
      <span v-if="isAuthenticated">Hello, {{ userName }}</span>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { authService } from './auth.service'

authService.clientApplication()

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'userName'])
  },
  methods: {
    ...mapActions({
      logout: 'logout',
      login: 'login'})
  }
}
</script>
