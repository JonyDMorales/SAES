<template>
  <div>
  <table class="ui celled striped table">
    <thead>
      <tr><th colspan="5">
        Alumnos
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="alumnos in alumnos">
        <td>{{ alumnos.boleta }}</td>
        <td>{{ alumnos.nombres }}</td>
        <td>{{ alumnos.apellido_paterno }}</td>
        <td>{{ alumnos.apellido_materno }}</td>
        <td>{{ alumnos.email }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import AlumnoService from '@/services/AlumnoService'

export default {

  name: 'alumnos',
  methods:
  {
    async getAlumnos () {
      const response = await AlumnoService.index()
      this.alumnos = response.data
    }

  },
  data () {
    return {
      alumnos: []
    }
  },
  mounted () {
    this.getAlumnos()
  }

}

</script>

