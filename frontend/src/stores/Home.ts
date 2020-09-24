import Vue from 'vue'
import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'http://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class Home extends VuexModule {
  // states
  public article: any = {};
p
  // getters
  get doubledCount() {
    return this.article
  }

  // mutations
  @Mutation
  public save_article(temp: any) {
    console.log(temp)
  }

  // actions
  @Action({ commit: 'save_article' })
  public async get_article() {
    await axios.get(`${SERVER_URL}/articles`)
    .then(res => {
      return res
    })
  }
}