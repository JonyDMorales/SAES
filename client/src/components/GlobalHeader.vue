<template>
  <div class="ui orange container inverted menu">
    <a class="item">
      <i class="home icon"></i>
      Inicio
    </a>
    <div class="right menu" v-if="$store.state.isAlumnoLoggedIn">
      <div class="ui dropdown item" id="dropdownMenuAlumno">
        Alumno <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="id card icon"></i> Información General</a>
          <a class="item"><i class="sitemap icon"></i> Kardex</a>
          <a class="item"><i class="lock icon"></i> Cambiar Constraseña</a>
        </div>
      </div>
      <div class="ui dropdown item" id="dropdownMenuInscripcion">
        Inscripción Actual<i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="calendar icon"></i> Horario</a>
          <a class="item"><i class="browser icon"></i> Calificaciones</a>
        </div>
      </div>
      <div class="ui dropdown item" id="dropdownMenuAcademica">
        Académica <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="tasks icon"></i> Horarios</a>
          <a class="item"><i class="bookmark icon"></i> Marcadores</a>
          <a class="item"><i class="edit icon"></i> Reinscripción</a>
        </div>
      </div>
      <a class="ui item" @click="logout()">
        <i class="sign out icon"></i>
        Salir
      </a>
    </div>
  </div>
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
    }
  }

}

</script>

