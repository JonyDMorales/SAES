import Api from '@/services/Api'

export default {
  index () {
    return Api().get('alumno')
  },
  store (alumno) {
    return Api().post('alumno')
  },
  login (credentials) {
    return Api().post('alumno/login', credentials)
  },
  kardex (boleta) {
    return Api().get('alumno/' + boleta + '/kardex')
  },
  show (boleta) {
    return Api().get('alumno/' + boleta)
  },
  update (alumno) {
    return Api().put('alumno/' + alumno.boleta, alumno)
  },
  addBookmark (boleta, schedule) {
    return Api().post('alumno/' + boleta + '/horario', schedule)
  }
  /*
  destroy (boleta) {
    return Api().delete('alumno/${boleta}')
  }
  */
}
