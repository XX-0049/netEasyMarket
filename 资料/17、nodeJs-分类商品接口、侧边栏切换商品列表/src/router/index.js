import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexWrap from '@/components/IndexWrap.vue'
import searchPage from '@/components/searchPage.vue'
import cateList from '@/components/cateList.vue'

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
  },
  {
    path: '/cateList',
    name: 'cateList',
    component: cateList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

