import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'http://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class TransDetail extends VuexModule  {

  public article: any = {};

  @Mutation
  public async save_article(temp:any) {
    this.article = temp
  }

  @Action({commit : 'save_article'})
  public async get_article_1(id: string) {
    const res = await axios.get(`${SERVER_URL}/articles/${id}`)
    return res.data
  }
}
