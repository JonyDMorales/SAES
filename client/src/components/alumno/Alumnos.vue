<template>
  <div>
  <md-layout md-align="center">
    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>Boleta</md-table-head>
          <md-table-head>Nombre</md-table-head>
          <md-table-head>E-mail</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row  v-for="alumno in alumnos" :key="alumno.boleta">
          <md-table-cell>{{ alumno.boleta }}</md-table-cell>
          <md-table-cell>{{ alumno.nombre }}</md-table-cell>
          <md-table-cell>{{ alumno.email }}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-layout>
  </div>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'

export default {

  name: 'alumnos',
  methods:
  {
    async getAlumnos () {
      const response = await AlumnoService.index()
      this.alumnos = response.data
    }

  },
  data () {
    return {
      alumnos: []
    }
  },
  mounted () {
    this.getAlumnos()
  }

}

</script>

