import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
// import VueRouter from 'vue-router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'https://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class Login extends VuexModule  {
  
  // states

  // mutations
  @Mutation
  public SET_TOKEN() {
    router.push('/home')
    location.reload()
  }

  // actions
  @Action
  public async signup(signupData: any) {
    await axios.post(`${SERVER_URL}/auth/signup`, signupData)
    .then(res => {
      const loginInfo: any = {
        user_email : signupData.user_email,
        user_pwd : signupData.user_pwd
      }
      this.context.dispatch('login', loginInfo)
      console.log(res)
    })
  }

  @Action({ commit: 'SET_TOKEN' })
  public async login (loginData: any){
    await axios.post(`${SERVER_URL}/auth/signin`, loginData)
    .then(res => {
      console.log(res.data)
      Vue.cookies.set('token', res.data.token)
      Vue.cookies.set('email', res.data.user_email)
    })
  }
}