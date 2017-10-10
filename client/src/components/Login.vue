<template>
  <div class="ui main container">
    <br><br>
    <div class="ui two column centered grid">
      <div class="column">
        <div class="ui raised segment">
          <div class="ui form error">
            <div class="field">
              <label>No. Boleta</label>
              <input type="text" name="boleta" placeholder="2016257670" v-model="boleta">
            </div>
            <div class="field">
              <label>Contraseña</label>
              <input type="Password" name="password" placeholder="Contraseña" v-model="password">
            </div>
            <button class="medium ui orange button" @click="login">Ingresar</button>
            <div class="ui error message" v-if="error">
              <div class="header">Error al ingresar</div>
              <p v-for="error in errors">{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'
import Validator from '@/validators/Validator'

export default {

  name: 'login',
  methods:
  {
    async login (e) {
      e.preventDefault()
      const validationResult = Validator.loginAlumno({
        boleta: this.boleta,
        password: this.password
      })

      if (validationResult.status === 'ok') {
        const response = await AlumnoService.login({
          boleta: this.boleta,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setAlumno', response.data.alumno)
      } else {
        console.log(JSON.stringify(validationResult.errors, null, 2))
        this.error = true
        this.errors = validationResult.errors
      }
    }
  },
  data () {
    return {
      boleta: '',
      password: '',
      error: false,
      errors: []
    }
  },
  mounted () {
  }

}

</script>

