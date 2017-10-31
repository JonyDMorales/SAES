<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card flat>
      <v-layout row>
        <v-flex xs2>
          <v-text-field
          prepend-icon="search"
          label="Buscar"
          single-line
          hide-details
          v-model="search"
          class="ml-4"
          ></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs2>
          <v-btn color="primary" @click="getBookmarks()" class="mt-4" :loading="!bookmarksReady">Marcadores</v-btn>
        </v-flex>
      </v-layout>
      <br>
      <v-layout row>
        <v-flex xs12>
          <v-data-table
            v-bind:headers="gloabalHeader"
            :items="horarios"
            v-bind:search="search"
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
            <td :class="occupabilityColor(props.item.lugares_disponibles - props.item.alumnos_inscritos)">{{ props.item.lugares_disponibles - props.item.alumnos_inscritos }}</td>
            <td>
              <v-btn dark color="primary" small fab @click="seleccionar(props.item.id, props.item.grupo)">
                <v-icon>add</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
        </v-flex>
      </v-layout>
    </v-card>
    <v-dialog v-model="dialogBookmarks" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-toolbar-title>Marcadores</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="dialogBookmarks = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container fluid v-for="bookmark in bookmarks" :key="bookmark.id">
            <v-layout row>
              <v-chip color="blue" text-color="white">
                  <v-avatar class="blue darken-2">{{ bookmark.nombre[0].toUpperCase() }}</v-avatar>
                  {{ bookmark.nombre }}
              </v-chip>
              <v-spacer></v-spacer>
              <v-btn dark color="primary" @click="validateHorario(bookmark.horario)" v-if="$store.state.canReinscribir">
                Reinscribir
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
                <td :class="occupabilityColor(props.item.lugares_disponibles - props.item.alumnos_inscritos)">{{ props.item.lugares_disponibles - props.item.alumnos_inscritos }}</td>
              </template>
              </v-data-table>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
      <v-dialog v-model="showScheduleLogs">
        <v-card> 
          <v-card-title>
          </v-card-title>
          <v-card-text>
            <v-alert color="error" icon="warning" value="true">
              <span v-for="error in errorsSchedule" :key="error">{{ error }}<br></span>
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="showScheduleLogs=false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-dialog>
    <!-- **************************************************************** -->
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-card flat>
                <v-toolbar color="primary" dark flat>
                  <v-btn icon>
                    <v-icon>assignment</v-icon>
                  </v-btn>
                  <v-toolbar-title>Reinscripción</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>
                        Fecha: {{ parseDateToSpanish(cita.fecha_inicio) }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider></v-divider>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>
                        Comienza en: {{ remainTimeMsg }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider></v-divider>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>
                        Máximos Créditos: {{ maxCredits }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <v-snackbar
      :timeout="snackbarTimeout"
      right
      absolute
      v-model="snackbar"
      color="blue darken-1"
      >
      Ya Puedes Empezar Tu Reinscripción
      <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import CitasService from '@/services/CitasService'
import AlumnoService from '@/services/AlumnoService'
import HorariosService from '@/services/HorariosService'
import UnidadAprendizajeService from '@/services/UnidadAprendizajeService'
import Utils from '@/Utils'

export default {
  name: 'reinscripcion',
  methods:
  {
    async getCita () {
      const responseCita = await CitasService.show(this.$store.state.alumno.boleta)
      this.cita = responseCita.data
      this.startTimer()
    },
    parseDateToSpanish (date) {
      return Utils.parseDateToSpanish(date)
    },
    async getBookmarks () {
      this.bookmarksReady = false
      const response = await AlumnoService.bookmarks(this.$store.state.alumno.boleta)
      this.bookmarks = response.data
      this.bookmarksReady = true
      this.dialogBookmarks = true
    },
    startTimer () {
      var remainTime = this.cita.fecha_inicio - Date.now()
      if (remainTime < 0) {
        this.activeReinscripcion()
      } else {
        this.setRemainTimeMsg(remainTime)
        setInterval(() => {
          remainTime -= 1000
          if (remainTime < 0 && !this.$store.state.canReinscribir) {
            this.activeReinscripcion()
          } else {
            this.setRemainTimeMsg(remainTime)
          }
        }, 1000)
      }
    },
    setRemainTimeMsg (remainTime) {
      var days = Math.floor(remainTime / (1000 * 60 * 60 * 24))
      var hrs = Math.floor(remainTime / (1000 * 60 * 60)) % 24
      var min = Math.floor(remainTime / (1000 * 60)) % 60
      var sec = Math.floor(remainTime / (1000)) % 60
      this.remainTimeMsg = (days > 0 ? (days > 1 ? days + ' Días ' : days + ' Día ') : '') + (hrs < 10 ? '0' + hrs : hrs) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
    },
    async activeReinscripcion () {
      const responseAlumno = await AlumnoService.show(this.$store.state.alumno.boleta)
      const responseHorarios = await HorariosService.index()
      const reponseUnidadAprendizaje = await UnidadAprendizajeService.index()
      this.alumno = responseAlumno.data
      this.horarios = responseHorarios.data
      this.UAs = reponseUnidadAprendizaje.data
      this.$store.dispatch('setCanReinscribir', true)
      this.snackbar = true
      this.dialog = false
      this.isReady = true
    },
    occupabilityColor (lugares) {
      if (lugares < 10) return 'red lighten-4'
      if (lugares < 20) return 'orange lighten-4'
      else return 'green lighten-4'
    },
    validateHorario (pSchedule) {
      this.errorsSchedule = []
      var sum = 0
      var occupability = true
      var canTakeIt = true
      pSchedule.forEach((pschedule) => {
        sum += (this.getCredits(pschedule.id_unidad_aprendizaje))
        if (pschedule.lugares_disponibles - pschedule.alumnos_inscritos === 0) occupability = false
        if (!this.canTakeIt(pschedule.id_unidad_aprendizaje)) canTakeIt = false
      })
      if (sum > this.maxCredits) {
        this.errorsSchedule.push('No puedes reinscribir mas de ' + this.maxCredits + ' créditos.')
      }
      if (!occupability) {
        this.errorsSchedule.push('No hay lugares disponibles en algunas materias seleccionadas.')
      }
      if (!canTakeIt) {
        this.errorsSchedule.push('No es posible volver a cursar algunas materias seleccionadas.')
      }
      this.showScheduleLogs = true
    },
    canTakeIt (id) {
      var canTake = true
      this.alumno.kardex.forEach((k) => {
        if (k.history[0].id_unidad_aprendizaje === id) {
          k.history.forEach((h) => {
            if (h.forma_evaluacion.indexOf('Recurse') !== -1) {
              canTake = false
            }
          })
        }
      })
      return canTake
    },
    getCredits (id) {
      var lower = 0
      var upper = this.UAs.length - 1
      var middle
      while (lower <= upper) {
        middle = Math.floor((lower + upper) / 2)
        if (id === this.UAs[middle].id) return this.UAs[middle].creditos
        if (id > this.UAs[middle].id) lower = middle + 1
        else upper = middle - 1
      }
    }
  },
  data () {
    return {
      search: '',
      cita: {},
      showScheduleLogs: false,
      dialogBookmarks: false,
      remainTimeMsg: '',
      snackbarTimeout: 6000,
      snackbar: false,
      bookmarksReady: true,
      alumno: {},
      UAs: [],
      bookmarks: [],
      horarios: [],
      dialog: true,
      isReady: false,
      errorsSchedule: [],
      gloabalHeader: [
        { text: 'Grupo', value: 'grupo', align: 'left' },
        { text: 'Unidad Aprendizaje', value: 'unidad_aprendizaje', align: 'left' },
        { text: 'Profesor', value: 'profesor', align: 'left' },
        { text: 'Lunes', value: 'Lunes', align: 'left', sortable: false },
        { text: 'Martes', value: 'Martes', align: 'left', sortable: false },
        { text: 'Miércoles', value: 'Miércoles', align: 'left', sortable: false },
        { text: 'Jueves', value: 'Jueves', align: 'left', sortable: false },
        { text: 'Viernes', value: 'Viernes', align: 'left', sortable: false },
        { text: 'Lugares', value: 'alumnos_inscritos', align: 'left' },
        { text: 'Seleccionar', value: 'seleccionar', align: 'left', sortable: false }
      ],
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
    // this.getCita()
    this.activeReinscripcion()
  },
  computed: {
    maxCredits: function () {
      return this.alumno.num_reprobadas > 0 ? 30 : 60
    }
  }

}

</script>

