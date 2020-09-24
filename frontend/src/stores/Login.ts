import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
// import VueRouter from 'vue-router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'http://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class Login extends VuexModule  {
  
  // states
  public user_token: string = ""

  // mutations
  @Mutation
  public async SET_TOKEN() {
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
      console.log(res)
      Vue.cookies.set('auth-token', res.data.token)
    })

  }
}