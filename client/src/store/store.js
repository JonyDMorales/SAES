import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    alumno: null,
    admin: null,
    isAlumnoLoggedIn: false,
    userType: 0,
    canReinscribir: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isAlumnoLoggedIn = true
      } else {
        state.isAlumnoLoggedIn = false
        state.userType = 0
        state.canReinscribir = false
      }
    },
    setAlumno (state, alumno) {
      state.alumno = alumno
      state.userType = 1
    },
    setAdmin (state, admin) {
      state.admin = admin
      state.userType = 2
    },
    setCanReinscribir (state, canReinscribir) {
      state.canReinscribir = canReinscribir
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setAlumno ({commit}, alumno) {
      commit('setAlumno', alumno)
    },
    setAdmin ({commit}, admin) {
      commit('setAdmin', admin)
    },
    setCanReinscribir ({commit}, canReinscribir) {
      commit('setCanReinscribir', canReinscribir)
    }
  }

})
