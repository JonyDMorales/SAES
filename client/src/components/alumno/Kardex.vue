<template>
	<div class="ui main container">
		<!--
		<div class="ui equal width center aligned padded grid">
		  <div class="row">
		    <div class="column">
		    	<div class="ui olive inverted raised segment">
		    		<div class="ui olive label">Análisis Vectorial</div>
		    	</div>
		    </div>
		    <div class="column">
		    	<div class="ui olive inverted raised segment">
		    		<div class="ui olive label">Cálculo</div>
		    	</div>
		    </div>
		    <div class="column">
		    	<div class="ui olive inverted raised segment">
		    		<div class="ui olive label">Matemáticas Discretas</div>
		    	</div>
		    </div>
		    <div class="column">
		    	<div class="ui grey inverted raised segment">
		    		<div class="ui grey label">Algoritmia y Programación Estructurada</div>
		    	</div>
		    </div>
		    <div class="column">
		    	<div class="ui olive inverted raised segment">
		    		<div class="ui olive label">Física</div>
		    	</div>
		    </div>
		    <div class="column">
		    	<div class="ui olive inverted raised segment">
		    		<div class="ui olive label">Ingeniería Ética y Sociedad</div>
		    	</div>
		    </div>
		  </div>
		</div>
		-->
    <div class="row">
      <table class="ui small very compact green celled table">
        <thead>
          <tr class="center aligned">
            <th>Unidad de Aprendizaje</th>
            <th>Periodo</th>
            <th>Forma Evaluación</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="uaa in uasAprobadas" class="center aligned">
            <td class="collapsing">{{ uaa.unidad_aprendizaje }}</td>
            <td class="collapsing">{{ uaa.periodo }}</td>
            <td class="collapsing">{{ uaa.forma_evaluacion }}</td>
            <td class="collapsing">{{ uaa.calificacion }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row">
      <table class="ui small very compact red celled table">
        <thead>
          <tr class="center aligned">
            <th>Unidad de Aprendizaje</th>
            <th>Periodo</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="uar in uasReprobadas" class="center aligned">
            <td class="collapsing">{{ uar.unidad_aprendizaje }}</td>
            <td class="collapsing">{{ uar.periodo }}</td>
            <td class="collapsing">{{ uar.calificacion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
	</div>
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

