import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home2 from '@/views/Home2.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import MyPage from '@/views/MyPage.vue'
import TransDetail from '@/views/TransDetail.vue'
import TranslateRegist from '@/views/TranslateRegist.vue'

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
  // 도희
  {
    path: '/',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/regist',
    name: 'TranslateRegist',
    component: TranslateRegist,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
