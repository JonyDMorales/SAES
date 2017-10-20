<template>
  
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

