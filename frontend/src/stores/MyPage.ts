import Vue from "vue"
import axios from "axios"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import router from "@/router"

const SERVER_URL = "https://j3b103.p.ssafy.io/api"
const CAHT_URL = 'https://j3b103.p.ssafy.io/chat'

@Module({ namespaced: true })
export default class MyPage extends VuexModule {
  // states
  public myinfo: any = {}
  public myarticle: any = {}
  public mymoney: String = ""
  public applyarticle: any = {}
  public success_money : boolean = false
  
  // mutations
  // 유저정보 저장
  @Mutation
  public async savemyinfo(temp_data: any) {
    this.myinfo = temp_data
  }

  // 아티클 저장
  @Mutation
  public async save_article(temp_data: any) {
    this.myarticle = temp_data
  }

  @Mutation
  public async save_apply(temp_data: any) {
    this.applyarticle = temp_data
  }

  // 계좌 잔액 저장
  @Mutation
  public async save_money(temp_data: String) {
    this.mymoney = temp_data
    console.log(this.mymoney)
  }

  @Mutation
  public async save_success(temp_data: String) {
    console.log(temp_data)
    this.success_money = true
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

  // 내가 작성한 article 받아오기
  @Action({ commit: "save_article" })
  public async get_myarticle() {
    const config = {
      headers: {
        token: Vue.cookies.get("token"),
        email: Vue.cookies.get("email"),
      },
    }
    const res = await axios.get(`${SERVER_URL}/users/my/articles`, config)
    return res.data
  }

  // 내가 지원한 article 받아오기
  @Action({ commit: "save_apply" })
  public async get_applyarticle() {
    const config = {
      headers: {
        token: Vue.cookies.get("token"),
        email: Vue.cookies.get("email"),
      },
    }
    const res = await axios.get(`${SERVER_URL}/users/my/candidates`, config)
    // console.log('here')
    console.log(res.data)
    return res.data
  }

  @Action({ commit: "save_money" })
  public async get_balance(address: String) {
    const balance_data: any = {
      address: address,
    }
    const res = await axios.post(`${SERVER_URL}/eth/getBalance`, balance_data)
    console.log('돈 확인 action')
    console.log(res.data)
    return res.data
  }

  @Action 
  public async goChat(){
    window.location.href = `${CAHT_URL}`;
  }

  @Action({ commit: "save_success" })
  public async send_money(send_data: any) {
    console.log("돈 전송 action")
    console.log(send_data)
    const res = await axios.post(`${SERVER_URL}/eth/transcoin`, send_data)
    if (res.data) {
      console.log('돈이 안가쓔')
      console.log(res.data)
    } else {
      console.log('돈 송금 성공')
      return "success"
    }
  }
}
