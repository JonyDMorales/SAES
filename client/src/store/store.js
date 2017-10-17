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
    isAlumnoLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isAlumnoLoggedIn = true
      } else {
        state.isAlumnoLoggedIn = false
      }
    },
    setAlumno (state, alumno) {
      state.alumno = alumno
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setAlumno ({commit}, alumno) {
      commit('setAlumno', alumno)
    }
  }

})
