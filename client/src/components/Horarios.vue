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
      <div class="two wide column">
        <div class="ui form">
          <div class="field">
            <select class="ui fluid dropdown" v-model="groupSelected">
              <option value="">Grupo</option>
              <option v-for="namegroup in namegroups">{{ namegroup }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="six wide column">
        <div class="ui form">
          <div class="field">
            <select class="ui fluid dropdown" v-model="uaSelected">
              <option value="">Unidad de Aprendizaje</option>
              <option v-for="nameUA in nameUAs">{{ nameUA }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="four wide column">
        <button  @click="activateSelectHorario()" class="ui blue right labeled icon button">
          <i class="add to calendar icon"></i>
          {{ msgButton }}
        </button>
      </div>
    </div>
     <div class="ui horizontal divider">
    *
    </div>
    <div class="row">
      <table class="ui small orange celled table" v-if="makeSchedule">
        <thead>
          <tr class="center aligned">
            <th>Grupo</th>
            <th>Unidad Aprendizaje</th>
            <th>Profesor</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Lugares</th>
            <th v-if="makeSchedule">Quitar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="clase in selectedClasses" class="center aligned">
            <td class="collapsing">{{ clase.grupo }}</td>
            <td class="collapsing">{{ clase.unidad_aprendizaje }}</td>
            <td class="collapsing">{{ clase.profesor }}</td>
            <td class="collapsing" >{{ clase.horarios[0].hora_inicio  + ' - ' + clase.horarios[0].hora_fin }}</td>
            <td class="collapsing">{{ clase.horarios[1].hora_inicio  + ' - ' + clase.horarios[1].hora_fin }}</td>
            <td class="collapsing">{{ clase.horarios[2].hora_inicio  + ' - ' + clase.horarios[2].hora_fin }}</td>
            <td class="collapsing">{{ clase.horarios[3].hora_inicio  + ' - ' + clase.horarios[3].hora_fin }}</td>
            <td class="collapsing">{{ clase.horarios[4].hora_inicio  + ' - ' + clase.horarios[4].hora_fin }}</td>
            <td class="collapsing">{{ clase.lugares_disponibles }}</td>
            <td v-if="makeSchedule" class="collapsing">
              <button class="ui compact red icon button" @click="removeFromSelected(clase.id)">
                <i class="remove square icon"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot class="full-width">
          <tr>
            <th></th>
            <th colspan="9">
              <div class="ui right floated small primary labeled icon button" @click="getSchedules()">
                <i class="table icon"></i> Generar Horarios
              </div>
            </th>
          </tr>
        </tfoot>
      </table>

      <a class="ui blue label">{{ currentSchedule }}</a>
      <table class="ui small orange celled table" v-if="isByGroup">
        <thead>
          <tr class="center aligned">
            <th>Asignatura</th>
            <th>Profesor</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Lugares</th>
            <th v-if="makeSchedule">Agregar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="group in currentGroup" class="center aligned">
            <td class="collapsing">{{ group.unidad_aprendizaje }}</td>
            <td class="collapsing">{{ group.profesor }}</td>
            <td class="collapsing" >{{ group.horarios[0].hora_inicio  + ' - ' + group.horarios[0].hora_fin }}</td>
            <td class="collapsing">{{ group.horarios[1].hora_inicio  + ' - ' + group.horarios[1].hora_fin }}</td>
            <td class="collapsing">{{ group.horarios[2].hora_inicio  + ' - ' + group.horarios[2].hora_fin }}</td>
            <td class="collapsing">{{ group.horarios[3].hora_inicio  + ' - ' + group.horarios[3].hora_fin }}</td>
            <td class="collapsing">{{ group.horarios[4].hora_inicio  + ' - ' + group.horarios[4].hora_fin }}</td>
            <td class="collapsing">{{ group.lugares_disponibles }}</td>
            <td v-if="makeSchedule" class="collapsing">
              <button class="ui compact green icon button" @click="addClase(group.id,group.grupo)">
                <i class="plus square icon"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="ui small orange celled table" v-if="isByUAs">
        <thead>
          <tr class="center aligned">
            <th>Grupo</th>
            <th>Profesor</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miércoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Lugares</th>
            <th v-if="makeSchedule">Agregar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ua in currentGroupUa" class="center aligned">
            <td class="collapsing">{{ ua.grupo }}</td>
            <td class="collapsing">{{ ua.profesor }}</td>
            <td class="collapsing" >{{ ua.horarios[0].hora_inicio  + ' - ' + ua.horarios[0].hora_fin }}</td>
            <td class="collapsing">{{ ua.horarios[1].hora_inicio  + ' - ' + ua.horarios[1].hora_fin }}</td>
            <td class="collapsing">{{ ua.horarios[2].hora_inicio  + ' - ' + ua.horarios[2].hora_fin }}</td>
            <td class="collapsing">{{ ua.horarios[3].hora_inicio  + ' - ' + ua.horarios[3].hora_fin }}</td>
            <td class="collapsing">{{ ua.horarios[4].hora_inicio  + ' - ' + ua.horarios[4].hora_fin }}</td>
            <td class="collapsing">{{ ua.lugares_disponibles }}</td>
            <td v-if="makeSchedule" class="collapsing">
              <button class="ui compact green icon button" @click="addClase(ua.id, ua.grupo)">
                <i class="plus square icon"></i>
              </button>
            </td>
          </tr>
        </tbody>
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
      this.namegroups = response.data.namegroups
      this.groups = response.data.groups
      this.currentGroup = response.data.groups[0].clases
      this.nameUAs = response.data.nameUAs
      this.UAs = response.data.uas
    },
    activateSelectHorario () {
      if (this.makeSchedule) {
        this.msgButton = 'Crear Lista de Clases'
      } else {
        this.msgButton = 'Borrar Todo'
        this.selectedClasses = []
      }
      this.makeSchedule = !this.makeSchedule
    },
    addClase (id, group) {
      // console.log('Added => ' + id + ' - ' + group)
      for (var i = this.groups.length - 1; i >= 0; i--) {
        if (this.groups[i].grupo === group) {
          for (var j = this.groups[i].clases.length - 1; j >= 0; j--) {
            if (this.groups[i].clases[j].id === id) {
              this.selectedClasses.push(this.groups[i].clases[j])
              break
            }
          }
          break
        }
      }
    },
    removeFromSelected (id) {
      var idx = 0
      for (var i = this.selectedClasses.length - 1; i >= 0; i--) {
        if (this.selectedClasses[i].id === id) {
          idx = i
          break
        }
      }
      this.selectedClasses.splice(idx, 1)
    },
    async getSchedules () {
      const response = await HorariosService.makeSchedules(this.selectedClasses)
      console.log(response.data)
    }
  },
  data () {
    return {
      groups: [],
      UAs: [],
      namegroups: [],
      nameUAs: [],
      groupSelected: '1CM1',
      uaSelected: '',
      currentGroup: [],
      currentGroupUa: [],
      isByGroup: true,
      isByUAs: false,
      currentSchedule: 'Grupo: 1CM1',
      makeSchedule: false,
      selectedClasses: [],
      msgButton: 'Crear Lista de Clases'
    }
  },
  mounted () {
    this.getHorarios()
  },
  watch: {
    groupSelected: function (val) {
      this.currentSchedule = 'Grupo: ' + this.groupSelected
      for (var i = this.groups.length - 1; i >= 0; i--) {
        if (this.groups[i].grupo === val) {
          this.currentGroup = this.groups[i].clases
          break
        }
      }
      this.isByGroup = true
      this.isByUAs = false
    },
    uaSelected: function (val) {
      this.currentSchedule = 'Unidad de Aprendizaje: ' + this.uaSelected
      for (var i = this.UAs.length - 1; i >= 0; i--) {
        if (this.UAs[i].unidad_aprendizaje === val) {
          this.currentGroupUa = this.UAs[i].clases
          break
        }
      }
      this.isByGroup = false
      this.isByUAs = true
    }
  }

}

</script>

