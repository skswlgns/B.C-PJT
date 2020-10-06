import Vue from 'vue'
import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import router from '@/router';

const SERVER_URL = 'https://j3b103.p.ssafy.io/api'
// const SERVER_URL = 'http://localhost:8080/api'

@Module({namespaced: true})
export default class Home extends VuexModule {
  // states
  public article: any = {};

  public limit: number = 0;

  //getters

  // mutations
  @Mutation
  public async savearticle(temp_data:any) {    
    this.article = temp_data
  }

  @Mutation
  public async goUserpage(userid: string) {
    // router.push('/userpage').catch(()=>{})
    router.push({name: 'UserPage', params: { id : userid }}).catch(()=>{})
  }

  @Mutation
  public async goDetailpage(articleid: string) {
    // router.push('/userpage').catch(()=>{})
    router.push({name: 'TransDetail', params: { id : articleid }}).catch(()=>{})
  }


  // actions
  @Action({ commit: 'savearticle' })
  public async get_article() {
    const res = await axios.get(`${SERVER_URL}/articles`)

    return res.data
  }
}