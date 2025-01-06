import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import 'mint-ui/lib/style.min.css'
import '@/assets/styles/theme.scss'

import '@/assets/icons/index'
import '@/plugins/mint-ui'
import '@/plugins/common'
import filters from '@/plugins/filter'
import directives from '@/plugins/directive'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
