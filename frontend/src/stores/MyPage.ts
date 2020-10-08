import Vue from "vue"
import axios from "axios"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators"
import router from "@/router"
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'

const SERVER_URL = "https://j3b103.p.ssafy.io/api"
// const SERVER_URL = "http://localhost:8080/api"
const CAHT_URL = 'https://j3b103.p.ssafy.io/chat'

@Module({ namespaced: true })
export default class MyPage extends VuexModule {
  // states
  public myinfo: any = {}
  public myarticle: any = {}
  public mymoney: String = ""
  public applyarticle: any = {}
  public success_money : boolean = false
  public to_email : string = ""
  public resume: any = {};  
  public is_loading: boolean = false 

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
    this.applyarticle = temp_data.reverse()
  }

  // 계좌 잔액 저장
  @Mutation
  public async save_money(temp_data: String) {
    this.mymoney = temp_data
  }

  @Mutation
  public async save_success(temp_data: boolean) {
    if(temp_data == null){
      this.is_loading = false
    }
    else {
      this.success_money = temp_data
    }
    location.reload()
  }

  @Mutation
  public async save_email(temp_data: string) {
    this.to_email = temp_data
  }
  
  @Mutation
  public async save_resume(resumeData: any) {
    this.resume = resumeData
  }

  @Mutation
  public loading(){
    this.is_loading = true
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
    return res.data
  }

  @Action({ commit: "save_money" })
  public async get_balance(address: String) {
    const balance_data: any = {
      address: address,
    }
    const res = await axios.post(`${SERVER_URL}/eth/getBalance`, balance_data)
    return res.data
  }

  @Action 
  public async goChat(){
    window.location.href = `${CAHT_URL}`;
  }

  @Action({ commit: "save_success"})
  public async send_money(temp: any) {
    await axios.post(`${SERVER_URL}/eth/transcoin`, temp[0])
      .then( async res => {
        await this.context.dispatch("successTest", temp[1])
        await this.context.dispatch('article_complete', temp[2])
        return res.data 
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: '송금에 실패했습니다.',
          text: '다시 시도해주세요!'
        })
      })
  }

  @Action 
  public async article_complete(article_id:string){
    await axios.put(`${SERVER_URL}/articles/${article_id}/completion`)
    .then(() => {
      location.reload()
    })
    .catch(() => {

    })
  }

  @Action({ commit: "save_success"})
  public async charge_money(temp: any) {
    await axios.post(`${SERVER_URL}/eth/transcoin`, temp)
      .then( async res => {
        return res.data 
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: '충전에 실패했습니다.',
          text: '다시 시도해주세요!'          
        })
      })
  }


  @Action
  public async successTest(successParams : any){
    emailjs
      .send(
        "service_yx8j1on",
        "template_346dwuw",
        successParams,
        "user_3x0V5QZyfdtMPvYN4YMOC",
      );
  }

  @Action
  public async send_rate(star: any) {
    const config = {
      headers: {
        email: Vue.cookies.get("email"),
        token: Vue.cookies.get("token"),
      },
    }
    await axios.post(`${SERVER_URL}/rate`, star, config)
  }

  @Action({commit: 'save_resume'})
  public async get_resume(id:string) {
    const res = await axios.get(`${SERVER_URL}/resume/${id}`)
    return res.data
  }

  
  @Action({ commit : 'save_email'})
  public async get_toEmail(_id:string){
    const res = await axios.get(`${SERVER_URL}/users/${_id}`)
    return res.data.user_email    
  }
  
  @Action
  public async del_resume(resume_list: any) {
    const config = {
      headers: {
        email: Vue.cookies.get("email"),
        token: Vue.cookies.get("token"),
        resume_id: resume_list._id
      },
    }
    const res = await axios.delete(`${SERVER_URL}/resume`, config)
  }
}
