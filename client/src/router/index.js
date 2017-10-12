import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Alumnos from '@/components/Alumnos'
import Login from '@/components/Login'
import Horarios from '@/components/Horarios'
import Kardex from '@/components/Kardex'
import GenerarCitas from '@/components/GenerarCitas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/alumnos',
      name: 'alumnos',
      component: Alumnos
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/horarios',
      name: 'horarios',
      component: Horarios
    },
    {
      path: '/kardex',
      name: 'kardex',
      component: Kardex
    },
    {
      path: '/generarCitas',
      name: 'generarCitas',
      component: GenerarCitas
    }
  ]
})
