import Vue from "vue"
import axios from "axios"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import router from "@/router"

const SERVER_URL = "https://j3b103.p.ssafy.io/api"
// const SERVER = "http://localhost:3000"

@Module({ namespaced: true })
export default class Edittrans extends VuexModule {
  // states
  public myinfo: any = {}

  // 유저정보 저장
  @Mutation
  public async savemyinfo(temp_data: any) {
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
  
  @Action
  public async addcareer(user_resume: any) {
    if (Vue.cookies.isKey("token")) {
      let config = {
        headers: {
          token: Vue.cookies.get("token"),
          email: Vue.cookies.get("email"),
        },
      }

      for (let i in user_resume) {
        console.log('하히후헤호', user_resume[i])

        const addData: any = new FormData();
        addData.append('resume_name', user_resume[i].resume_name)
        addData.append('resume_desc', user_resume[i].resume_desc)
        addData.append('resume_file', user_resume[i].resume_file)

        await axios.post(`${SERVER_URL}/resume`, addData, config)
      }
      router.push('/mypage')
    }
  }
}
