import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'https://j3b103.p.ssafy.io/api'

@Module({namespaced: true})

export default class TranslateRegist extends VuexModule {
    @Action
    public async regist(transData: any) {
        let config = {
            headers : {
                token: Vue.cookies.get('token'),
                email: Vue.cookies.get('email')
            }
        }
        console.log(config);
        console.log(transData)

        axios.post(`${SERVER_URL}/articles`, transData, config)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })

    }

    @Action
    public async getData(){
        axios.get(`${SERVER_URL}/articles/`)
        .then(res => {
        })
    } 
}