import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Horarios from '@/components/alumno/Horarios'
import Kardex from '@/components/alumno/Kardex'
import Alumnos from '@/components/admin/Alumnos'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
