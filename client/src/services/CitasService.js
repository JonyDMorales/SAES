import Api from '@/services/Api'

export default {
  store (cita) {
    return Api().post('cita_reinscripcion', cita)
  }
  /*
  show (boleta) {
    return Api().get('alumno/${boleta}')
  },

  update (alumno) {
    return Api().put('alumno/${alumno.boleta}')
  },

  destroy (boleta) {
    return Api().delete('alumno/${boleta}')
  }
  */
}
