import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'http://localhost:5000'

@Module({namespaced: true})
export default class Login extends VuexModule  {
  
  // states
  public user_token: string = ""

  // mutations
  @Mutation
  public SET_TOKEN(temp_token: string) {
    // this.$cookies.set('auth-token', temp_token)
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

  @Action({commit : "getToken"})
  public async login (loginData: any){
    const res = await axios.post(`${SERVER_URL}/auth/signin`, loginData)
    Vue.cookies.set('auth-token', res.data.token)
    console.log(this)
    router.push({name: "Home"})
    return res.data.token
  }
}