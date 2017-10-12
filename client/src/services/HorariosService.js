import Api from '@/services/Api'

export default {
  index () {
    return Api().get('horario_clases')
  },

  makeSchedules (clases) {
    return Api().post('crear_horarios', clases)
  }
  /*
  update (alumno) {
    return Api().put('alumno/${alumno.boleta}')
  },

  destroy (boleta) {
    return Api().delete('alumno/${boleta}')
  }
  */
}
