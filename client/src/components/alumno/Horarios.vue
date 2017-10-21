<template>
  <v-container fluid>
    <v-layout row v-if="!isReady">
      <v-flex xs12>
         <v-progress-linear v-bind:indeterminate="true"></v-progress-linear>
      </v-flex>
    </v-layout>
    <v-card>
    <v-layout row>
      <v-flex xs3>
        <v-text-field
        prepend-icon="search"
        label="Buscar"
        single-line
        hide-details
        v-model="search"
        class="ml-4"
        ></v-text-field>
      </v-flex>
      <v-flex xs3 offset-xs1>
        <v-select
          v-bind:items="namegroups"
          v-model="groupSelected"
          label="Grupo"
          single-line
          bottom
        ></v-select>
      </v-flex>
      <v-flex xs3 offset-xs1>
        <v-select
          v-bind:items="nameUAs"
          v-model="uaSelected"
          label="Unidad de Aprendizaje"
          single-line
          bottom
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-data-table
          v-bind:headers="groupHeaders"
          :items="currentGroup"
          v-bind:search="search"
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
        </template>
       </v-data-table>

       <v-data-table
          v-bind:headers="uaHeaders"
          :items="currentGroupUa"
          v-bind:search="search"
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
      currentSchedule: 'Grupo: 1CM1',
      makeSchedule: false,
      selectedClasses: [],
      msgButton: 'Crear Lista de Clases',
      isHorariosGenerated: false,
      schedules: null,
      isReady: false,
      isAuthorized: false,
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
          align: 'left'
        },
        {
          text: 'Martes',
          value: 'Martes',
          align: 'left'
        },
        {
          text: 'Miércoles',
          value: 'Miércoles',
          align: 'left'
        },
        {
          text: 'Jueves',
          value: 'Jueves',
          align: 'left'
        },
        {
          text: 'Viernes',
          value: 'Viernes',
          align: 'left'
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
          align: 'left'
        },
        {
          text: 'Martes',
          value: 'Martes',
          align: 'left'
        },
        {
          text: 'Miércoles',
          value: 'Miércoles',
          align: 'left'
        },
        {
          text: 'Jueves',
          value: 'Jueves',
          align: 'left'
        },
        {
          text: 'Viernes',
          value: 'Viernes',
          align: 'left'
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
      for (var i = this.groups.length - 1; i >= 0; i--) {
        if (this.groups[i][0].grupo === this.groupSelected) {
          this.currentGroup = this.groups[i]
          break
        }
      }
      this.uaSelected = ''
      this.isByUAs = false
      this.isByGroup = true
    },
    uaSelected () {
      for (var i = this.UAs.length - 1; i >= 0; i--) {
        if (this.UAs[i][0].unidad_aprendizaje === this.uaSelected) {
          this.currentGroupUa = this.UAs[i]
          break
        }
      }
      this.groupSelected = ''
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

