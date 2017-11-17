<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true" height="5"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card flat v-if="!$store.state.isAlreadyInscrito">
      <v-layout row>
        <v-flex xs3>
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
        <v-flex xs2 v-if="!bookmarksBtn">
          <v-btn color="primary" @click="onStartReinscripcion()" class="mt-4">Empezar Reinscripción</v-btn>
        </v-flex>
        <v-flex xs2 v-if="bookmarksBtn">
          <v-tooltip top>
            <v-btn slot="activator" small fab dark color="primary" @click="showInscritas()" class="mt-4">
              <v-icon>list</v-icon>
            </v-btn>
            <span>Inscritas</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" small fab dark color="primary" @click="getBookmarks()" class="mt-4" :loading="!bookmarksReady">
              <v-icon>bookmark</v-icon>
            </v-btn>
            <span>Marcadores</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn slot="activator" small fab dark color="primary" @click="" class="mt-4">
              <v-icon>schedule</v-icon>
            </v-btn>
            <span>Generar Horario</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
      <br>
      <v-layout row>
        <v-flex xs12>
          <v-data-table
            v-bind:headers="gloabalHeader"
            :items="horarios"
            v-bind:search="search"
            no-data-text=""
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
            <td v-if="reinscripcionHasStarted"> <v-chip label color="white" text-color="blue" @click="inscribirUA(props.item)">Inscribir</v-chip> </td>
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
              <v-btn dark color="primary" @click="validateHorario(bookmark.horario, true)">
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
      <v-dialog v-model="showScheduleLogs" max-width="750px">
        <v-card> 
          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <v-card flat>
                  <v-toolbar :color="errorsSchedule.length > 0 ? 'red lighten-1' : 'green accent-4'" dark flat>
                    <v-btn icon>
                      <v-icon>assignment</v-icon>
                    </v-btn>
                    <v-toolbar-title>Resincripción</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-list>
                    <v-list-tile v-for="error in errorsSchedule" :key="error">
                      <v-list-tile-content>
                        <v-list-tile-sub-title>
                          {{ error }}
                        </v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                  <v-card-actions>
                    <v-btn color="primary" @click="reinscribir()" v-if="errorsSchedule.length == 0">Confirmar Reinscripción</v-btn>
                    <v-btn outline color="accent" @click="showScheduleLogs = false" v-if="errorsSchedule.length > 0">Regresar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
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
                <v-toolbar :color="dictamen25.dictamen ? 'amber darken-3' : 'primary'" dark flat>
                  <v-btn icon>
                    <v-icon>assignment</v-icon>
                  </v-btn>
                  <v-toolbar-title>{{ dictamen25.dictamen ? 'Reinscripción con 1er Dictamen' : 'Reinscripción' }}</v-toolbar-title>
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
                        Máximo Créditos: {{ maxCredits }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider v-if="dictamen25.dictamen"></v-divider>
                  <v-list-tile v-if="dictamen25.dictamen">
                    <v-list-tile-content>
                      <v-list-tile-sub-title>
                        UAs Dictamen: {{ ...dictamen25.uas }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-card-actions>
                  <v-btn color="primary" @click="goBack()">Regresar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- **************************************************************** -->
    <v-dialog v-model="dialogPossibleReinscription" persistent max-width="600px">
      <v-card>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-card flat>
                <v-toolbar color="red lighten-1" dark flat>
                  <v-btn icon>
                    <v-icon>assignment</v-icon>
                  </v-btn>
                  <v-toolbar-title>1º Dictamen Incumplido</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>
                        Para poder reinscribirte tendrás que pedir dictamen al Consejo Ceneral.
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-card-actions>
                  <v-btn outline color="primary" @click="goBack()">Regresar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogInfo" persistent>
      <v-card>
        <v-card-title class="headline">Importante</v-card-title>
        <v-card-text>
          A partir de ahora tendrás 15 minutos para completar tu reinscripción, después de este periodo de tiempo la sesión se cerrará.
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat @click.native="dialogInfo = false">Regresar</v-btn>
          <v-btn color="primary" flat @click="startReinscripcion">Empezar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="$store.state.isAlreadyInscrito" persistent>
      <v-card>
        <v-card-title class="headline">Reinscripción Finalizada</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="watchSchedule">Ver Horario</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="inscritasSheet">
      <v-data-table
        v-bind:headers="inscritasHeader"
        :items="inscritas"
        hide-actions
        class="elevation-2"
        no-data-text="No tienes ninguna Unidad de Aprendizaje inscrita"
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
        <td> <v-chip label color="white" text-color="red darken-1" @click="removeFromInscritas(props.item.id)">Quitar</v-chip></td>
      </template>
      </v-data-table>
    </v-bottom-sheet>
    <v-snackbar
      :timeout="snackbarTimeout"
      right
      v-model="snackbar"
      color="blue darken-1"
      >
      Ya Puedes Empezar Tu Reinscripción
      <v-btn flat color="white" @click.native="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
    <v-snackbar
        :timeout=5000
        right
        bottom
        v-model="snackbar2"
        :color="snbColor"
      >
      {{ snbText }}
      <v-btn flat color="white" @click.native="snackbar2 = false">Cerrar</v-btn>
    </v-snackbar>
    <v-snackbar
        :timeout=900000
        left
        bottom
        v-model="snackbarReinscripcion"
        color="primary"
      >
      {{ snackbarMsgLeftTime }}
      <v-btn flat color="white" @click="endReinscripcion()">Finalizar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import CitasService from '@/services/CitasService'
import AlumnoService from '@/services/AlumnoService'
import HorariosService from '@/services/HorariosService'
import UnidadAprendizajeService from '@/services/UnidadAprendizajeService'
import InscripcionService from '@/services/InscripcionService'
import Utils from '@/Utils'
import Pusher from 'pusher-js'
var Bucket = require('buckets-js')

export default {
  name: 'reinscripcion',
  methods:
  {
    watchSchedule () {
      this.$router.push({
        name: 'horarioActual'
      })
    },
    async init () {
      const responseCita = await CitasService.show(this.$store.state.alumno.boleta)
      this.cita = responseCita.data
      const responseAlumno = await AlumnoService.show(this.$store.state.alumno.boleta)
      this.alumno = responseAlumno.data
      if (!this.isPossibleReinscripcion) {
        this.isReady = true
        this.dialogPossibleReinscription = true
      } else {
        this.isReady = true
        this.startTimer()
        // this.dialog = true
      }
    },
    startPusher () {
      // Pusher.logToConsole = true
      var pusher = new Pusher('91d6af0b1edccedbb84c', {
        cluster: 'us2',
        encrypted: true
      })
      var channel = pusher.subscribe('inscripcion-channel')
      channel.bind('onNewInscription', (data) => {
        data.forEach((occupability) => {
          this.updateScheduleOccupability(occupability)
        })
      })
    },
    showInscritas () {
      this.inscritasSheet = true
    },
    updateScheduleOccupability (occupability) {
      var lower = 0
      var upper = this.horarios.length - 1
      var middle
      while (lower <= upper) {
        middle = Math.floor((lower + upper) / 2)
        if (occupability.id === this.horarios[middle].id) {
          this.horarios[middle].lugares_disponibles = occupability.lugares
          this.horarios[middle].alumnos_inscritos = occupability.inscritos
          break
        }
        if (occupability.id > this.horarios[middle].id) lower = middle + 1
        else upper = middle - 1
      }
      // update bookmarks
      for (var i = 0; i < this.bookmarks.length; i++) {
        for (var j = 0; j < this.bookmarks[i].horario.length; j++) {
          if (occupability.id === this.bookmarks[i].horario[j].id) {
            this.bookmarks[i].horario[j].lugares_disponibles = occupability.lugares
            this.bookmarks[i].horario[j].alumnos_inscritos = occupability.inscritos
          }
        }
      }
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
        this.dialog = true
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
      this.isReady = false
      this.dialog = false
      const responseHorarios = await HorariosService.index()
      const reponseUnidadAprendizaje = await UnidadAprendizajeService.index()
      this.horarios = responseHorarios.data
      this.UAs = reponseUnidadAprendizaje.data
      this.$store.dispatch('setCanReinscribir', true)
      this.snackbar = true
      this.dialog = false
      this.startPusher()
      this.isReady = true
    },
    occupabilityColor (lugares) {
      if (lugares < 10) return 'red lighten-4'
      if (lugares < 20) return 'orange lighten-4'
      else return 'green lighten-4'
    },
    validateHorario (pSchedule, isFromBookmark) {
      this.isFromBookmark = isFromBookmark
      this.errorsSchedule = []
      this.current = pSchedule
      var sum = 0
      var uasCannotTake = []
      var occupability = true
      var canTakeIt = true
      pSchedule.forEach((pschedule) => {
        sum += (this.getCredits(pschedule.id_unidad_aprendizaje))
        if (pschedule.lugares_disponibles - pschedule.alumnos_inscritos === 0) occupability = false
        if (!this.canTakeIt(pschedule.id_unidad_aprendizaje)) {
          uasCannotTake.push(pschedule.unidad_aprendizaje)
          canTakeIt = false
        }
      })
      if (sum < 20.0) {
        this.errorsSchedule.push('No puedes reinscribir menos de la carga mínima de créditos.')
      }
      if (sum > this.maxCredits) {
        this.errorsSchedule.push('No puedes reinscribir mas de ' + this.maxCredits + ' créditos.')
      }
      if (!occupability) {
        this.errorsSchedule.push('No hay lugares disponibles en algunas materias seleccionadas.')
      }
      if (!canTakeIt) {
        this.errorsSchedule.push('Ya no es posible cursar ' + uasCannotTake)
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
          if (k.history[k.history.length - 1].calificacion > 5) {
            canTake = false
          }
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
      return 4.39
    },
    goBack () {
      this.$router.push({
        name: 'infoGeneral'
      })
    },
    nextPeriod (period) {
      let year = period.split('/')[0]
      let n = period.split('/')[1]
      if (n === '1') {
        return year + '/2'
      } else {
        return String(parseInt(year) + 1) + '/1'
      }
    },
    onStartReinscripcion () {
      this.dialogInfo = true
    },
    startReinscripcion () {
      var remainTime = 900000
      this.dialogInfo = false
      this.bookmarksBtn = true
      this.snackbarMsgLeftTime = 'Tiempo Restante: 15:00'
      this.snackbarReinscripcion = true
      this.reinscripcionHasStarted = true
      this.gloabalHeader.push({ text: 'Seleccionar', value: 'seleccionar', align: 'left', sortable: false })
      setInterval(() => {
        var min = Math.floor(remainTime / (1000 * 60)) % 60
        var sec = Math.floor(remainTime / (1000)) % 60
        this.snackbarMsgLeftTime = 'Tiempo Restante: ' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
        remainTime -= 1000
        if (remainTime < 0) {
          this.killReinscripcion()
        } else {
          min = Math.floor(remainTime / (1000 * 60)) % 60
          sec = Math.floor(remainTime / (1000)) % 60
          this.snackbarMsgLeftTime = 'Tiempo Restante: ' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
        }
      }, 1000)
    },
    endReinscripcion () {
      this.validateHorario(this.inscritas, false)
      if (this.errorsSchedule.length === 0) {
        this.inscritasSheet = true
      }
    },
    async killReinscripcion () {
      this.inscritas.forEach(async (inscrita) => {
        const response = await HorariosService.occupability(inscrita.id, { inc: -1 })
        console.log(response.data)
      })
      this.bookmarksBtn = false
      this.inscritas = []
      this.snbColor = 'red lighten-1'
      this.snbText = 'Tiempo de Reinscripción Finalizado'
      this.snackbar2 = true
    },
    async inscribirUA (clase) {
      var found = false
      var sameUA = false
      var sum = this.getCredits(clase.id_unidad_aprendizaje)
      var hoursDays = new Bucket.Set()
      var overlaps = false
      for (var i = this.inscritas.length - 1; i >= 0; i--) {
        for (var j = 0; j < this.inscritas[i].horarios.length; j++) {
          if (this.inscritas[i].horarios[j].hora_inicio.length > 0) {
            let key = this.inscritas[i].horarios[j].dia + this.inscritas[i].horarios[j].hora_inicio + this.inscritas[i].horarios[j].hora_fin
            hoursDays.add(key)
          }
        }
        sum += (this.getCredits(this.inscritas[i].id_unidad_aprendizaje))
        if (this.inscritas[i].unidad_aprendizaje === clase.unidad_aprendizaje) {
          sameUA = true
        }
        if (this.inscritas[i].id === clase.id) {
          found = true
        }
      }
      var prevSize = hoursDays.size()
      for (var index = 0; index < clase.horarios.length; index++) {
        if (clase.horarios[index].hora_inicio.length > 0) {
          let key = clase.horarios[index].dia + clase.horarios[index].hora_inicio + clase.horarios[index].hora_fin
          hoursDays.add(key)
          if (prevSize === hoursDays.size()) {
            overlaps = true
            break
          } else {
            prevSize = hoursDays.size()
          }
        }
      }
      if (overlaps) {
        this.snbColor = 'red lighten-1'
        this.snbText = 'Esta Unidad de Aprendizaje se traslapa con otra.'
        this.snackbar2 = true
      } else if (sameUA) {
        this.snbColor = 'red lighten-1'
        this.snbText = 'Ya has inscrito esta Unidad de Aprendizaje.'
        this.snackbar2 = true
      } else if (sum > this.maxCredits) {
        this.snbColor = 'red lighten-1'
        this.snbText = 'No puedes reinscribir mas de ' + this.maxCredits + ' créditos.'
        this.snackbar2 = true
      } else if (!this.canTakeIt(clase.id_unidad_aprendizaje)) {
        this.snbColor = 'red lighten-1'
        this.snbText = 'Ya no puedes cursar esta Unidad de Aprendizaje.'
        this.snackbar2 = true
      } else if (clase.lugares_disponibles - clase.alumnos_inscritos === 0) {
        this.snbColor = 'red lighten-1'
        this.snbText = 'Ya no hay lugares disponibles en esta Unidad de Aprendizaje.'
        this.snackbar2 = true
      } else {
        if (!found) {
          const response = await HorariosService.occupability(clase.id, { inc: 1 })
          console.log(response.data)
          this.inscritas.push(clase)
          this.inscritasSheet = true
        }
      }
    },
    async reinscribir () {
      const response = await InscripcionService.store({
        inscripcionData: {
          horario: this.current.map((b) => b.id),
          boleta_alumno: this.$store.state.alumno.boleta
        },
        update_occupability: this.isFromBookmark
      })
      console.log(response.data)
      this.$store.dispatch('setIsAlreadyInscrito', true)
      this.showScheduleLogs = false
      this.snbColor = 'blue'
      this.snbText = 'La Reinscripción se ha realizado con éxito'
      this.snackbar2 = true
      this.inscritas = []
    },
    async removeFromInscritas (id) {
      var idx = 0
      for (var i = this.inscritas.length - 1; i >= 0; i--) {
        if (this.inscritas[i].id === id) {
          idx = i
          break
        }
      }
      const response = await HorariosService.occupability(id, { inc: -1 })
      console.log(response.data)
      this.inscritas.splice(idx, 1)
    }
  },
  data () {
    return {
      search: '',
      cita: {},
      dialogPossibleReinscription: false,
      current: [],
      showScheduleLogs: false,
      dialogBookmarks: false,
      remainTimeMsg: '',
      snackbarTimeout: 6000,
      snackbar: false,
      bookmarksReady: true,
      alumno: {},
      dialogInfo: false,
      UAs: [],
      inscritas: [],
      bookmarks: [],
      horarios: [],
      inscritasSheet: false,
      dialog: false,
      isReady: false,
      errorsSchedule: [],
      snackbar2: false,
      snbColor: '',
      snbText: '',
      reinscripcionHasStarted: false,
      drawer: true,
      snackbarReinscripcion: false,
      snackbarMsgLeftTime: '',
      mini: true,
      bookmarksBtn: false,
      right: null,
      isFromBookmark: false,
      gloabalHeader: [
        { text: 'Grupo', value: 'grupo', align: 'left' },
        { text: 'Unidad Aprendizaje', value: 'unidad_aprendizaje', align: 'left' },
        { text: 'Profesor', value: 'profesor', align: 'left' },
        { text: 'Lunes', value: 'Lunes', align: 'left', sortable: false },
        { text: 'Martes', value: 'Martes', align: 'left', sortable: false },
        { text: 'Miércoles', value: 'Miércoles', align: 'left', sortable: false },
        { text: 'Jueves', value: 'Jueves', align: 'left', sortable: false },
        { text: 'Viernes', value: 'Viernes', align: 'left', sortable: false },
        { text: 'Lugares', value: 'alumnos_inscritos', align: 'left' }
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
      ],
      inscritasHeader: [
        { text: 'Grupo', value: 'grupo', align: 'left' },
        { text: 'Unidad Aprendizaje', value: 'unidad_aprendizaje', align: 'left' },
        { text: 'Profesor', value: 'profesor', align: 'left' },
        { text: 'Lunes', value: 'Lunes', align: 'left', sortable: false },
        { text: 'Martes', value: 'Martes', align: 'left', sortable: false },
        { text: 'Miércoles', value: 'Miércoles', align: 'left', sortable: false },
        { text: 'Jueves', value: 'Jueves', align: 'left', sortable: false },
        { text: 'Viernes', value: 'Viernes', align: 'left', sortable: false },
        { text: 'Lugares', value: 'lugares_disponibles', align: 'left' },
        { text: 'Quitar', value: 'quitar', align: 'left' }
      ]
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.inscritas.forEach(async (inscrita) => {
      const response = await HorariosService.occupability(inscrita.id, { inc: -1 })
      console.log(response.data)
    })
  },
  computed: {
    isPossibleReinscripcion: function () {
      var possible = true
      this.alumno.kardex.forEach((k) => {
        k.history.forEach((h) => {
          if (h.forma_evaluacion.indexOf('Dictamen') !== -1 && h.calificacion < 6) {
            possible = false
          }
        })
      })
      return possible
    },
    UAsCannotTake: function () {

    },
    dictamen25: function () {
      var dictamen25 = false
      var uas = []
      this.alumno.kardex.forEach((ua) => {
        let lastPeriod = this.nextPeriod(this.nextPeriod(ua.history[0].periodo))
        if (lastPeriod === ua.history[ua.history.length - 1].periodo && ua.history[ua.history.length - 1].calificacion < 6) {
          dictamen25 = true
          uas.push(ua)
        }
      })
      return {
        dictamen: dictamen25,
        uas: uas.map((idx) => idx.id)
      }
    },
    maxCredits: function () {
      if (this.dictamen25.dictamen) {
        return 25
      } else {
        return this.cita.num_reprobadas > 0 ? 30 : 60
      }
    }
  }

}

</script>

