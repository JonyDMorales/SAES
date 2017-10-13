<template>
  <div class="ui orange container inverted menu">
    <a class="item">
      <i class="home icon"></i>
      Inicio
    </a>
    <a class="item" v-if="$store.state.isAlumnoLoggedIn">
      <i class="calendar icon"></i>
      Horarios
    </a>
    <!--
    <a class="item" v-if="$store.state.isAlumnoLoggedIn">
      <i class="file icon"></i>
      Kardex
    </a>
    -->
    <div class="right menu">
      <a class="ui item" v-if="!$store.state.isAlumnoLoggedIn">
        <i class="sign in icon"></i>
        Entrar
      </a>
       <a class="ui item" v-if="$store.state.isAlumnoLoggedIn" @click="logout">
        <i class="sign out icon"></i>
        Salir
      </a>
    </div>
  </div>
</template>

<script>
export default {

  name: 'headerAlumno',
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

