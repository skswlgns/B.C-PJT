import Vue from 'vue'
import VueRouter from 'vue-router'
import Home2 from '@/views/Home2.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import NotFound from '@/views/NotFound.vue'
import MyPage from '@/views/MyPage.vue'
import TransDetail from '@/views/TransDetail.vue'
import TranslateRegist from '@/views/TranslateRegist.vue'
import UserPage from '@/views/UserPage.vue'
import RegistTrans from '@/views/RegistTrans.vue'
import EditProfile from '@/views/EditProfile.vue'

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
    component: Login,
    beforeEnter(to:any, from:any, next:any) {
      if (Vue.cookies.isKey('token')) {
        next('/home')
      }
      else {
        next()
      }
    }

  },
  {
    path: '/transdetail/:id',
    name: 'TransDetail',
    component: TransDetail,
    props: true,
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
    component: MyPage,
    beforeEnter(to:any, from:any, next:any) {
      if (Vue.cookies.isKey('token')) {
        next()
      }
      else {
        next('/login')
      }
    }
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
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile,
    props: true,
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
  },
  {
    path: '/transdetail/revise/:id',
    name: 'TransRevise',
    component: TranslateRegist,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
