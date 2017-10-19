<template>
  <!--
  <div class="ui container">
    <div class="ui horizontal divider">
    Generar Citas Reinscripción
    </div>
    <div class="ui form">
      <div class="two fields">
        <div class="field">
          <label>Desde</label>
          <div class="ui calendar" id="calendarStartDate">
            <div class="ui input left icon">
              <i class="calendar icon"></i>
              <input type="text" name="dateField" placeholder="" id="dateField" v-model="startDate">
            </div>
          </div>
        </div>
        <div class="field">
         <label>Hasta</label>
          <div class="ui calendar" id="calendarEndDate">
            <div class="ui input left icon">
              <i class="calendar icon"></i>
              <input type="text" name="date" placeholder="" id="dateField2" v-model="endDate">
            </div>
          </div>
        </div>
      </div>
      <div class="ui blue button" @click="generateCitas()">Generar Citas Reinscripción</div>
    </div>

    <table class="ui blue celled table" v-if="endRequest">
      <thead>
        <tr class="center aligned">
          <th>Boleta</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="horario in horarios" class="center aligned">
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
-->
  <div>
    <md-layout md-align="center" md-gutter>
      <md-layout md-align="center" md-gutter>
         
      </md-layout>
    </md-layout>
  </div>
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

