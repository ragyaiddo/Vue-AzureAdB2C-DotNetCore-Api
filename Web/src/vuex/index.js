import Vue from 'vue'
import Vuex from 'vuex'
import {authService, applicationConfig} from '../auth.service'

Vue.use(Vuex)

const state = {
  isAuthenticated: false,
  userName: ''
}

const store = new Vuex.Store({
  // modules: {}
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    },
    userName: (state) => {
      return state.userName
    }
  },
  actions: {
    logout (context) {
      context.commit('logout')
    },
    login (context) {
      return new Promise((resolve) => {
        authService.login()
          .then((data) => {
            context.commit('login', data)

            resolve()
          })
          .catch(() => window.alert('Could not login'))
      })
    }
  },
  mutations: {
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('idToken', null)
        window.localStorage.setItem('tokenExpiration', null)
        window.localStorage.setItem('accessToken', null)
      }
      state.isAuthenticated = false
      state.userName = ''
    },
    login (state, idToken) {
      if (typeof window !== 'undefined' && idToken !== null) {
        window.localStorage.setItem('idToken', idToken)

        const tokenObj = authService.parseJwt(idToken)
        window.localStorage.setItem('tokenExpiration', tokenObj.exp)
        state.userName = tokenObj.name
        state.isAuthenticated = true

        authService.clientApplication()
          .acquireTokenSilent(applicationConfig.scopes)
          .then((accessToken) => {
            if (accessToken) {
              window.localStorage.setItem('accessToken', accessToken)
            }
          })
      }
    }
  }
})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function (event) {
    let expiration = window.localStorage.getItem('tokenExpiration')
    var unixTimestamp = new Date().getTime() / 1000
    if (expiration !== null && parseInt(expiration) > unixTimestamp) {
      store.state.isAuthenticated = true
    }

    const storedToken = window.localStorage.getItem('idToken')
    if (storedToken != null && storedToken !== 'null') {
      const tokenObj = authService.parseJwt(storedToken)
      store.state.userName = tokenObj.name
    }
  })
}

export default store
