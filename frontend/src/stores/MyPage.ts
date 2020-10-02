import Vue from 'vue'
import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import router from '@/router';

const SERVER_URL = 'https://j3b103.p.ssafy.io/api'
const SERVER = 'http://localhost:3000'

@Module({namespaced: true})
export default class MyPage extends VuexModule {

  // states
  public myinfo: any = {};
  public myarticle: any = {};
  public mymoney : String = "";
  public applyarticle : any = {};

  // getters
  // get doubledCount() {
  //   return this.article
  // }

  // mutations

  // 유저정보 저장
  @Mutation
  public async savemyinfo(temp_data:any) {
    // console.log('mutation', temp_data)
    this.myinfo = temp_data
  }

  // 아티클 저장
  @Mutation
  public async save_article(temp_data:any) {
    this.myarticle = temp_data
  }

  @Mutation
  public async save_apply(temp_data:any) {
    this.applyarticle = temp_data
  }

  // 계좌 잔액 저장 
  @Mutation
  public async save_money(temp_data:String) {
    this.mymoney = temp_data
  }

  // actions
  // 유저 정보입니다.
  @Action({commit: "savemyinfo"})
  public async get_mypage() {
      if (Vue.cookies.isKey('token')) {
        const config = {
          headers: {
            token : Vue.cookies.get('token'),
            email : Vue.cookies.get('email'),
          }
        }
        const res = await axios.get(`${SERVER_URL}/users/my`, config)
        return res.data
      }
      else {
        router.push('/404')   
      }
  }

  // 내가 신청한 article 받아오기
  @Action({commit:'save_article'})
  public async get_myarticle() {
    const config = {
      headers: {
        token : Vue.cookies.get('token'),
        email : Vue.cookies.get('email'),
      }
    }
    const res = await axios.get(`${SERVER_URL}/users/my/articles`, config)
    return res.data
  }

  // 내가 지원한 article 받아오기 
  @Action({commit:'save_apply'})
  public async get_applyarticle() {
    const config = {
      headers: {
        token : Vue.cookies.get('token'),
        email : Vue.cookies.get('email'),
      }
    }
    const res = await axios.get(`${SERVER_URL}/users/my/candidates`, config)
    console.log('get apply')
    return res.data
  }

  @Action({ commit : 'save_money'})
  public async get_balance(address : String){
    // console.log('여기 vuex')
    // console.log(address)
    const balance_data : any = {
      address : address
    }
    const res = await axios.post(`${SERVER}/api/eth/getBalance`, balance_data)
    // console.log(res.data)
    return res.data
  }

}