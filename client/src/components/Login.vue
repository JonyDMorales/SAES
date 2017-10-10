<template>
  <div class="ui main container">
    <br><br>
    <div class="ui two column centered grid">
      <div class="column">
        <div class="ui raised segment">
          <form class="ui big form">
            <div class="field">
              <label>No. Boleta</label>
              <input type="text" name="boleta" placeholder="2016257670" v-model="boleta">
            </div>
            <div class="field">
              <label>Contraseña</label>
              <input type="Password" name="password" placeholder="Contraseña" v-model="password">
            </div>
            <button class="medium ui orange button" @click="login">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'

export default {

  name: 'login',
  methods:
  {
    async login () {
      const response = await AlumnoService.login({
        boleta: this.boleta,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setAlumno', response.data.alumno)
    }
  },
  data () {
    return {
      boleta: '',
      password: ''
    }
  },
  mounted () {
  }

}

</script>

