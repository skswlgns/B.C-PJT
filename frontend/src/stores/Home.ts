import Vue from 'vue'
import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import router from '@/router';

const SERVER_URL = 'http://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class Home extends VuexModule {

  // states
  public article: any = {};

  // getters
  // get doubledCount() {
  //   return this.article
  // }

  // mutations
  @Mutation
  public async savearticle(temp_data:any) {    
    // console.log('mutation', temp_data)
    this.article = temp_data
  }

  @Mutation
  public async goUserpage(userid: string) {
    // router.push('/userpage').catch(()=>{})
    router.push({name: 'UserPage', params: { id : userid }}).catch(()=>{})  
  }

  // actions
  @Action({ commit: 'savearticle' })
  public async get_article() {
    const res = await axios.get(`${SERVER_URL}/articles`)
    return res.data
  }
}