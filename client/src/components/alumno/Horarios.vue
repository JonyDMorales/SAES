<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
    <v-layout row>
      <v-flex xs2>
        <v-text-field
        prepend-icon="search"
        label="Buscar"
        single-line
        hide-details
        v-model="search"
        class="ml-4"
        @input="onSearch"
        ></v-text-field>
      </v-flex>
      <v-flex xs1 offset-xs1>
        <v-select
          v-bind:items="namegroups"
          v-model="groupSelected"
          label="Grupo"
          single-line
          bottom
        ></v-select>
      </v-flex>
      <v-flex xs4 offset-xs1>
        <v-select
          v-bind:items="nameUAs"
          v-model="uaSelected"
          label="Unidad de Aprendizaje"
          single-line
          bottom
        ></v-select>
      </v-flex>
      <v-flex xs2 offset-xs1>
        <v-tooltip top>
          <v-btn small dark fab color="primary" class="mt-3" slot="activator" @click="activateSelectHorario()">
            <v-icon v-if="!makeSchedule">list</v-icon>
            <v-icon v-else>cancel</v-icon>
          </v-btn>
          <span v-if="!makeSchedule">Crear Nueva Lista</span>
          <span v-else>Cancelar</span>
        </v-tooltip>
        <v-tooltip top v-if="makeSchedule">
          <v-btn small dark fab color="primary" class="mt-3" slot="activator" @click="horariosSheet = true">
            <v-icon>remove_red_eye</v-icon>
          </v-btn>
          <span>Ver Lista</span>
        </v-tooltip>
        <v-tooltip top v-if="makeSchedule">
          <v-btn small dark fab color="primary" class="mt-3" slot="activator" @click="getSchedules()">
            <v-icon>schedule</v-icon>
          </v-btn>
          <span>Generar Horarios</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>

        <v-bottom-sheet v-model="horariosSheet">
          <v-data-table
            v-bind:headers="selectedClassesHeaders"
            :items="selectedClasses"
            hide-actions
            class="elevation-2"
          >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.grupo }}</td>
            <td>{{ props.item.unidad_aprendizaje }}</td>
            <td>{{ props.item.profesor }}</td>
            <td>{{ props.item.horarios[0].hora_inicio  + ' - ' + props.item.horarios[0].hora_fin }}</td>
            <td>{{ props.item.horarios[1].hora_inicio  + ' - ' + props.item.horarios[1].hora_fin }}</td>
            <td>{{ props.item.horarios[2].hora_inicio  + ' - ' + props.item.horarios[2].hora_fin }}</td>
            <td>{{ props.item.horarios[3].hora_inicio  + ' - ' + props.item.horarios[3].hora_fin }}</td>
            <td>{{ props.item.horarios[4].hora_inicio  + ' - ' + props.item.horarios[4].hora_fin }}</td>
            <td>{{ props.item.lugares_disponibles }}</td>
            <td>
              <v-btn dark color="red darken-1" class="mt-3" small fab @click="removeFromSelected(props.item.id)">
                <v-icon>remove</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
        </v-bottom-sheet>

        <v-data-table
          v-bind:headers="gloabalHeader"
          :items="horarios"
          v-bind:search="search"
          hide-actions
          class="elevation-2"
          v-if="isGlobal"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.grupo }}</td>
          <td>{{ props.item.unidad_aprendizaje }}</td>
          <td>{{ props.item.profesor }}</td>
          <td>{{ props.item.horarios[0].hora_inicio  + ' - ' + props.item.horarios[0].hora_fin }}</td>
          <td>{{ props.item.horarios[1].hora_inicio  + ' - ' + props.item.horarios[1].hora_fin }}</td>
          <td>{{ props.item.horarios[2].hora_inicio  + ' - ' + props.item.horarios[2].hora_fin }}</td>
          <td>{{ props.item.horarios[3].hora_inicio  + ' - ' + props.item.horarios[3].hora_fin }}</td>
          <td>{{ props.item.horarios[4].hora_inicio  + ' - ' + props.item.horarios[4].hora_fin }}</td>
          <td>{{ props.item.lugares_disponibles }}</td>
          <td v-if="makeSchedule">
            <v-btn dark color="primary" small fab @click="addClase(props.item.id, props.item.grupo)">
              <v-icon>add</v-icon>
            </v-btn>
          </td>
        </template>
       </v-data-table>

        <v-data-table
          v-bind:headers="groupHeaders"
          :items="currentGroup"
          hide-actions
          class="elevation-2"
          v-if="isByGroup"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.unidad_aprendizaje }}</td>
          <td>{{ props.item.profesor }}</td>
          <td>{{ props.item.horarios[0].hora_inicio  + ' - ' + props.item.horarios[0].hora_fin }}</td>
          <td>{{ props.item.horarios[1].hora_inicio  + ' - ' + props.item.horarios[1].hora_fin }}</td>
          <td>{{ props.item.horarios[2].hora_inicio  + ' - ' + props.item.horarios[2].hora_fin }}</td>
          <td>{{ props.item.horarios[3].hora_inicio  + ' - ' + props.item.horarios[3].hora_fin }}</td>
          <td>{{ props.item.horarios[4].hora_inicio  + ' - ' + props.item.horarios[4].hora_fin }}</td>
          <td>{{ props.item.lugares_disponibles }}</td>
          <td v-if="makeSchedule">
            <v-btn dark color="primary" small fab @click="addClase(props.item.id, props.item.grupo)">
              <v-icon>add</v-icon>
            </v-btn>
          </td>
        </template>
       </v-data-table>

       <v-data-table
          v-bind:headers="uaHeaders"
          :items="currentGroupUa"
          hide-actions
          class="elevation-2"
          v-if="isByUAs"
        >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.grupo }}</td>
          <td>{{ props.item.profesor }}</td>
          <td>{{ props.item.horarios[0].hora_inicio  + ' - ' + props.item.horarios[0].hora_fin }}</td>
          <td>{{ props.item.horarios[1].hora_inicio  + ' - ' + props.item.horarios[1].hora_fin }}</td>
          <td>{{ props.item.horarios[2].hora_inicio  + ' - ' + props.item.horarios[2].hora_fin }}</td>
          <td>{{ props.item.horarios[3].hora_inicio  + ' - ' + props.item.horarios[3].hora_fin }}</td>
          <td>{{ props.item.horarios[4].hora_inicio  + ' - ' + props.item.horarios[4].hora_fin }}</td>
          <td>{{ props.item.lugares_disponibles }}</td>
          <td v-if="makeSchedule">
            <v-btn dark color="primary" small fab @click="addClase(props.item.id, props.item.grupo)">
              <v-icon>add</v-icon>
            </v-btn>
          </td>
        </template>
       </v-data-table>
      </v-flex>
    </v-layout>
    </v-card>
  </v-container>
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
        this.currentGroup = this.groups[0]
        this.groupSelected = '1CM1'
        this.uaSelected = ''
        this.isReady = true
        this.isAuthorized = true
      } catch (err) {
      }
    },
    activateSelectHorario () {
      this.makeSchedule = !this.makeSchedule
      if (this.makeSchedule) {
        this.uaHeaders.push({
          text: 'Agregar',
          value: 'agregar',
          align: 'left',
          sortable: false
        })
        this.groupHeaders.push({
          text: 'Agregar',
          value: 'agregar',
          align: 'left',
          sortable: false
        })
        this.gloabalHeader.push({
          text: 'Agregar',
          value: 'agregar',
          align: 'left',
          sortable: false
        })
      } else {
        this.uaHeaders.pop()
        this.groupHeaders.pop()
        this.gloabalHeader.pop()
        this.selectedClasses = []
      }
    },
    addClase (id, group) {
      for (var i = this.horarios.length - 1; i >= 0; i--) {
        if (this.horarios[i].id === id) {
          var found = false
          for (var j = this.selectedClasses.length - 1; j >= 0; j--) {
            if (this.selectedClasses[j].id === this.horarios[i].id) {
              found = true
              break
            }
          }
          if (!found) {
            this.selectedClasses.push(this.horarios[i])
            break
          }
          break
        }
      }
      this.horariosSheet = true
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
      this.horariosSheet = true
    },
    async getSchedules () {
      const response = await HorariosService.makeSchedules(this.selectedClasses)
      this.schedules = response.data
      this.isHorariosGenerated = true
    },
    back () {
      this.isHorariosGenerated = false
    },
    onSearch () {
      this.isGlobal = true
      this.isByGroup = false
      this.isByUAs = false
    }
  },
  data () {
    return {
      search: '',
      horarios: [],
      groupSelected: '1CM1',
      uaSelected: '',
      currentGroup: [],
      currentGroupUa: [],
      isByGroup: true,
      isByUAs: false,
      isGlobal: false,
      currentSchedule: 'Grupo: 1CM1',
      makeSchedule: false,
      selectedClasses: [],
      isHorariosGenerated: false,
      schedules: null,
      isReady: false,
      isAuthorized: false,
      horariosSheet: false,
      groupHeaders: [
        {
          text: 'Unidad Aprendizaje',
          value: 'unidad_aprendizaje',
          align: 'left'
        },
        {
          text: 'Profesor',
          value: 'profesor',
          align: 'left'
        },
        {
          text: 'Lunes',
          value: 'Lunes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Martes',
          value: 'Martes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Miércoles',
          value: 'Miércoles',
          align: 'left',
          sortable: false
        },
        {
          text: 'Jueves',
          value: 'Jueves',
          align: 'left',
          sortable: false
        },
        {
          text: 'Viernes',
          value: 'Viernes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Lugares',
          value: 'lugares_disponibles',
          align: 'left'
        }
      ],
      uaHeaders: [
        {
          text: 'Grupo',
          value: 'grupo',
          align: 'left'
        },
        {
          text: 'Profesor',
          value: 'profesor',
          align: 'left'
        },
        {
          text: 'Lunes',
          value: 'Lunes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Martes',
          value: 'Martes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Miércoles',
          value: 'Miércoles',
          align: 'left',
          sortable: false
        },
        {
          text: 'Jueves',
          value: 'Jueves',
          align: 'left',
          sortable: false
        },
        {
          text: 'Viernes',
          value: 'Viernes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Lugares',
          value: 'lugares_disponibles',
          align: 'left'
        }
      ],
      selectedClassesHeaders: [
        {
          text: 'Grupo',
          value: 'grupo',
          align: 'left'
        },
        {
          text: 'Unidad de Aprendizaje',
          value: 'ua',
          align: 'left'
        },
        {
          text: 'Profesor',
          value: 'profesor',
          align: 'left'
        },
        {
          text: 'Lunes',
          value: 'Lunes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Martes',
          value: 'Martes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Miércoles',
          value: 'Miércoles',
          align: 'left',
          sortable: false
        },
        {
          text: 'Jueves',
          value: 'Jueves',
          align: 'left',
          sortable: false
        },
        {
          text: 'Viernes',
          value: 'Viernes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Lugares',
          value: 'lugares_disponibles',
          align: 'left'
        },
        {
          text: 'Quitar',
          value: 'quitar',
          align: 'left',
          sortable: false
        }
      ],
      gloabalHeader: [
        {
          text: 'Grupo',
          value: 'grupo',
          align: 'left'
        },
        {
          text: 'Unidad de Aprendizaje',
          value: 'ua',
          align: 'left'
        },
        {
          text: 'Profesor',
          value: 'profesor',
          align: 'left'
        },
        {
          text: 'Lunes',
          value: 'Lunes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Martes',
          value: 'Martes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Miércoles',
          value: 'Miércoles',
          align: 'left',
          sortable: false
        },
        {
          text: 'Jueves',
          value: 'Jueves',
          align: 'left',
          sortable: false
        },
        {
          text: 'Viernes',
          value: 'Viernes',
          align: 'left',
          sortable: false
        },
        {
          text: 'Lugares',
          value: 'lugares_disponibles',
          align: 'left'
        }
      ]
    }
  },
  mounted () {
    this.getHorarios()
  },
  watch: {
    groupSelected () {
      this.search = ''
      this.uaSelected = ''
      for (var i = this.groups.length - 1; i >= 0; i--) {
        if (this.groups[i][0].grupo === this.groupSelected) {
          this.currentGroup = this.groups[i]
          break
        }
      }
      this.isGlobal = false
      this.isByUAs = false
      this.isByGroup = true
    },
    uaSelected () {
      this.search = ''
      this.groupSelected = ''
      for (var i = this.UAs.length - 1; i >= 0; i--) {
        if (this.UAs[i][0].unidad_aprendizaje === this.uaSelected) {
          this.currentGroupUa = this.UAs[i]
          break
        }
      }
      this.isGlobal = false
      this.isByGroup = false
      this.isByUAs = true
    }
  },
  computed: {
    namegroups: function () {
      var names = new Bucket.Set()
      this.horarios.forEach((horario) => {
        names.add(horario.grupo)
      })
      return names.toArray()
    },
    nameUAs: function () {
      var names = new Bucket.Set()
      this.horarios.forEach((horario) => {
        names.add(horario.unidad_aprendizaje)
      })
      return names.toArray()
    },
    groups: function () {
      var groups = new Bucket.Dictionary()
      this.horarios.forEach((horario) => {
        if (groups.get(horario.grupo)) {
          groups.get(horario.grupo).push(horario)
        } else {
          groups.set(horario.grupo, [horario])
        }
      })
      return groups.values()
    },
    UAs: function () {
      var uas = new Bucket.Dictionary()
      this.horarios.forEach((horario) => {
        if (uas.get(horario.unidad_aprendizaje)) {
          uas.get(horario.unidad_aprendizaje).push(horario)
        } else {
          uas.set(horario.unidad_aprendizaje, [horario])
        }
      })
      return uas.values()
    }
  }

}

</script>
