import Vue from 'vue'
import store from '../src/store/store'
import App from './components/App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
