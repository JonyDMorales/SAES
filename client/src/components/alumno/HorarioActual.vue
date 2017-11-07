<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
      <v-layout row>
        <v-data-table
          v-bind:headers="scheduleHeader"
          :items="schedule"
          hide-actions
          class="elevation-2"
          no-data-text="No hay reinscripción"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.grupo }}</td>
          <td>{{ props.item.unidad_aprendizaje }}</td>
          <td>{{ props.item.profesor }}</td>
          <td>{{ props.item.horarios[0].hora_inicio  + ' - ' + props.item.horarios[0].hora_fin }}</td>
          <td>{{ props.item.horarios[1].hora_inicio  + ' - ' + props.item.horarios[1].hora_fin }}</td>
          <td>{{ props.item.horarios[2].hora_inicio  + ' - ' + props.item.horarios[2].hora_fin }}</td>
          <td>{{ props.item.horarios[3].hora_inicio  + ' - ' + props.item.horarios[3].hora_fin }}</td>
          <td>{{ props.item.horarios[4].hora_inicio  + ' - ' + props.item.horarios[4].hora_fin }}</td>
        </template>
        </v-data-table>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import InscripcionService from '@/services/InscripcionService'

export default {

  name: 'horarioActual',
  methods:
  {
    async getSchedule () {
      try {
        const response = await InscripcionService.show(this.$store.state.alumno.boleta)
        this.schedule = response.data
        this.isReady = true
      } catch (err) {
      }
    }
  },
  data () {
    return {
      schedule: [],
      isReady: false,
      scheduleHeader: [
        { text: 'Grupo', value: 'grupo', align: 'left' },
        { text: 'Unidad Aprendizaje', value: 'unidad_aprendizaje', align: 'left' },
        { text: 'Profesor', value: 'profesor', align: 'left' },
        { text: 'Lunes', value: 'Lunes', align: 'left', sortable: false },
        { text: 'Martes', value: 'Martes', align: 'left', sortable: false },
        { text: 'Miércoles', value: 'Miércoles', align: 'left', sortable: false },
        { text: 'Jueves', value: 'Jueves', align: 'left', sortable: false },
        { text: 'Viernes', value: 'Viernes', align: 'left', sortable: false }
      ]
    }
  },
  mounted () {
    this.getSchedule()
  }
}

</script>
