import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios'
import router from '@/router'
import { setEmitFlags } from 'typescript';

const SERVER_URL = 'http://localhost:5000'

@Module({namespaced: true})
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
      // console.log(res)
    })
  }

  @Action({commit : "getToken"})
  public async login(loginData: any){
    try{
      const res = await axios.post(`${SERVER_URL}/auth/signin`, loginData)
      router.push({name: "Home"})
      // console.log(loginData)
      return res.data.token
    } catch(err) {
      console.log(err)
    }
  }
}