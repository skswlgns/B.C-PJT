import Vue from "vue"
import axios from "axios"
import router from "@/router"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"

const SERVER_URL = "https://j3b103.p.ssafy.io/api"
// const SERVER_URL = 'http://localhost:8080/api'


@Module({ namespaced: true })
export default class TransDetail extends VuexModule {
  public article: any = {}
  public user: any = []
  public temp_list: any = []
  public toegg: String = ""
  public money_success: boolean = false

  @Mutation
  public async save_article(temp: any) {
    this.article = temp
  }

  @Mutation
  public async save_user(temp: any) {
    this.user = temp
  }

  @Mutation
  public async article_save(temp: any) {
    this.article = temp
  }

  @Mutation
  public async save_from(temp: String) {
    console.log("toegg 저장", temp)
    this.toegg = temp
  }

  @Mutation
  public async save_success(temp: String) {
    this.money_success = true
  }

  @Action({ commit: "save_article" })
  public async get_article_1(id: string) {
    const res = await axios.get(`${SERVER_URL}/articles/${id}`)
    return res.data
  }

  @Action
  public async apply(applyData: any) {
    // console.log('apply')
    // console.log(applyData)
    let config = {
      headers: {
        token: Vue.cookies.get("token"),
        email: Vue.cookies.get("email"),
      },
    }
    // console.log(config)

    axios
      .post(`${SERVER_URL}/articles/${applyData.article_id}/candidates`, applyData, config)
      .then(async (res) => {
        // console.log(res.data)
        location.reload()
      })
      .catch((err) => console.log(err))
  }

  @Action
  public async apply_cancel(applyData: any) {
    let config = {
      headers: {
        token: Vue.cookies.get("token"),
        email: Vue.cookies.get("email"),
      },
    }
    const res = await axios.delete(`${SERVER_URL}/articles/${applyData.article_id}/candidates`, config)
    // console.log(res.data)
    location.reload()
  }

  @Action({ commit: "save_user" })
  public async get_candidate(candi_list: any) {
    // console.log(candi_list)
    const users = []
    for (let candi in candi_list) {
      const res = await axios.get(`${SERVER_URL}/users/${candi_list[candi].user_id}`)
      users.push(res.data)
    }
    return users
  }

  @Action({ commit: "article_save" })
  public async candi_click(clickData: any) {
    let config = {
      headers: {
        token: Vue.cookies.get("token"),
        email: Vue.cookies.get("email"),
      },
    }
    const res = await axios.post(
      `${SERVER_URL}/articles/${clickData.article_id}/candidates/${clickData.user_id}`,
      {},
      config
    )
    console.log(res.data)
    return res.data
    // location.reload()
  }

  @Action({ commit: "save_from" })
  public async send_id(user_id: String) {
    const user_data: any = {
      user_id: user_id,
    }
    const res = await axios.post(`${SERVER_URL}/eth/userAccount`, user_data)
    // console.log(res.data)
    return res.data
    // console.log('유저 아이디 왔냐')
    // console.log(user_id)
  }

  @Action
  public async delete(delData: string) {
    let config = {
      headers: {
        token : Vue.cookies.get('token'),
        email : Vue.cookies.get('email'),
      }
    }
    axios.delete(`${SERVER_URL}/articles/${delData}`, config)
    .then(() => {
      router.push('/home')
    })
  }
}
