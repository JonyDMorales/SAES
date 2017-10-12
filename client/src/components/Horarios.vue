<template>
  <div class="ui main container">
    <div class="ui horizontal divider">
    Horarios
    </div>
    <div class="ui grid">
      <div class="four wide column">
        <div class="ui fluid icon input">
          <input type="text" placeholder="Buscar...">
          <i class="search icon"></i>
        </div>
      </div>
      <div class="four wide column">
        <div class="ui form">
          <div class="field">
            <select class="ui fluid dropdown">
            <option value="">Grupos</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
            </select>
          </div>
        </div>
      </div>
      <div class="four wide column">
        <div class="ui form">
          <div class="field">
            <select class="ui fluid dropdown">
            <option value="">Unidades de Aprendizaje</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
            </select>
          </div>
        </div>
      </div>
    </div>
     <div class="ui horizontal divider">
    *
    </div>
    <div class="row">
      <table class="ui orange celled table">
        <thead>
          <tr class="center aligned">
            <th>1CM1</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Agregar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="horario in horarios" class="center aligned">
            <td>{{ horario }}</td>
            <td>{{ horario }}</td>
            <td>{{ horario }}</td>
            <td>{{ horario }}</td>
            <td>{{ horario }}</td>
            <td>{{ horario }}</td>
            <td>
              <button class="ui compact green icon button">
                <i class="add square icon"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot class="full-width">
          <tr>
            <th></th>
            <th colspan="6">
              <div class="ui right floated small primary labeled icon button">
                <i class="bookmark icon"></i> Guardar como Horario
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import HorariosService from '@/services/HorariosService'

export default {

  name: 'horarios',
  methods:
  {
    async getHorarios () {
      const response = await HorariosService.index()
      this.horarios = response.data
    }
  },
  data () {
    return {
      horarios: ['dd']
    }
  },
  mounted () {
    this.getHorarios()
  }

}

</script>

