<template>
<div class="content">
  <div v-if="isAuthenticated">
    Hello authenticated user!
    <button v-on:click="logout()" class="button is-primary">
      Logout
    </button>
  </div>
  <div v-else>
    <h2>Login</h2>
    <div class="field is-horizontal">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
        <div class="control">
          <button v-on:click="login()" class="button is-primary">
          Login
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import { authService } from '../auth.service'

authService.clientApplication()

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    login () {
      this.$store.dispatch('login')
        .then((jwtToken) => {
          console.log(jwtToken)
        })
    }
  }
}
</script>
