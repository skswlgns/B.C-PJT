import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const SERVER_URL = 'https://j3b103.p.ssafy.io/api'
// const SERVER_URL = 'http://localhost:8080/api'

@Module({namespaced: true})

export default class TranslateRegist extends VuexModule {
    private reviseData : any = {
        article_from : "통역 할 언어",
        article_to : "통역 될 언어",
        article_egg: 0,
        article_start_date: new Date().toISOString().substr(0, 10),
        article_start_time: '00:00',
        article_end_date: new Date().toISOString().substr(0, 10),
        article_end_time: '00:00',
        article_title : '',
        article_content : '',
        article_request : [{id: 0, content:''}],
    }


    @Mutation 
    public async Input_Data(data : any) {
        this.reviseData.article_from = data.article_from,
        this.reviseData.article_to = data.article_to,
        this.reviseData.article_egg = data.article_egg,
        this.reviseData.article_start_date = data.article_start_date,
        this.reviseData.article_start_time = data.article_start_time,
        this.reviseData.article_end_date = data.article_end_date,
        this.reviseData.article_end_time = data.article_end_time,
        this.reviseData.article_title = data.article_title,
        this.reviseData.article_content = data.article_content,
        this.reviseData.article_request = data.article_request
    } 

    @Action
    public async regist(transData: any) {
        let config = {
            headers : {
                token: Vue.cookies.get('token'),
                email: Vue.cookies.get('email'),
            }
        }
        let i = 1
        for (let key in transData){
            if (!transData[key]) {
                alert('빈칸이 있습니다. 입력해주세요!!!')
                break;
            }
            else{
                i ++    
            }
        }
        if (i >= 11) {
            axios.post(`${SERVER_URL}/articles`, transData, config)
            .then(res =>{
                router.push(`/transdetail/${res.data.article_id}`)
            })
        }
    }

    @Action({ commit: 'Input_Data'}) 
    public async getData(id : string){
        const res = await axios.get(`${SERVER_URL}/articles/${id}`)
        return res.data  
    }

    @Action
    public async revise(reData: any) {
        let config = {
            headers : {
                token: Vue.cookies.get('token'),
                email: Vue.cookies.get('email'),
            }
        }
        console.log(reData)
        axios.put(`${SERVER_URL}/articles/${reData.id}`, reData.transData, config)
        .then(res =>{
            console.log(res);
            router.push(`/transdetail/${reData.id}`)
        })
    }
}