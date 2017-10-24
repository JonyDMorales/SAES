<template>
  <v-container fluid>
    <v-card>
      <v-subheader>Citas Reinscripción</v-subheader>
      <v-divider></v-divider>
      <br>
      <v-layout row>
        <v-flex xs4 offset-xs1>
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
            ></v-text-field>
            <v-date-picker v-model="startDate" scrollable actions :first-day-of-week="1" locale="es-sp">
              <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
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
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">OK</v-btn>
                </v-card-actions>
              </template>
            </v-date-picker>
          </v-dialog>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs4 offset-xs1>
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
            ></v-text-field>
            <v-time-picker v-model="startTime" format="24hr" actions>
              <template slot-scope="{ save, cancel }">
                <v-card-actions>
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">Save</v-btn>
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
                  <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                  <v-btn flat color="primary" @click="save">Save</v-btn>
                </v-card-actions>
              </template>
            </v-time-picker>
          </v-dialog>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex offset-xs1>
          <v-btn outline color="indigo">Generar Citas</v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
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
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      endDatePicker: null,
      endTimePicker: null,
      startDatePicker: null,
      startTimePicker: null,
      endRequest: false
    }
  }

}

</script>

