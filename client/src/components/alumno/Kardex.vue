<template>
  
</template>

<script>
import AlumnoService from '@/services/AlumnoService'

export default {

  name: 'kardex',
  methods:
  {
    async getKardexData () {
      const response = await AlumnoService.kardex(this.$store.state.alumno.boleta)
      this.uasCursadas = response.data.unidades_cursadas
      this.uasAprobadas = response.data.unidades_aprobadas
      this.uasReprobadas = response.data.unidades_no_aprobadas
      // console.log(response.data)
    }

  },
  data () {
    return {
      uasCursadas: [],
      uasAprobadas: [],
      uasReprobadas: []
    }
  },
  mounted () {
    this.getKardexData()
  }

}

</script>

