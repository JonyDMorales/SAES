<template>
  
</template>

<script>
// import CitasService from '@/services/CitasService'

export default {

  name: 'generarCitas',
  methods:
  {
    async generateCitas () {
      /*
      const response = await CitasService.store({
        startDate: new Date(this.startDate),
        endDate: new Date(this.endDate)
      })
      this.citas = response.data
      this.endRequest = true
      */
      console.log(this.startDate)
      console.log(this.endDate)
      // console.log(new Date(this.startDate))
    }
  },
  data () {
    return {
      citas: [],
      startDate: '',
      endDate: '',
      endRequest: false
    }
  }

}

</script>

