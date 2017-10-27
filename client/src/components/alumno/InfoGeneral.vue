<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
      <v-subheader class="ml-4">Información General</v-subheader>
      <v-divider></v-divider>
      <br>
      <v-layout row class="ml-5">
        <v-flex xs2>
          <v-chip label outline color="primary">No. Boleta: {{ alumnoData.boleta }}</v-chip>
        </v-flex>
        <v-flex xs3>
          <v-chip label outline color="primary">Nombre: {{ alumnoData.nombre }}</v-chip>
        </v-flex>
        <v-flex xs2>
          <v-chip label outline color="primary">E-mail: {{ alumnoData.email }}</v-chip>
        </v-flex>
      </v-layout>
      <v-subheader class="ml-4">Información Académica</v-subheader>
      <v-divider></v-divider>
      <br>
      <v-layout row class="ml-5">
        <v-flex xs2>
          <v-chip label outline color="primary">Promedio: {{ alumnoData.promedio_general.toFixed(2) }}</v-chip>
        </v-flex>
        <v-flex xs2>
          <v-chip label outline :color="alumnoData.unidades_no_aprobadas.length > 0 ? 'red' : 'green'">Estado: {{ alumnoData.unidades_no_aprobadas.length > 0 ? 'Irregular' : 'Regular' }}</v-chip>
        </v-flex>
      </v-layout>
      <v-layout row class="ml-5">
        <v-flex xs2>
          <v-chip label outline color="primary">Créditos Obtenidos: {{ '120.34' }}</v-chip>
        </v-flex>
        <v-flex xs2>
          <v-chip label outline color="primary">Créditos Restantes: {{ '156.17' }}</v-chip>
        </v-flex>
      </v-layout>
      <v-subheader class="ml-4">Unidades de Aprendizaje Reprobadas</v-subheader>
      <v-divider></v-divider>
      <br>
      <v-layout row class="ml-5" v-for="ua in alumnoData.unidades_no_aprobadas" :key="ua.id_unidad_aprendizaje">
        <v-flex xs2>
          <v-chip label outline color="primary">{{ ua.unidad_aprendizaje }}</v-chip>
        </v-flex>
      </v-layout>
      <v-layout row class="ml-5" v-if="alumnoData.unidades_no_aprobadas.length === 0">
        <v-flex xs2>
          <v-chip label outline color="primary">No Hay Adeudos</v-chip>
        </v-flex>
      </v-layout>
      <br>
    </v-card>
  </v-container>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'

export default {

  name: 'infoGeneral',
  methods:
  {
    async getAlumnoData () {
      const response = await AlumnoService.show(this.$store.state.alumno.boleta)
      this.alumnoData = response.data
      this.isReady = true
      console.log(JSON.stringify(response.data, null, 2))
    }

  },
  data () {
    return {
      isReady: false,
      alumnoData: {}
    }
  },
  mounted () {
    this.getAlumnoData()
  }

}

</script>

