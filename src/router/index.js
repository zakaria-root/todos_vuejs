import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../components/Todos'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todos',
    component: Todos
  },
  {
    path: '/about',
    name: 'about',
    component : About
  }
]

const router = new VueRouter({
  routes
})

export default router
