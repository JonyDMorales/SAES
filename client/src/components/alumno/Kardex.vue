<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
      <v-layout row>
        <v-flex xs2>
          <v-chip label outline color="red">Promedio: {{ promedio.toFixed(2) }}</v-chip>
        </v-flex>
        <v-flex xs1 offset-xs8>
          <v-chip label outline :color="uasReprobadas.length > 0 ? 'red' : 'green'">Estado: {{ uasReprobadas.length > 0 ? 'Irregular' : 'Regular' }}</v-chip>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs6>
          <v-subheader>Unidades de Aprendizaje Aprobadas</v-subheader>
          <v-data-table
          v-bind:headers="uasAprobadasHeader"
          :items="uasAprobadas"
          hide-actions
          class="elevation-2"
          >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.unidad_aprendizaje }}</td>
            <td>{{ props.item.periodo }}</td>
            <td>{{ props.item.forma_evaluacion }}</td>
            <td class="green lighten-4">{{ props.item.calificacion }}</td>
          </template>
          </v-data-table>
        </v-flex>
        <v-flex xs6>
          <v-subheader>Unidades de Aprendizaje NO Aprobadas</v-subheader>
          <v-data-table
          v-bind:headers="uasReprobadasHeader"
          :items="uasReprobadas"
          hide-actions
          class="elevation-2"
          >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.unidad_aprendizaje }}</td>
            <td>{{ props.item.periodo }}</td>
            <td class="red lighten-4">{{ props.item.calificacion }}</td>
          </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
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
      this.promedio = response.data.promedio_general
      this.isReady = true
      // console.log(response.data)
    }

  },
  data () {
    return {
      isReady: false,
      uasCursadas: [],
      uasAprobadas: [],
      uasReprobadas: [],
      promedio: 0.0,
      uasAprobadasHeader: [
        { text: 'Unidad de Aprendizaje', value: 'unidad_aprendizaje', align: 'left' },
        { text: 'Periodo', value: 'periodo', align: 'left' },
        { text: 'Forma Evaluación', value: 'forma_evaluacion', align: 'left' },
        {text: 'Calificación', value: 'calificacion', align: 'left'}
      ],
      uasReprobadasHeader: [
        { text: 'Unidad de Aprendizaje', value: 'unidad_aprendizaje', align: 'left' },
        { text: 'Periodo', value: 'periodo', align: 'left' },
        {text: 'Calificación', value: 'calificacion', align: 'left'}
      ]
    }
  },
  mounted () {
    this.getKardexData()
  }

}

</script>

