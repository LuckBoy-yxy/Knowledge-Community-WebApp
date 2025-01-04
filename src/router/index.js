import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/Home')
const Catalog = () => import('@/views/Home/catalog.vue')

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'catalog',
        component: Catalog,
        props: true
      },
      {
        path: '/index/:catalog',
        name: 'catalog',
        component: Catalog,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
