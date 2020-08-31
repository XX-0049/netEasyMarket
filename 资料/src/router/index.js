import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from '@/components/IndexWrap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexWrap',
    component: IndexWrap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
