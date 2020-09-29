import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'https://j3b103.p.ssafy.io/api'

@Module({namespaced: true})
export default class TransDetail extends VuexModule  {

  public article: any = {};
  public user: any = [];

  @Mutation
  public async save_article(temp:any) {
    this.article = temp
  }

  @Mutation
  public async save_user(temp:any){
    this.user.append(temp)
  }

  @Action({commit : 'save_article'})
  public async get_article_1(id: string) {
    const res = await axios.get(`${SERVER_URL}/articles/${id}`)
    return res.data
  }


  @Action 
  public async apply(applyData : any){
    console.log('apply')
    console.log(applyData)
    
    let config = {
      headers: {
        token : Vue.cookies.get('token'),
        email : Vue.cookies.get('email'),
      }
    }
    console.log(config)
    axios.post(`${SERVER_URL}/articles/${applyData.article_id}/candidates`, applyData, config)    
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  @Action
  public async get_candidate(id: String){
    const res = await axios.get(`${SERVER_URL}/users/${id}`)
    console.log('save user')
    console.log(res.data)
    return res.data
  }


}
