import Api from '@/services/Api'

export default {
  index () {
    return Api().get('inscripcion')
  },
  store (inscripcionData) {
    return Api().post('inscripcion', inscripcionData)
  },
  show (boleta) {
    return Api().get('inscripcion/' + boleta)
  }
}
