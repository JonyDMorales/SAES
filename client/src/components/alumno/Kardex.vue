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
                    Estado: {{ num_reprobadas > 0 ? 'Irregular' : 'Regular'}}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    No. Unidades de Aprendizaje Reprobadas: {{ num_reprobadas }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Créditos Obtenidos: {{ creditos_obtenidos.toFixed(2) }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Créditos Restantes: {{ (creditos_totales - creditos_obtenidos).toFixed(2) }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    Periodos Cursados: {{ periodos_cursados }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>
                    No. Periodos Restantes: {{ periodos - periodos_cursados.length }}
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

export default {

  name: 'kardex',
  methods:
  {
    async getData () {
      const response = await AlumnoService.show(this.$store.state.alumno.boleta)
      this.kardex = response.data.kardex
      this.promedio = response.data.promedio
      this.num_reprobadas = response.data.num_reprobadas
      this.creditos_obtenidos = response.data.creditos_obtenidos
      this.creditos_totales = response.data.creditos_totales
      this.periodos_cursados = response.data.periodos_cursados
      this.periodos = response.data.periodos
      this.isReady = true
    }

  },
  data () {
    return {
      kardex: [],
      isReady: false,
      uasCursadas: [],
      promedio: 0,
      num_reprobadas: 0,
      creditos_obtenidos: 0,
      creditos_totales: 0,
      periodos_cursados: [],
      periodos: 0
    }
  },
  mounted () {
    this.getData()
  }
}

</script>

