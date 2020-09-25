import Vue from 'vue'
import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import router from '@/router';

const SERVER_URL = 'http://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class Home extends VuexModule {

  // states
  public article: any = {};

  //getters

  // mutations
  @Mutation
  public async save_article(temp_data:any) {    
    console.log('mutation',temp_data)
    this.article = temp_data
  }

  // actions
  @Action({commit: 'save_article'})
  public async get_article() {
    console.log('action')
    const res = await axios.get(`${SERVER_URL}/articles`)
    return res.data 
  }
}