import Vue from "vue"
import axios from "axios"
import router from "@/router"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"

const SERVER_URL = "https://j3b103.p.ssafy.io/api"

@Module({ namespaced: true })
export default class TransDetail extends VuexModule {
  public myinfo: any = {}
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
  public async save_from(temp: string) {
    this.toegg = temp
  }

  @Mutation
  public async save_success(temp: string) {
    this.money_success = true
  }

  @Mutation
  public async goUserpage(userid: any) {
    if (userid.user_email === Vue.cookies.get('email')) {
      router.push('/mypage')
    }
    else {
      router.push({name: 'UserPage', params: { id : userid._id }}).catch(()=>{})
    }
    
  }

  @Mutation
  public async savemyinfo(temp_data: any) {
    this.myinfo = temp_data
  }

  @Action({ commit: "save_article" })
  public async get_article_1(id: string) {
    const res = await axios.get(`${SERVER_URL}/articles/${id}`)
    return res.data
  }

  @Action
  public async apply(applyData: any) {
    let config = {
      headers: {
        token: Vue.cookies.get("token"),
        email: Vue.cookies.get("email"),
      },
    }

    await axios
      .post(`${SERVER_URL}/articles/${applyData.article_id}/candidates`, applyData, config)
      .then(async (res) => {
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
    location.reload()
  }

  @Action({ commit: "save_user" })
  public async get_candidate(candi_list: any) {
    const users : any = []
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
    return res.data
    // location.reload()
  }

  @Action({ commit: "save_from" })
  public async send_id(user_id: String) {
    const user_data: any = {
      user_id: user_id,
    }
    const res = await axios.post(`${SERVER_URL}/eth/userAccount`, user_data)
    return res.data
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

  @Action({ commit: "savemyinfo" })
  public async get_myinfo() {
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
