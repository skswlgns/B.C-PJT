<<<<<<< HEAD
import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
=======
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios'
import router from '@/router'
import { setEmitFlags } from 'typescript';
>>>>>>> develop

const SERVER_URL = 'http://localhost:5000'

@Module({namespaced: true})
<<<<<<< HEAD
export default class Login extends VuexModule  {
  
  // states
  public user_token: string = ""

  // mutations
  @Mutation
  public SET_TOKEN(temp_token: string) {
    // this.$cookies.set('auth-token', temp_token)
=======
export default class Login extends VuexModule {
  
  // states
  public user_token: string = "";
  // getters
  // get doubledCount() {
  //   return this.count * 2;
  // }

  // mutations
  @Mutation
  public getToken(temp_token: string) {
    this.user_token = temp_token
    console.log(this.user_token)
>>>>>>> develop
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
<<<<<<< HEAD
      console.log(res)
=======
      // console.log(res)
>>>>>>> develop
    })
  }

  @Action({commit : "getToken"})
<<<<<<< HEAD
  public async login (loginData: any){
    const res = await axios.post(`${SERVER_URL}/auth/signin`, loginData)
    Vue.cookies.set('auth-token', res.data.token)
    console.log(this)
    router.push({name: "Home"})
    return res.data.token
=======
  public async login(loginData: any){
    try{
      const res = await axios.post(`${SERVER_URL}/auth/signin`, loginData)
      router.push({name: "Home"})
      // console.log(loginData)
      return res.data.token
    } catch(err) {
      console.log(err)
    }
>>>>>>> develop
  }
}