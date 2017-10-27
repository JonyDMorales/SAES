<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title>SAES::ESCOM</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <!-- Alumno -->
    <v-toolbar-items class="hidden-sm-and-down" v-if="$store.state.isAlumnoLoggedIn && $store.state.userType === 1">
      <v-menu offset-y>
        <v-btn color="primary" flat class="white--text" slot="activator">Alumno</v-btn>
        <v-list>
          <v-list-tile @click="goToInfoGeneral()">
            <v-icon>account_circle</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Información General</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToKardex()">
            <v-icon>assignment</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Kardex</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-icon>lock</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Cambiar Contraseña</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <v-btn color="primary" flat class="white--text" slot="activator">Inscripción Actual</v-btn>
        <v-list>
          <v-list-tile @click="goToHorario()">
            <v-icon>schedule</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Horario</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-icon>grade</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Calificaciones</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <v-btn color="primary" flat class="white--text" slot="activator">Académica</v-btn>
        <v-list>
          <v-list-tile @click="goToHorarios()">
            <v-icon>schedule</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Horarios</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goMarcadores()">
            <v-icon>bookmark</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Marcadores</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToReinscripcion()">
            <v-icon>border_color</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Reinscripción</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat @click="logout()">
        Salir
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar-items>
    <!-- Admin -->
    <v-toolbar-items class="hidden-sm-and-down" v-if="$store.state.userType === 2">
      <v-menu offset-y>
        <v-btn color="primary" flat class="white--text" slot="activator">Administrar</v-btn>
        <v-list>
          <v-list-tile @click="goToAlumnos()">
            <v-icon>list</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Alumnos</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-icon>list</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Profesores</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="">
            <v-icon>list</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Horarios</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <v-btn color="primary" flat class="white--text" slot="activator">Reinscripción</v-btn>
        <v-list>
          <v-list-tile @click="">
            <v-icon>account_circle</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Alumno</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="goToGenerarCitas">
            <v-icon>schedule</v-icon>&nbsp;&nbsp;
            <v-list-tile-title>Citas</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat @click="logoutAdmin()">
        Salir
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

  name: 'globalHeader',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setAlumno', null)
      this.$router.push({
        name: 'login'
      })
    },
    logoutAdmin () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setAdmin', null)
      this.$router.push({
        name: 'login'
      })
    },
    goToKardex () {
      this.$router.push({
        name: 'kardex'
      })
    },
    goToHorarios () {
      this.$router.push({
        name: 'horarios'
      })
    },
    goToAlumnos () {
      this.$router.push({
        name: 'alumnos'
      })
    },
    goMarcadores () {
      this.$router.push({
        name: 'marcadores'
      })
    },
    goToGenerarCitas () {
      this.$router.push({
        name: 'generarCitas'
      })
    },
    goToReinscripcion () {
      this.$router.push({
        name: 'reinscripcion'
      })
    },
    goToHorario () {
      this.$router.push({
        name: 'horarioActual'
      })
    },
    goToInfoGeneral () {
      this.$router.push({
        name: 'infoGeneral'
      })
    }
  }
}

</script>

