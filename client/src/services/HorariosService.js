import Api from '@/services/Api'

export default {
  index () {
    return Api().get('horario_clases')
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
