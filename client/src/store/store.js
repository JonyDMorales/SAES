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
    profesor: null,
    userType: 0,
    canReinscribir: false,
    isAlreadyInscrito: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (!token) {
        state.userType = 0
      }
    },
    setAlumno (state, alumno) {
      state.alumno = alumno
      if (!alumno) {
        state.canReinscribir = false
      } else {
        state.userType = 1
      }
    },
    setAdmin (state, admin) {
      state.admin = admin
      if (admin) {
        state.userType = 2
      }
    },
    setProfesor (state, profesor) {
      state.profesor = profesor
      if (profesor) {
        state.userType = 3
      }
    },
    setCanReinscribir (state, canReinscribir) {
      state.canReinscribir = canReinscribir
    },
    setIsAlreadyInscrito (state, setIsAlreadyInscrito) {
      state.setIsAlreadyInscrito = setIsAlreadyInscrito
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
    setProfesor ({commit}, profesor) {
      commit('setProfesor', profesor)
    },
    setCanReinscribir ({commit}, canReinscribir) {
      commit('setCanReinscribir', canReinscribir)
    },
    setIsAlreadyInscrito ({commit}, isAlreadyInscrito) {
      commit('setIsAlreadyInscrito', isAlreadyInscrito)
    }
  }

})
