import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/components/global/index'
import 'css/layout.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
