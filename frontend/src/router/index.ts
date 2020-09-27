import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home2 from '@/views/Home2.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import MyPage from '@/views/MyPage.vue'
import TransDetail from '@/views/TransDetail.vue'
import UserPage from '@/views/UserPage.vue'
import RegistTrans from '@/views/RegistTrans.vue'

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
  {
    path: '/userpage/:id',
    name: 'UserPage',
    component: UserPage,
    props: true,
  },
  {
    path: '/registtrans',
    name: "RegistTrans",
    component: RegistTrans
  },
  // 도희
  {
    path: '/',
    name: 'Home2',
    component: Home2
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
