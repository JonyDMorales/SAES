import Api from '@/services/Api'

export default {
  index () {
    return Api().get('horario_clases')
  },
  makeSchedules (clases) {
    return Api().post('crear_horarios', clases)
  },
  occupability (id, occ) {
    return Api().put('horario_clases/' + id, occ)
  }
  /*
  destroy (boleta) {
    return Api().delete('alumno/${boleta}')
  }
  */
}
