import Vue from "vue"
import axios from "axios"
import router from "@/router"
// import VueRouter from 'vue-router'
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"

const SERVER_URL = "https://j3b103.p.ssafy.io/api"
// const SERVER = "http://localhost:8080"

@Module({ namespaced: true })
export default class Login extends VuexModule {
  // states
  public my_wallet: String = ""

  // mutations
  @Mutation
  public SET_TOKEN() {
    router.push("/home")
    location.reload()
  }

  @Mutation
  public SET_Wallet(wallet: String) {
    this.my_wallet = wallet
  }

  // actions
  @Action
  public async signup(signupData: any) {
    await axios.post(`${SERVER_URL}/auth/signup`, signupData).then((res) => {
      const loginInfo: any = {
        user_email: signupData.user_email,
        user_pwd: signupData.user_pwd,
      }
      this.context.dispatch("login", loginInfo)
    })
  }

  @Action({ commit: "SET_TOKEN" })
  public async login(loginData: any) {
    await axios.post(`${SERVER_URL}/auth/signin`, loginData).then((res) => {
      Vue.cookies.set("token", res.data.token)
      Vue.cookies.set("email", res.data.user_email)
    })
  }

  @Action({ commit: "SET_Wallet" })
  public async create_wallet(wallet_password: String) {
    const wallet_data: any = {
      wallet_password: wallet_password,
    }
    const res = await axios.post(`${SERVER_URL}/eth/newBalance`, wallet_data)
    return res.data
  }
}
