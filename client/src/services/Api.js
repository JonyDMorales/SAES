import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: '/',
    headers: {
      Authorization: 'Bearer ' + store.state.token
    }
  })
}
