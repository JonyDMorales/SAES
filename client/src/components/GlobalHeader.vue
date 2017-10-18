<template>
  <md-toolbar md-theme="default">
    <md-button class="md-icon-button">
      <md-icon>home</md-icon>
    </md-button>
    
    <h2 class="md-title" style="flex: 1">SAES::ESCOM</h2>
    <div v-if="$store.state.isAlumnoLoggedIn">
    <md-menu md-align-trigger md-size="5">
      <md-button md-menu-trigger>Alumno</md-button>
      <md-menu-content>
        <md-menu-item> 
          <md-icon>account_circle</md-icon>
          <span>Información General</span>
        </md-menu-item>
        <md-menu-item @click="goToKardex()"> 
          <md-icon>assignment</md-icon>
          <span>Kardex</span>
        </md-menu-item>
        <md-menu-item> 
          <md-icon>lock</md-icon>
          <span>Cambiar Contraseña</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-align-trigger md-size="4">
      <md-button md-menu-trigger>Inscripción Actual</md-button>
      <md-menu-content>
        <md-menu-item> 
          <md-icon>schedule</md-icon>
          <span>Horario</span>
        </md-menu-item>
        <md-menu-item> 
          <md-icon>grade</md-icon>
          <span>Calificaciones</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-align-trigger md-size="4">
      <md-button md-menu-trigger>Académica</md-button>
      <md-menu-content>
        <md-menu-item @click="goToHorarios()"> 
          <md-icon>schedule</md-icon>
          <span>Horarios</span>
        </md-menu-item>
        <md-menu-item> 
          <md-icon>bookmark</md-icon>
          <span>Marcadores</span>
        </md-menu-item>
        <md-menu-item> 
          <md-icon>border_color</md-icon>
          <span>Reinscripción</span>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
    <md-button @click="logout()">
      <md-icon>exit_to_app</md-icon>
      <span>Salir</span>
    </md-button>
    </div>
  </md-toolbar>
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
    goToKardex () {
      this.$router.push({
        name: 'kardex'
      })
    },
    goToHorarios () {
      console.log('GO TO HORARIOS')
      this.$router.push({
        name: 'horarios'
      })
    }
  }
}

</script>

