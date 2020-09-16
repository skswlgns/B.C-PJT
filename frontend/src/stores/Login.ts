import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios'

@Module({namespaced: true})
export default class Login extends VuexModule {

  // states
  public user_token: string = "";

  // getters
  // get doubledCount() {
  //   return this.count * 2;
  // }

  // mutations
  @Mutation
  public getToken(user_token: string) {
    console.log(`increment mutation: ${user_token}`);
  }

  // actions
  // @Action({commit : "getToken"})
  // public signup(signupData: object) {
    // let Post_signup: any = signupData;
    // console.log(Post_signup)
    // const params = new URLSearchParams();
    // params.append('username', Post_signup.user_email);
    // params.append('password', Post_signup.user_pwd);
    // axios.post('http://localhost:5000/auth/signin', params)
    // .then(response => console.log(response))
  // }

  @Action
  public login(loginData: any){
    axios.post('http://localhost:5000/auth/signin',loginData)
    .then(res => { 
      console.log(res)
    })
    .catch(err => console.log(err))
  }

}