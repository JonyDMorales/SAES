<template>
  <div>
    <md-layout md-align="center">
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Unidad de Aprendizaje</md-table-head>
            <md-table-head>Periodo</md-table-head>
            <md-table-head>Forma Evaluación</md-table-head>
            <md-table-head>Calificación</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row  v-for="uaa in uasAprobadas" :key="uaa.id">
            <md-table-cell>{{ uaa.unidad_aprendizaje }}</md-table-cell>
            <md-table-cell>{{ uaa.periodo }}</md-table-cell>
            <md-table-cell>{{ uaa.forma_evaluacion }}</md-table-cell>
            <md-table-cell>{{ uaa.calificacion }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-layout>

    <md-layout md-align="center">
      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>Unidad de Aprendizaje</md-table-head>
            <md-table-head>Periodo</md-table-head>
            <md-table-head>Calificación</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row  v-for="uar in uasReprobadas" :key="uar.id">
            <md-table-cell>{{ uar.unidad_aprendizaje }}</md-table-cell>
            <md-table-cell>{{ uar.periodo }}</md-table-cell>
            <md-table-cell>{{ uar.calificacion }}</md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-layout>
  </div>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'

export default {

  name: 'kardex',
  methods:
  {
    async getKardexData () {
      const response = await AlumnoService.kardex(this.$store.state.alumno.boleta)
      this.uasCursadas = response.data.unidades_cursadas
      this.uasAprobadas = response.data.unidades_aprobadas
      this.uasReprobadas = response.data.unidades_no_aprobadas
      // console.log(response.data)
    }

  },
  data () {
    return {
      uasCursadas: [],
      uasAprobadas: [],
      uasReprobadas: []
    }
  },
  mounted () {
    this.getKardexData()
  }

}

</script>

