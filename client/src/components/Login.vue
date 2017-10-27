<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs4 offset-xs4>
        <v-tabs dark fixed centered >
          <v-tabs-bar class="primary">
            <v-tabs-slider class="white"></v-tabs-slider>
            <v-tabs-item href="#tab-alumno">
              Alumno
            </v-tabs-item>
            <v-tabs-item href="#tab-profesor">
              Administrador
            </v-tabs-item>
            <v-tabs-item href="#tab-admin">
              Profesor
            </v-tabs-item>
          </v-tabs-bar>
          <v-tabs-items>
            <v-tabs-content id="tab-alumno">
              <v-card>
                <v-card-text>
                  <v-flex xs12>
                    <v-text-field
                      label="No. Boleta"
                      v-model="boleta"
                      hint="Ex. 2014630270"
                      prepend-icon="account_circle"
                    ></v-text-field>
                    <v-text-field
                      label="Contraseña"
                      v-model="password"
                      prepend-icon="vpn_key"
                      :append-icon="e1 ? 'visibility_off' : 'visibility'"
                      :append-icon-cb="passwordIcon"
                      :type="e1 ? 'tex' : 'password'"
                      counter
                    ></v-text-field>
                    <v-btn color="primary" @click="login">Entrar</v-btn>
                    <v-alert class="red accent-2" icon="warning" v-if="error" value="true">
                      <span v-for="err in errors" :key="err">{{ err }}<br></span>
                    </v-alert>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-tabs-content>
            <v-tabs-content id="tab-profesor">
              <v-card flat>
                <v-card-text>
                  <v-flex xs12>
                    <v-text-field
                      label="Identificador"
                      v-model="id"
                      hint="Ex. 2014630270"
                      prepend-icon="account_circle"
                    ></v-text-field>
                    <v-text-field
                      label="Contraseña"
                      v-model="apassword"
                      prepend-icon="vpn_key"
                      :append-icon="e1 ? 'visibility_off' : 'visibility'"
                      :append-icon-cb="passwordIcon"
                      :type="e1 ? 'tex' : 'password'"
                      counter
                    ></v-text-field>
                    <v-btn color="primary" @click="loginAdmin">Entrar</v-btn>
                    <v-alert class="red accent-2" icon="warning" v-if="error" value="true">
                      <span v-for="err in errors" :key="err">{{ err }}<br></span>
                    </v-alert>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-tabs-content>
            <v-tabs-content id="tab-admin">
              <v-card flat>
                <v-card-text>
                  <v-flex xs12>
                    <v-text-field
                      label="Identificador"
                      v-model="id"
                      hint="Ex. 2014630270"
                      prepend-icon="account_circle"
                    ></v-text-field>
                    <v-text-field
                      label="Contraseña"
                      v-model="apassword"
                      prepend-icon="vpn_key"
                      :append-icon="e1 ? 'visibility_off' : 'visibility'"
                      :append-icon-cb="passwordIcon"
                      :type="e1 ? 'tex' : 'password'"
                      counter
                    ></v-text-field>
                    <v-btn color="primary" @click="loginAdmin">Entrar</v-btn>
                    <v-alert class="red accent-2" icon="warning" v-if="error" value="true">
                      <span v-for="err in errors" :key="err">{{ err }}<br></span>
                    </v-alert>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'
import AdminService from '@/services/AdminService'
// import AlumnoValidator from '@/validators/AlumnoValidator'
import CitasService from '@/services/CitasService'

export default {

  name: 'login',
  methods:
  {
    async login () {
      const response = await AlumnoService.login({
        boleta: this.boleta,
        password: this.password
      })
      const responseCita = await CitasService.show(this.boleta)
      if (response.data.status === 'ok') {
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setAlumno', response.data.alumno)
        if (responseCita.data.fecha_inicio) {
          this.$store.dispatch('setCanReinscribir', !(responseCita.data.fecha_inicio - Date.now() > 0))
        }
        this.$router.push({
          name: 'infoGeneral'
        })
      } else {
        this.error = true
        this.errors = response.data.errors
      }
    },
    async loginAdmin () {
      const response = await AdminService.login({
        id: this.id,
        password: this.apassword
      })
      if (response.data.status === 'ok') {
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setAdmin', response.data.alumno)
        this.$router.push({
          name: 'alumnos'
        })
      } else {
        this.error = true
        this.errors = response.data.errors
      }
    },
    passwordIcon () {
      this.e1 = !this.e1
    }
  },
  data () {
    return {
      boleta: '',
      password: '',
      error: false,
      errors: [],
      id: '',
      apassword: '',
      e1: false
    }
  },
  mounted () {
  }

}

</script>
