<template>
  <!--
  <div class="ui main container" v-if="!isAuthorized">
    <div class="ui two column centered grid">
      <div class="four column centered row">
        <i class="massive red warning sign icon"></i>
      </div>
      <div class="two column centered row">
        <div class="column">
          <div class="ui huge red statistic">
            <div class="value">
              Accesso NO Autorizado
            </div>
            <div class="label">
              *
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  -->
  <!--
  <div class="ui active centered inline loader" v-if="!isReady"></div>
  <div class="ui main container" v-if="isHorariosGenerated">
    <table class="ui small orange celled table" v-for="schedule in schedules">
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in schedule" class="center aligned">
          <td class="collapsing">{{ s.grupo }}</td>
          <td class="collapsing">{{ s.unidad_aprendizaje }}</td>
          <td class="collapsing">{{ s.profesor }}</td>
          <td class="collapsing" >{{ s.horarios[0].hora_inicio  + ' - ' + s.horarios[0].hora_fin }}</td>
          <td class="collapsing">{{ s.horarios[1].hora_inicio  + ' - ' + s.horarios[1].hora_fin }}</td>
          <td class="collapsing">{{ s.horarios[2].hora_inicio  + ' - ' + s.horarios[2].hora_fin }}</td>
          <td class="collapsing">{{ s.horarios[3].hora_inicio  + ' - ' + s.horarios[3].hora_fin }}</td>
          <td class="collapsing">{{ s.horarios[4].hora_inicio  + ' - ' + s.horarios[4].hora_fin }}</td>
          <td class="collapsing">{{ s.lugares_disponibles }}</td>
        </tr>
      </tbody>
      <tfoot class="full-width">
        <tr>
          <th></th>
          <th colspan="8">
            <div class="ui right floated small primary labeled icon button">
              <i class="bookmark icon"></i> Agregar a Marcadores
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
  -->

  <!-- HAHAHHA
  <div class="ui main container">
    <div class="ui active centered inline loader" v-if="!isReady"></div>
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
            <select class="ui fluid dropdown" v-model="groupSelected" id="dropDownGroups">
              <option value="">Grupo</option>
              <option v-for="namegroup in namegroups">{{ namegroup }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="six wide column">
        <div class="ui form">
          <div class="field">
            <select class="ui fluid dropdown" v-model="uaSelected" id="dropDownUAs">
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
            <th>Unidad Aprendizaje</th>
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
  -->
  <div>
    <br>
    <md-layout md-align="center" v-if="!isReady">
      <md-spinner :md-size="20" md-indeterminate></md-spinner>
    </md-layout>

    <md-layout md-align="center">
      <md-layout md-flex="30">
        <md-input-container>
          <label for="groupSelected">Grupo</label>
          <md-select name="groupSelected" id="groupSelected" v-model="groupSelected" @change="onChangeGroup">
            <md-option v-for="namegroup in namegroups" :key="namegroup" :value="namegroup">{{ namegroup }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>

      <md-layout md-flex="30" md-flex-offset="10">
        <md-input-container>
          <label for="uaSelected">Unidad de Aprendizaje</label>
          <md-select name="uaSelected" id="uaSelected" v-model="uaSelected"  @change="onChangeUA">
            <md-option v-for="nameUA in nameUAs" :key="nameUA" :value="nameUA">{{ nameUA }}</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout md-align="center">
      <md-chip class="md-primary">{{ currentSchedule }}</md-chip>
    </md-layout>

    <md-layout md-align="center">
      <md-table v-if="makeSchedule">
        <md-table-header>
          <md-table-row>
            <md-table-head>Grupo</md-table-head>
            <md-table-head>Unidad Aprendizaje</md-table-head>
            <md-table-head>Profesor</md-table-head>
            <md-table-head>Lunes</md-table-head>
            <md-table-head>Martes</md-table-head>
            <md-table-head>Miércoles</md-table-head>
            <md-table-head>Jueves</md-table-head>
            <md-table-head>Viernes</md-table-head>
            <md-table-head>Lugares</md-table-head>
            <md-table-head v-if="makeSchedule">Quitar</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="clase in selectedClasses" :key="clase.id">
            <md-table-cell>{{ clase.grupo }}</md-table-cell>
            <md-table-cell>{{ clase.unidad_aprendizaje }}</md-table-cell>
            <md-table-cell>{{ clase.profesor }}</md-table-cell>
            <md-table-cell>{{ clase.horarios[0].hora_inicio  + ' - ' + clase.horarios[0].hora_fin }}</md-table-cell>
            <md-table-cell>{{ clase.horarios[1].hora_inicio  + ' - ' + clase.horarios[1].hora_fin }}</md-table-cell>
            <md-table-cell>{{ clase.horarios[2].hora_inicio  + ' - ' + clase.horarios[2].hora_fin }}</md-table-cell>
            <md-table-cell>{{ clase.horarios[3].hora_inicio  + ' - ' + clase.horarios[3].hora_fin }}</md-table-cell>
            <md-table-cell>{{ clase.horarios[4].hora_inicio  + ' - ' + clase.horarios[4].hora_fin }}</md-table-cell>
            <md-table-cell>{{ clase.lugares_disponibles }}</md-table-cell>
            <md-table-cell v-if="makeSchedule">
              <md-button md-theme="purple" class="md-fab" @click="removeFromSelected(clase.id)">
                <md-icon>dialpad</md-icon>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>

      <md-table v-if="isByGroup">
        <md-table-header>
          <md-table-row>
            <md-table-head>Unidad Aprendizaje</md-table-head>
            <md-table-head>Profesor</md-table-head>
            <md-table-head>Lunes</md-table-head>
            <md-table-head>Martes</md-table-head>
            <md-table-head>Miércoles</md-table-head>
            <md-table-head>Jueves</md-table-head>
            <md-table-head>Viernes</md-table-head>
            <md-table-head>Lugares</md-table-head>
            <md-table-head v-if="makeSchedule">Quitar</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="group in currentGroup" :key="group.id">
            <md-table-cell>{{ group.unidad_aprendizaje }}</md-table-cell>
            <md-table-cell>{{ group.profesor }}</md-table-cell>
            <md-table-cell>{{ group.horarios[0].hora_inicio  + ' - ' + group.horarios[0].hora_fin }}</md-table-cell>
            <md-table-cell>{{ group.horarios[1].hora_inicio  + ' - ' + group.horarios[1].hora_fin }}</md-table-cell>
            <md-table-cell>{{ group.horarios[2].hora_inicio  + ' - ' + group.horarios[2].hora_fin }}</md-table-cell>
            <md-table-cell>{{ group.horarios[3].hora_inicio  + ' - ' + group.horarios[3].hora_fin }}</md-table-cell>
            <md-table-cell>{{ group.horarios[4].hora_inicio  + ' - ' + group.horarios[4].hora_fin }}</md-table-cell>
            <md-table-cell>{{ group.lugares_disponibles }}</md-table-cell>
            <md-table-cell v-if="makeSchedule">
              <md-button md-theme="purple" class="md-fab" @click="addClase(group.id,group.grupo)">
                <md-icon>dialpad</md-icon>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>

      <md-table v-if="isByUAs">
        <md-table-header>
          <md-table-row>
            <md-table-head>Grupo</md-table-head>
            <md-table-head>Profesor</md-table-head>
            <md-table-head>Lunes</md-table-head>
            <md-table-head>Martes</md-table-head>
            <md-table-head>Miércoles</md-table-head>
            <md-table-head>Jueves</md-table-head>
            <md-table-head>Viernes</md-table-head>
            <md-table-head>Lugares</md-table-head>
            <md-table-head v-if="makeSchedule">Quitar</md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="ua in currentGroupUa" :key="ua.id">
            <md-table-cell>{{ ua.grupo }}</md-table-cell>
            <md-table-cell>{{ ua.profesor }}</md-table-cell>
            <md-table-cell>{{ ua.horarios[0].hora_inicio  + ' - ' + ua.horarios[0].hora_fin }}</md-table-cell>
            <md-table-cell>{{ ua.horarios[1].hora_inicio  + ' - ' + ua.horarios[1].hora_fin }}</md-table-cell>
            <md-table-cell>{{ ua.horarios[2].hora_inicio  + ' - ' + ua.horarios[2].hora_fin }}</md-table-cell>
            <md-table-cell>{{ ua.horarios[3].hora_inicio  + ' - ' + ua.horarios[3].hora_fin }}</md-table-cell>
            <md-table-cell>{{ ua.horarios[4].hora_inicio  + ' - ' + ua.horarios[4].hora_fin }}</md-table-cell>
            <md-table-cell>{{ ua.lugares_disponibles }}</md-table-cell>
            <md-table-cell v-if="makeSchedule">
              <md-button md-theme="purple" class="md-fab" @click="addClase(ua.id, ua.grupo)">
                <md-icon>dialpad</md-icon>
              </md-button>
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-layout>
  </div>
</template>

<script>
import HorariosService from '@/services/HorariosService'
import Bucket from 'buckets-js'

export default {

  name: 'horarios',
  methods:
  {
    async getHorarios () {
      try {
        const response = await HorariosService.index()
        this.horarios = response.data
        var namegroups = new Bucket.Set()
        var nameUAs = new Bucket.Set()
        var groups = new Bucket.Dictionary()
        var uas = new Bucket.Dictionary()
        this.horarios.forEach((horario) => {
          namegroups.add(horario.grupo)
          nameUAs.add(horario.unidad_aprendizaje)
          if (groups.get(horario.grupo)) {
            groups.get(horario.grupo).push(horario)
          } else {
            groups.set(horario.grupo, [horario])
          }
          if (uas.get(horario.unidad_aprendizaje)) {
            uas.get(horario.unidad_aprendizaje).push(horario)
          } else {
            uas.set(horario.unidad_aprendizaje, [horario])
          }
        })
        this.namegroups = namegroups.toArray()
        this.nameUAs = nameUAs.toArray()
        this.groups = groups.values()
        this.UAs = uas.values()
        this.currentGroup = this.groups[0]
        this.groupSelected = '1CM1'
        this.uaSelected = ''
        this.isReady = true
        this.isAuthorized = true
      } catch (err) {
      }
    },
    activateSelectHorario () {
      if (this.makeSchedule) {
        this.msgButton = 'Crear Lista de Clases'
      } else {
        this.msgButton = 'Cancelar'
        this.selectedClasses = []
      }
      this.makeSchedule = !this.makeSchedule
    },
    addClase (id, group) {
      for (var i = this.horarios.length - 1; i >= 0; i--) {
        if (this.horarios[i].id === id) {
          this.selectedClasses.push(this.horarios[i])
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
      this.schedules = response.data
      this.isHorariosGenerated = true
    },
    back () {
      this.isHorariosGenerated = false
    },
    onChangeGroup (val) {
      this.currentSchedule = 'Grupo: ' + val
      for (var i = this.groups.length - 1; i >= 0; i--) {
        if (this.groups[i][0].grupo === val) {
          this.currentGroup = this.groups[i]
          break
        }
      }
      this.isByGroup = true
      this.isByUAs = false
      this.groupSelected = val
      this.uaSelected = ''
    },
    onChangeUA (val) {
      for (var i = this.UAs.length - 1; i >= 0; i--) {
        if (this.UAs[i][0].unidad_aprendizaje === val) {
          this.currentGroupUa = this.UAs[i]
          break
        }
      }
      this.isByGroup = false
      this.isByUAs = true
      this.groupSelected = ''
      this.uaSelected = val
      this.currentSchedule = 'Unidad de Aprendizaje: ' + val
    }
  },
  data () {
    return {
      horarios: [],
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
      msgButton: 'Crear Lista de Clases',
      isHorariosGenerated: false,
      schedules: null,
      isReady: false,
      isAuthorized: false
    }
  },
  mounted () {
    this.getHorarios()
  }

}

</script>

