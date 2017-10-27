import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Horarios from '@/components/alumno/Horarios'
import Kardex from '@/components/alumno/Kardex'
import Alumnos from '@/components/admin/Alumnos'
import GenerarCitas from '@/components/admin/GenerarCitas'
import Marcadores from '@/components/alumno/Marcadores'
import Reinscripcion from '@/components/alumno/Reinscripcion'
import HorarioActual from '@/components/alumno/HorarioActual'
import InfoGeneral from '@/components/alumno/InfoGeneral'

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
    },
    {
      path: '/marcadores',
      name: 'marcadores',
      component: Marcadores
    },
    {
      path: '/generarCitas',
      name: 'generarCitas',
      component: GenerarCitas
    },
    {
      path: '/reinscripcion',
      name: 'reinscripcion',
      component: Reinscripcion
    },
    {
      path: '/horario',
      name: 'horarioActual',
      component: HorarioActual
    },
    {
      path: '/infoGeneral',
      name: 'infoGeneral',
      component: InfoGeneral
    }
  ]
})
