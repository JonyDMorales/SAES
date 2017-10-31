<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs4 offset-xs4>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-btn icon>
              <v-icon>school</v-icon>
            </v-btn>
            <v-toolbar-title>Información General</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Boleta: {{ boleta }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Nombre: {{ nombre }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Email: {{ email }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-sub-title>
                  Carrera: {{ carrera }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
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
      this.boleta = response.data.boleta
      this.nombre = response.data.nombre
      this.promedio = response.data.promedio
      this.num_reprobadas = response.data.num_reprobadas
      this.creditos_obtenidos = response.data.creditos_obtenidos
      this.creditos_totales = response.data.creditos_totales
      this.periodos_cursados = response.data.periodos_cursados
      this.periodos = response.data.periodos
      this.email = response.data.email
      this.carrera = response.data.carrera
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
      periodos: 0,
      boleta: 0,
      email: '',
      nombre: '',
      carrera: ''
    }
  },
  mounted () {
    this.getData()
  }
}

</script>

