<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
        <v-data-table
          v-bind:headers="alumnoHeaders"
          :items="alumnos"
          hide-actions
          class="elevation-2"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.boleta }}</td>
          <td>{{ props.item.nombre }}</td>
          <td>{{ props.item.email }}</td>
        </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
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
      alumnos: [],
      alumnoHeaders: [
        {
          text: 'No. Boleta',
          value: 'boleta',
          align: 'left'
        },
        {
          text: 'Nombre',
          value: 'nombre',
          align: 'left'
        },
        {
          text: 'Correo',
          value: 'correo',
          align: 'left'
        }
      ]
    }
  },
  mounted () {
    this.getAlumnos()
  }

}

</script>

