import Api from '@/services/Api'

export default {
  index () {
    return Api().get('analista')
  },
  store (analista) {
    return Api().post('analista')
  },
  login (credentials) {
    return Api().post('analista/login', credentials)
  },
  show (id) {
    return Api().get('analista/' + id)
  },
  update (analista) {
    return Api().put('analista/' + analista.id, analista)
  }
}
