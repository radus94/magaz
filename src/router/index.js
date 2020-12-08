import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/add-auto',
    name: 'AddAuto',
    component: () => import('../views/AddAuto.vue')
  },
  {
    path: '/vehicles/:name',
    name: 'Vehicles',
    component: () => import('../views/Vehicles.vue')
  },
  {
    path: '/vehicles/:typeVeh/:id',
    name: 'VehicleItem',
    props: true,
    component: () => import('../views/VehicleItem.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
