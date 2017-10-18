<template>
  <md-layout md-align="center" md-gutter>
    <md-layout md-flex="35">
      <md-tabs md-centered>
        <md-tab id="alumno" md-label="Alumno">
          <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
              <md-icon>account_circle</md-icon>
              <label>No. Boleta</label>
              <md-input placeholder="2014872367" v-model="boleta"></md-input>
            </md-input-container>
            <md-input-container md-has-password>
              <md-icon>lock</md-icon>
              <label>Contraseña</label>
              <md-input type="password" v-model="password"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" @click="login">Entrar</md-button>
          </form>
          <div class="has-ripple red" v-if="error">
            <div v-for="err in errors"><md-ink-ripple/> {{ err }} <br></md-ink-ripple></div>
          </div>
        </md-tab>

        <md-tab id="profesor" md-label="Profesor">
         
        </md-tab>

        <md-tab id="administrador" md-label="Administrador">

        </md-tab>
      </md-tabs>
    </md-layout>
  </md-layout>
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

<style type="text/css">
  .has-ripple {
    margin-bottom: 16px;
    padding: 20px;
    display: inline-block;
    position: relative;
  }

  .blue {
    color: #2196F3;
  }

  .purple {
    color: #9C27B0;
  }

  .red {
    color: #F44336;
  }

  .card-ripple {
    width: 300px;
    margin-top: 24px;
  }
</style>

