<template>
  <div class="ui main container">
    <br><br>
    <div class="ui three column centered grid">
      <div class="column">
        <div class="ui raised segment">

          <div class="ui top attached tabular menu">
            <a class="item active" data-tab="first" id="loginTabAlumno">Alumno</a>
            <a class="item" data-tab="second" id="loginTabProfesor">Profesor</a>
            <a class="item" data-tab="third" id="loginTabAdmin">Administrador</a>
          </div>
          <div class="ui bottom attached tab segment active" data-tab="first">
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
                <div class="header">:(</div>
                <p v-for="error in errors">{{ error }}</p>
              </div>
            </div>
          </div>
          <div class="ui bottom attached tab segment" data-tab="second">
            <div class="ui form error">
              <div class="field">
                <label>Id</label>
                <input type="text" name="boleta" placeholder="2016257670" v-model="boleta">
              </div>
              <div class="field">
                <label>Contraseña</label>
                <input type="Password" name="password" placeholder="Contraseña" v-model="password">
              </div>
              <button class="medium ui orange button" @click="login">Ingresar</button>
              <div class="ui error message" v-if="error">
                <div class="header">:(</div>
                <p v-for="error in errors">{{ error }}</p>
              </div>
            </div>
          </div>
          <div class="ui bottom attached tab segment" data-tab="third">
            <div class="ui form error">
              <div class="field">
                <label>Id</label>
                <input type="text" name="boleta" placeholder="2016257670" v-model="boleta">
              </div>
              <div class="field">
                <label>Contraseña</label>
                <input type="Password" name="password" placeholder="Contraseña" v-model="password">
              </div>
              <button class="medium ui orange button" @click="login">Ingresar</button>
              <div class="ui error message" v-if="error">
                <div class="header">:(</div>
                <p v-for="error in errors">{{ error }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'
import AlumnoValidator from '@/validators/AlumnoValidator'

export default {

  name: 'login',
  methods:
  {
    async login (e) {
      e.preventDefault()
      const validationResult = AlumnoValidator.login({
        boleta: this.boleta,
        password: this.password
      })
      if (validationResult.status === 'ok') {
        const response = await AlumnoService.login({
          boleta: this.boleta,
          password: this.password
        })
        if (response.data.status === 'ok') {
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setAlumno', response.data.alumno)
          this.$router.push({
            name: 'horarios'
          })
        } else {
          this.error = true
          this.errors = response.data.errors
        }
      } else {
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

