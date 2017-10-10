import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Alumnos from '@/components/Alumnos'
import Login from '@/components/Login'

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
    }
  ]
})
