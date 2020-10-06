import Vue from "vue"
import axios from "axios"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import router from "@/router"

const SERVER_URL = "https://j3b103.p.ssafy.io/api"
// const SERVER_URL = 'http://localhost:8080/api'

@Module({ namespaced: true })
export default class UserPage extends VuexModule {
  // states
  public userinfo: any = {}

  // getters
  // get doubledCount() {
  //   return this.article
  // }

  // mutations
  @Mutation
  public async saveuserinfo(temp_data: any = {}) {
    this.userinfo = temp_data
  }

  // actions
  @Action({ commit: "saveuserinfo" })
  public async get_userpage(temp: string) {
    if (Vue.cookies.isKey("token")) {
      const res = await axios.get(`${SERVER_URL}/users/${temp}`)
      if (res.data.user_email === Vue.cookies.get("email")) {
        router.push("/mypage")
      } else {
        return res.data
      }
    } else {
      alert("로그인을 해주세요!")
      router.push("/login")
    }
  }

  // 유저가 지원한 article 받아오기
  @Action({ commit: "save_apply" })
  public async get_applyarticle() {
    const config = {
      headers: {
        token: Vue.cookies.get("token"),
        email: Vue.cookies.get("email"),
      },
    }
    const res = await axios.get(`${SERVER_URL}/users/my/candidates`, config)
    return res.data
  }
}
