<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
    <v-layout row>
      <v-flex xs4>
        <v-text-field
        prepend-icon="search"
        label="Buscar"
        single-line
        hide-details
        v-model="search"
        class="ml-4"
        ></v-text-field>
      </v-flex>
      <v-flex xs2 offset-xs6>
        <v-btn color="primary" dark @click.stop="dialogInscribir = true" class="mt-3">Inscribir Alumno</v-btn>
        <v-dialog v-model="dialogInscribir" persistent max-width="500px">
          <v-card> 
            <v-card-title class="headline">
                Inscribir Alumno
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="Nombre"
                prepend-icon="account_circle"
              ></v-text-field>
              <v-text-field
                label="Correo"
                :rules="[rules.email, rules.emailUnique]"
                validate-on-blur
                prepend-icon="email"
                v-model="nEmail"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="accent" flat @click.stop="dialogInscribir=false">Cerrar</v-btn>
              <v-btn color="primary" flat @click="">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
    <br>
    <v-layout row>
      <v-flex xs12>
        <v-data-table
          v-bind:headers="alumnoHeaders"
          v-bind:search="search"
          :items="alumnos"
          hide-actions
          v-bind:pagination.sync="pagination"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.boleta }}</td>
          <td>{{ props.item.nombre }}</td>
          <td>{{ props.item.email }}</td>
          <td>
            <v-btn color="primary" fab small dark  @click="seeDetails(props.item.boleta)">
              <v-icon>list</v-icon>
            </v-btn>
          </td>
        </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages" circle></v-pagination>
        </div>
        <br>
      </v-flex>
    </v-layout>
    </v-card>
    <v-dialog v-model="dialogDetails" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark>
            <v-icon>account_circle</v-icon>
          </v-btn>
          <v-toolbar-title>{{ alumno.boleta }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn dark color="primary" @click="updateData">
            Guardar Cambios
          </v-btn>
          <v-btn icon @click.native="dialogDetails = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container fluid>
            <v-layout row>
               <v-subheader>Información Básica</v-subheader>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-text-field
                  label="Nombre"
                  prepend-icon="account_circle"
                  v-model="alumno.nombre"
                  :disabled="!edit"
                ></v-text-field>
              </v-flex>
              <v-flex xs4 offset-xs1>
                <v-text-field
                  label="Correo"
                  prepend-icon="email"
                  v-model="alumno.email"
                  :disabled="!edit"
                ></v-text-field>
              </v-flex>
              <v-flex xs2 offset-xs1>
                <v-switch color="primary" label="Modo Edición" v-model="edit"></v-switch>
                </v-checkbox>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-text-field
                  label="Contraseña"
                  v-model="alumno.password"
                  prepend-icon="vpn_key"
                  :append-icon="e1 ? 'visibility_off' : 'visibility'"
                  :append-icon-cb="() => e1 = !e1"
                  :type="e1 ? 'tex' : 'password'"
                  counter
                  :disabled="!edit"
                ></v-text-field>
              </v-flex>
            </v-layout>
             <v-layout row>
               <v-subheader>Información Académica</v-subheader>
            </v-layout>
            <v-layout row>
              <v-flex xs6>
                <v-card flat>
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Kardex</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-title>Promedio: {{ promedio }}</v-toolbar-title>
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
              <v-flex xs5 offset-xs1>
                <v-card flat>
                  <v-toolbar color="primary" dark flat>
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
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar
      :timeout="snackbarTimeout"
      bottom
      right
      absolute
      v-model="snackbar"
      :color="snackbarColor"
    >
      {{ snackbarText }}
      <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'
import AlumnoValidator from '@/validators/AlumnoValidator'

export default {

  name: 'alumnos',
  methods:
  {
    async getAlumnos () {
      const response = await AlumnoService.index()
      this.alumnos = response.data
      this.isReady = true
    },
    async seeDetails (boleta) {
      this.isReady = false
      const response = await AlumnoService.show(boleta)
      this.alumno = {
        boleta: response.data.boleta,
        nombre: response.data.nombre,
        email: response.data.email,
        password: response.data.password
      }
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
      this.dialogDetails = true
      this.isReady = true
    },
    async updateData () {
      // upadate just editable attributes
      let nData = {
        boleta: this.alumno.boleta, // 'boleta' necessary to know who updates
        nombre: this.alumno.nombre,
        email: this.alumno.email,
        password: this.alumno.password
      }
      const response = await AlumnoService.update(nData)
      if (response.data.status === 'ok') {
        this.getAlumnos() // refresh data
        this.dialogDetails = false
        this.snackbarColor = 'green lighten-1'
        this.snackbarText = 'Los cambios se realizaron con éxito'
        this.snackbar = true
      } else {
        this.dialogDetails = false
        this.snackbarColor = 'red darken-3'
        this.snackbarText = 'Error al actualizar'
        this.snackbar = true
      }
      this.edit = false
    }

  },
  data () {
    return {
      isReady: false,
      kardex: [],
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
      carrera: '',
      search: '',
      dialogInscribir: false,
      dialogDetails: false,
      alumnos: [],
      alumno: {},
      edit: false,
      nEmail: '',
      e1: false,
      pagination: { rowsPerPage: 10 },
      snackbar: false,
      snackbarText: '',
      snackbarTimeout: 6000,
      snackbarColor: 'primary',
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
        },
        {
          text: 'Detalles',
          value: 'detalles',
          align: 'left'
        }
      ],
      rules: {
        email: (email) => {
          let validation = AlumnoValidator.email({ email: email })
          // const response = await AlumnoService.checkEmail(email)
          // console.log(response.data.isTaken)
          return !validation.error || validation.errors[0]
        },
        emailUnique: (email) => {
          var isUnique = true
          for (var i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].email === email) {
              isUnique = false
              break
            }
          }
          return isUnique || 'La dirección de correo ya ha sido utilizada'
        }
      }
    }
  },
  mounted () {
    this.getAlumnos()
  },
  computed: {
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.alumnos.length / this.pagination.rowsPerPage) : 0
    }
  }
}

</script>
