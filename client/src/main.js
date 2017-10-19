// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import 'vue-material/dist/vue-material.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

Vue.use(VueMaterial)
// Vue.use(Vuetify)
sync(store, router)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'blue',
      hue: 700
    },
    accent: 'white'
  },
  teal: {
    primary: 'teal',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
