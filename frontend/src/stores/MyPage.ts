import Vue from 'vue'
import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import router from '@/router';

const SERVER_URL = 'http://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class MyPage extends VuexModule {

  // states
  public myinfo: any = {};

  // getters
  // get doubledCount() {
  //   return this.article
  // }

  // mutations
  @Mutation
  public async savemyinfo(temp_data:any) {
    // console.log('mutation', temp_data)
    this.myinfo = temp_data
  }

  // actions
  @Action({commit: "savemyinfo"})
  public async get_mypage() {
      if (Vue.cookies.isKey('auth-token')) {
        const res = await axios.get(`${SERVER_URL}/users/my`)
        console.log(res)
        return res.data
      }
      else {
        router.push('/404')   
      }
  }
//   public async get_article() {
//     const res = await axios.get(`${SERVER_URL}/articles`)
//     return res.data
//   }
}