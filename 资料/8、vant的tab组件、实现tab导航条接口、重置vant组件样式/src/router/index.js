import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from '@/components/IndexWrap.vue'
import searchPage from '@/components/searchPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexWrap',
    component: IndexWrap
  },
  {
    path: '/searchPage',
    name: 'searchPage',
    component: searchPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

