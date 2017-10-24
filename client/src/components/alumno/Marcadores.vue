<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
      <v-container fluid v-for="bookmark in bookmarks" :key="bookmark">
        <v-layout row>
          <v-chip color="blue" text-color="white">
              <v-avatar class="blue darken-2">{{ bookmark.nombre[0].toUpperCase() }}</v-avatar>
              {{ bookmark.nombre }}
          </v-chip>
          <v-spacer></v-spacer>
          <v-btn dark color="green" @click="">
            Inscribir
          </v-btn>
          <v-btn dark color="accent" @click="">
            Eliminar
          </v-btn>
        </v-layout>
        <v-layout row>
          <v-data-table
            v-bind:headers="bookmarkHeader"
            :items="bookmark.horario"
            hide-actions
            class="elevation-2"
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
            <td>{{ props.item.lugares_disponibles }}</td>
          </template>
          </v-data-table>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'
// import Bucket from 'buckets-js'

export default {

  name: 'marcadores',
  methods:
  {
    async getBookmarks () {
      try {
        const response = await AlumnoService.bookmarks(this.$store.state.alumno.boleta)
        this.bookmarks = response.data
        console.log(JSON.stringify(this.bookmarks, null, 2))
        this.isReady = true
        this.isAuthorized = true
      } catch (err) {
      }
    }
  },
  data () {
    return {
      bookmarks: [],
      isReady: false,
      isAuthorized: false,
      snackbar: false,
      snbColor: 'black',
      snbText: '',
      bookmarkHeader: [
        { text: 'Grupo', value: 'grupo', align: 'left' },
        { text: 'Unidad Aprendizaje', value: 'unidad_aprendizaje', align: 'left' },
        { text: 'Profesor', value: 'profesor', align: 'left' },
        { text: 'Lunes', value: 'Lunes', align: 'left', sortable: false },
        { text: 'Martes', value: 'Martes', align: 'left', sortable: false },
        { text: 'Miércoles', value: 'Miércoles', align: 'left', sortable: false },
        { text: 'Jueves', value: 'Jueves', align: 'left', sortable: false },
        { text: 'Viernes', value: 'Viernes', align: 'left', sortable: false },
        { text: 'Lugares', value: 'lugares_disponibles', align: 'left' }
      ]
    }
  },
  mounted () {
    this.getBookmarks()
  }
}

</script>
