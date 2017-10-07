import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Alumnos from '@/components/Alumnos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/alumnos',
      name: 'alumnos',
      component: Alumnos
    }
  ]
})
