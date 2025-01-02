import Vue from 'vue'
// import Header from '@/components/Header'

// Vue.component('my-header', Header)

// const importFn = require.context('@/components', true, /index.vue$/)
const importFn = require.context('@/components', true, /.vue$/)

importFn.keys().forEach(key => {
  const component = importFn(key).default
  Vue.component(component.name, component)
})
