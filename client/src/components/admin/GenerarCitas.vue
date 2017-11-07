<template>
  <v-container fluid>
    <v-card>
      <v-subheader>Citas Reinscripción</v-subheader>
      <v-divider></v-divider>
      <br>
      <v-layout row v-if="!isReady">
        <v-flex xs4>
          <v-dialog
            persistent
            v-model="dialogStartDate"
            lazy
            full-width
          >
            <v-text-field
              slot="activator"
              label="Fecha de inicio"
              v-model="startDate"
              prepend-icon="event"
              readonly
              class="ml-4"
            ></v-text-field>
            <v-date-picker v-model="startDate" scrollable actions :first-day-of-week="1" locale="es-sp">
              <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
                  <v-btn flat color="primary" @click="save">Guardar</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-dialog>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-dialog
            persistent
            v-model="dialogEndDate"
            lazy
            full-width
          >
            <v-text-field
              slot="activator"
              label="Fecha fin"
              v-model="endDate"
              prepend-icon="event"
              readonly
            ></v-text-field>
            <v-date-picker v-model="endDate" scrollable actions :first-day-of-week="1" locale="es-sp">
              <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
                  <v-btn flat color="primary" @click="save">Guardar</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-dialog>
        </v-flex>
      </v-layout>
      <v-layout row v-if="!isReady">
        <v-flex xs4>
          <v-dialog
            persistent
            v-model="startTimeDialog"
            lazy
            full-width
          >
            <v-text-field
              slot="activator"
              label="Hora de inicio"
              v-model="startTime"
              prepend-icon="access_time"
              readonly
              class="ml-4"
            ></v-text-field>
            <v-time-picker v-model="startTime" format="24hr" actions>
              <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
                  <v-btn flat color="primary" @click="save">Guardar</v-btn>
                </v-card-actions>
              </template>
            </v-time-picker>
          </v-dialog>
        </v-flex>
        <v-flex xs4 offset-xs1>
          <v-dialog
            persistent
            v-model="endTimeDialog"
            lazy
            full-width
          >
            <v-text-field
              slot="activator"
              label="Hora fin"
              v-model="endTime"
              prepend-icon="access_time"
              readonly
            ></v-text-field>
            <v-time-picker v-model="endTime" format="24hr" actions>
              <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-btn flat color="primary" @click="cancel">Cancelar</v-btn>
                  <v-btn flat color="primary" @click="save">Guardar</v-btn>
                </v-card-actions>
              </template>
            </v-time-picker>
          </v-dialog>
        </v-flex>
      </v-layout>
      <br v-if="!isReady">
      <v-layout row>
        <v-flex>
          <v-btn v-if="!isReady" outline color="indigo" @click="generateCitas()" class="ml-5">Generar Citas</v-btn>
        </v-flex>
      </v-layout>
      <br v-if="!isReady">
      <v-layout row v-if="!isReady && resquestStarted">
        <v-flex xs1 offset-xs6>
          <v-progress-circular color="primary" v-bind:indeterminate="true"></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 offset-xs6  v-if="!isReady && resquestStarted">
          <v-progress-circular indeterminate v-bind:size="40" color="primary"></v-progress-circular>
        </v-flex>
        <v-flex xs12>
          <v-flex xs4>
            <v-text-field
            prepend-icon="search"
            label="Buscar"
            single-line
            hide-details
            v-model="search"
            class="ml-4"
            v-if="isReady"
            ></v-text-field>
          </v-flex>
          <v-data-table
            v-bind:headers="citaHeader"
            :items="citas"
            v-bind:search="search"
            hide-actions
            v-bind:pagination.sync="pagination"
            v-if="isReady"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.boleta_alumno }}</td>
              <td>{{ props.item.nombre_alumno }}</td>
              <td>{{ props.item.promedio }}</td>
              <td>{{ props.item.num_reprobadas }}</td>
              <td>{{ parseDateToSpanish(props.item.fecha_inicio) }}</td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2" v-if="isReady">
            <v-pagination v-model="pagination.page" :length="pages" circle></v-pagination>
          </div>
        </v-flex>
      </v-layout>
      <br>
    </v-card>
  </v-container>
</template>

<script>
import CitasService from '@/services/CitasService'
import Utils from '@/Utils'

export default {

  name: 'generarCitas',
  methods:
  {
    async generateCitas () {
      this.resquestStarted = true
      let arrayStartTime = this.startTime.split(':').map((idx) => parseInt(idx))
      let arrayEndTime = this.endTime.split(':').map((idx) => parseInt(idx))
      let startDate = new Date(this.startDate + 'T' + this.startTime + 'Z').getTime()
      let endDate = new Date(this.endDate + 'T' + this.endTime + 'Z').getTime()
      const response = await CitasService.store({
        startDate: startDate + 1000 * 60 * 60 * 6,
        endDate: endDate + 1000 * 60 * 60 * 6,
        startTime: (arrayStartTime[0] * 1000 * 60 * 60) + (arrayStartTime[1] * 1000 * 60),
        endTime: (arrayEndTime[0] * 1000 * 60 * 60) + (arrayEndTime[1] * 1000 * 60)
      })
      this.citas = response.data
      this.isReady = true
    },
    async getCitas () {
      const response = await CitasService.index()
      this.citas = response.data
      if (this.citas.length > 0) {
        this.isReady = true
      }
    },
    parseDateToSpanish (date) {
      return Utils.parseDateToSpanish(date)
    }
  },
  data () {
    return {
      citas: [],
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      dialogStartDate: false,
      dialogEndDate: false,
      startTimeDialog: false,
      endTimeDialog: false,
      endDatePicker: null,
      endTimePicker: null,
      startDatePicker: null,
      startTimePicker: null,
      resquestStarted: false,
      isReady: false,
      search: '',
      pagination: { rowsPerPage: 10 },
      citaHeader: [
        {
          text: 'No. Boleta',
          value: 'boleta',
          align: 'left',
          sortable: false
        },
        {
          text: 'Nombre',
          value: 'nombre',
          align: 'left',
          sortable: false
        },
        {
          text: 'Promedio',
          value: 'promedio',
          align: 'left',
          sortable: false
        },
        {
          text: 'Unidades Reprobadas',
          value: 'num_reprobadas',
          align: 'left',
          sortable: false
        },
        {
          text: 'Fecha Reinscripción',
          value: 'fecha_inicio',
          align: 'left',
          sortable: false
        }
      ]
    }
  },
  computed: {
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.citas.length / this.pagination.rowsPerPage) : 0
    }
  },
  mounted () {
    this.getCitas()
  }

}

</script>

