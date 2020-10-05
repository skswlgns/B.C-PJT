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
  public async first_trans(myinfo:any) {
		const config = {
			headers: {
				token: Vue.cookies.get("token"),
				email: Vue.cookies.get("email"),
			},
		}

		const trans_data: any = {
			user_name: myinfo.user_name,
			user_gender: myinfo.user_gender,
			user_good_lang: myinfo.user_good_lang,
			user_intro: myinfo.user_intro,
		}

		console.log(trans_data)

		await axios.put(`${SERVER_URL}/users/${myinfo._id}`, trans_data, config)
  }
}
