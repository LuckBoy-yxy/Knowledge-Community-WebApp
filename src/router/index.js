import Vue from 'vue'
import VueRouter from 'vue-router'

import { Button, Cell } from 'mint-ui'

Vue.use(VueRouter)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

const routes = []

const router = new VueRouter({
  routes
})

export default router
