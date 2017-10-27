<template>
  <v-container fluid>
    <v-card>
      <v-subheader>Datos Reinscripción</v-subheader>
      <v-divider></v-divider>
      <br>
      <v-layout row>
        <v-flex xs2 offset-xs4>
          <v-chip label outline color="primary">Fecha Reinscripción</v-chip>
        </v-flex>
        <v-flex>
          <v-chip label outline color="primary">{{ parseDateToSpanish(cita.fecha_inicio) }}</v-chip>
        </v-flex>
      </v-layout>
      <v-layout row v-if="!$store.state.canReinscribir">
        <v-flex xs2 offset-xs4>
          <v-chip label outline color="primary">Tu Reinscripción Comienza en</v-chip>
        </v-flex>
        <v-flex>
          <v-chip label outline color="primary">{{ remainTimeMsg }}</v-chip>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs2 offset-xs4>
          <v-btn :disabled="!$store.state.canReinscribir" color="primary" class="ml-1" @click="goToBookmarks()">Empezar Reinsripción</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
    <v-snackbar
        timeout=6000
        right=true
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
import Utils from '@/Utils'

export default {
  name: 'reinscripcion',
  methods:
  {
    async getCita () {
      const response = await CitasService.show(this.$store.state.alumno.boleta)
      this.cita = response.data
      this.startTimer()
    },
    parseDateToSpanish (date) {
      return Utils.parseDateToSpanish(date)
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
    activeReinscripcion () {
      this.$store.dispatch('setCanReinscribir', true)
      this.snackbar = true
    },
    goToBookmarks () {
      console.log('hi')
      this.$router.push({
        name: 'marcadores'
      })
    }
  },
  data () {
    return {
      cita: {},
      remainTimeMsg: '',
      snackbar: false
    }
  },
  mounted () {
    this.getCita()
  },
  computed: {
  }

}

</script>

