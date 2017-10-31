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
              Profesor
            </v-tabs-item>
            <v-tabs-item href="#tab-admin">
              Administrador
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
                      v-model="password_alumno"
                      prepend-icon="vpn_key"
                      :append-icon="vIconAlumno ? 'visibility_off' : 'visibility'"
                      :append-icon-cb="() => vIconAlumno = !vIconAlumno"
                      :type="vIconAlumno ? 'tex' : 'password'"
                      counter
                    ></v-text-field>
                    <v-chip label outline color="white" text-color="primary" class="ml-3" @click="dialogResetPassword = true">Recuperar Contraseña</v-chip>
                    <br>
                    <v-btn color="primary" @click="loginAlumno" class="ml-4">Entrar</v-btn>
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
                  
                </v-card-text>
              </v-card>
            </v-tabs-content>
            <v-tabs-content id="tab-admin">
              <v-card flat>
                <v-card-text>
                  <v-flex xs12>
                    <v-text-field
                      label="Identificador"
                      v-model="id_admin"
                      prepend-icon="account_circle"
                    ></v-text-field>
                    <v-text-field
                      label="Contraseña"
                      v-model="password_admin"
                      prepend-icon="vpn_key"
                      :append-icon="vIconAdmin ? 'visibility_off' : 'visibility'"
                      :append-icon-cb="() => vIconAdmin = !vIconAdmin"
                      :type="vIconAdmin ? 'tex' : 'password'"
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
    <v-dialog v-model="dialogResetPassword" max-width="400px">
      
        <v-carousel interval=1000000 hide-controls dark style="max-height: 300px" left-control-icon right-control-icon v-model="step">
          <v-carousel-item class="grey lighten-4">
            <v-container fluid>
              <v-subheader>
              Restrablecer Contraseña
              </v-subheader>
              <v-layout row>
                <v-flex xs10 offset-xs1>
                  <v-text-field
                    label="No. Boleta"
                    v-model="boleta"
                    prepend-icon="account_circle"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs2 offset-xs2>
                  <v-btn color="primary" @click="getCode()">Obtener Código</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
          <v-carousel-item class="grey lighten-4">
            <v-container fluid>
              <v-subheader>
              Introduce el Código
              </v-subheader>
              <v-layout row>
                <v-flex xs10 offset-xs1>
                  <v-text-field
                    label="Código"
                    v-model="code"
                    prepend-icon="code"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs2 offset-xs2>
                  <v-btn color="primary" @click="sendCode()">Enviar Código</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
          <v-carousel-item class="grey lighten-4">
            <v-container fluid>
              <v-subheader>
              Nueva Contraseña
              </v-subheader>
              <v-layout row>
                <v-text-field
                  label="Nueva Contraseña"
                  v-model="new_password"
                  prepend-icon="vpn_key"
                  :append-icon="vIconNew ? 'visibility_off' : 'visibility'"
                  :append-icon-cb="() => vIconNew = !vIconNew"
                  :type="vIconNew ? 'tex' : 'password'"
                  counter
                ></v-text-field>
              </v-layout>
              <v-layout row>
                <v-flex xs2 offset-xs2>
                  <v-btn color="primary" @click="setNewPassword()">Restrablecer Contraseña</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      
    </v-dialog>
    <v-snackbar
        :timeout="snackbarTimeout"
        right
        top
        absolute
        v-model="snackbar"
        :color="snackbarColor"
      >
      {{ snackbarText }}
      <v-btn flat color="white" @click.native="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'
import AdminService from '@/services/AdminService'
// import CitasService from '@/services/CitasService'

export default {

  name: 'login',
  methods:
  {
    async loginAlumno () {
      const response = await AlumnoService.login({
        boleta: this.boleta,
        password: this.password_alumno
      })
      // const responseCita = await CitasService.show(this.boleta)
      if (response.data.status === 'ok') {
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setAlumno', response.data.alumno)
        /*
        if (responseCita.data.fecha_inicio) {
          this.$store.dispatch('setCanReinscribir', !(responseCita.data.fecha_inicio - Date.now() > 0))
        }
        */
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
        password: this.password_admin
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
    async getCode () {
      const response = await AlumnoService.getCode(this.boleta)
      console.log(JSON.stringify(response.data))
      if (!response.data.error) {
        this.snackbarColor = 'green darken-1'
        this.snackbarText = response.data.msg
        this.snackbar = true
        this.step = 1
      } else {
        this.snackbarColor = 'red accent-3'
        this.snackbarText = response.data.errors[0]
        this.snackbar = true
      }
    },
    async sendCode () {
      const response = await AlumnoService.checkCode(this.boleta, {code: this.code})
      console.log(JSON.stringify(response.data))
      if (!response.data.error) {
        this.snackbarColor = 'green darken-1'
        this.snackbarText = response.data.msg
        this.snackbar = true
        this.step = 2
      } else {
        this.snackbarColor = 'red accent-3'
        this.snackbarText = response.data.msg
        this.snackbar = true
      }
    },
    async setNewPassword () {
      let nData = {
        boleta: this.boleta,
        password: this.new_password
      }
      const response = await AlumnoService.update(nData)
      if (response.data.status === 'ok') {
        this.snackbarColor = 'green darken-1'
        this.snackbarText = 'La contraseña fue restablecida con éxito'
        this.snackbar = true
        this.dialogResetPassword = false
        this.password_alumno = this.new_password
        this.loginAlumno()
      } else {
        this.dialogDetails = false
        this.snackbarColor = 'red accent-3'
        this.snackbarText = 'Error al restrablecer contraseña'
        this.snackbar = true
      }
    }
  },
  data () {
    return {
      boleta: '',
      password_alumno: '',
      new_password: '',
      error: false,
      errors: [],
      id_admin: '',
      step: 0,
      code: '',
      password_admin: '',
      vIconAlumno: false,
      vIconAdmin: false,
      vIconNew: false,
      snackbar: false,
      snackbarTimeout: 5000,
      snackbarColor: 'primary',
      snackbarText: '',
      dialogResetPassword: false
    }
  },
  mounted () {
  }

}

</script>
