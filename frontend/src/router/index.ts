import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import MyPage from '@/views/MyPage.vue'
import TransDetail from '@/views/TransDetail.vue'

Vue.use(VueRouter)

const routes = [
  // 다인
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/transdetail',
    name: 'TransDetail',
    component: TransDetail
  },

  // 지훈
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
