import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$axios = axios.create({
  baseURL: 'https://antonp-ecommerce-server.herokuapp.com/api'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
