<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
      <v-layout row>
        <v-flex xs7>
          <v-card>
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Unidaded Cursadas</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list>
              <v-list-group v-for="item in kardex" v-bind:key="item.id">
                <v-list-tile slot="item" @click="">
                  <v-list-tile-action>
                    <v-icon :color="item.history[item.history.length - 1].calificacion < 6 ? 'red accent-4' : 'green accent-4'">class</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.id }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>keyboard_arrow_down</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-list-tile v-for="subItem in item.history" v-bind:key="subItem.id_unidad_aprendizaje" @click="">
                  <v-list-tile-content>
                    <v-list-tile-sub-title>{{ subItem.periodo + ' - ' + subItem.unidad_aprendizaje}}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ subItem.forma_evaluacion + ' - ' + subItem.calificacion }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-card>
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Información</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Promedio: {{ promedio }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Estado: {{ numReprobadas > 0 ? 'Irregular' : 'Regular'}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    No. Unidades de Aprendizaje Reprobadas: {{ numReprobadas }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Créditos Obtenidos: 123.45
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Créditos Restantes: 122.67
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'
import Bucket from 'buckets-js'

export default {

  name: 'kardex',
  methods:
  {
    async getKardexData () {
      const response = await AlumnoService.kardex(this.$store.state.alumno.boleta)
      this.uasCursadas = response.data.unidades_cursadas
      this.isReady = true
    }

  },
  data () {
    return {
      isReady: false,
      uasCursadas: []
    }
  },
  mounted () {
    this.getKardexData()
  },
  computed: {
    kardex: function () {
      var items = new Bucket.Dictionary()
      this.uasCursadas.forEach((ua) => {
        if (items.get(ua.unidad_aprendizaje)) {
          items.get(ua.unidad_aprendizaje).push(ua)
        } else {
          items.set(ua.unidad_aprendizaje, [ua])
        }
      })
      var result = []
      items.keys().forEach((item) => {
        result.push({
          id: item,
          history: items.get(item).sort((a, b) => {
            let periodA = a.periodo.split('/')
            let periodB = b.periodo.split('/')
            return (periodA[0] - periodB[0])
          })
        })
      })
      return result
    },
    promedio: function () {
      return (this.kardex.reduce((sum, ua) => sum + ua.history[ua.history.length - 1].calificacion, 0) / this.kardex.length).toFixed(2)
    },
    numReprobadas: function () {
      return this.kardex.filter((ua) => ua.history[ua.history.length - 1].calificacion < 6).length
    }
  }
}

</script>

