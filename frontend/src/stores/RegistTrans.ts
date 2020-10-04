import Vue from "vue"
import axios from "axios"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import router from "@/router"

const SERVER_URL = "https://j3b103.p.ssafy.io/api"
// const SERVER = "http://localhost:3000"

@Module({ namespaced: true })
export default class RegistTrans extends VuexModule {
  // states
  public myinfo: any = {}

  // 유저정보 저장
  @Mutation
  public async savemyinfo(temp_data: any) {
    // console.log('mutation', temp_data)
    this.myinfo = temp_data
  }

  // actions
  // 유저 정보입니다.
  @Action({ commit: "savemyinfo" })
  public async get_mypage() {
    if (Vue.cookies.isKey("token")) {
      const config = {
        headers: {
          token: Vue.cookies.get("token"),
          email: Vue.cookies.get("email"),
        },
      }
      const res = await axios.get(`${SERVER_URL}/users/my`, config)
      return res.data
    } else {
      router.push("/404")
    }
  }
}
