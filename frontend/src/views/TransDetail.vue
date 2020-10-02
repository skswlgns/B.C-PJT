<template>
  <div>
    {{article}}
    <hr>
    {{ article.article_candidate }}
    <hr>
    {{ user }}
    {{ my_email }}
    {{ toegg }}
    {{ clickData }}
    {{ money_success }}
    <hr>

    <!--WEB-->
    <div id="WEB" v-if="windowWidth > 380">
      <div class="detail_body">
        <div class="profile">
          <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
          <h4 class="center">{{ article.user_id.user_nickname }}</h4>
          <v-spacer></v-spacer>
          <span v-if="!article.article_select" class="ing">진행중</span>
          <span v-if="article.article_select" class="end">마감</span>
          <span v-if="money_success" class="complete">완료</span>
        </div>
        <div class="title">
          <h2 class="detail_title">{{ article.article_title }}</h2>
        </div>
        <hr>
        <div class="content">
          <p class="detail_content">{{ article.article_content}}</p>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">요청사항</h3>
          <div class="request">
            <p> 1) {{article.article_requests}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">언어</h3>
          <div class="request">
            <p class="large">{{article.article_from}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{article.article_to}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">날짜 / 예상시간</h3>  
          <div class="request">
            <p class="inline mr-3">{{article.article_start_date}} {{article.article_start_time}} ~ {{article.article_end_date}} {{article.article_end_time}}</p> 
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">금액</h3>
          <div class="request">
            <span class="point inline">{{article.article_egg}} <v-icon class="egg_icon">mdi-egg-easter</v-icon></span>
          </div>
        </div>
        <v-row class="requests">
          <v-spacer></v-spacer>
          <v-btn class="edit_btn">수정하기</v-btn>
          <v-btn class="del_btn">삭제하기</v-btn>
        </v-row>
      </div>

      <div class="apply">
        <h3>통역가 지원하기</h3>
        <v-row class="row">
          <input v-model="applyData.candidate_content" class="applybox" type="text"/>
          <v-btn class="applybtn" @click="apply(applyData)">지원하기</v-btn>
        </v-row>
      </div>

      <div class="applyList">
        <li v-for="(user_profile, index) in user" :key="index">
          <ol v-for="(content, index) in article.article_candidate" :key="index">
            <!-- {{ user_profile._id }} | {{ content.user_id }} -->
            <div v-if="user_profile._id == content.user_id" class="applyCard_select">
              <div class="profile">
                <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
                <div class="applyUser">
                  <h3 class="center">{{ user_profile.user_nickname }}  |</h3>
                  <div class="native_lang">
                    <p class="user_lang">{{user_profile.user_lang}}</p>
                    <p class="badge">모국어</p>
                  </div>
                  <div class="native_lang">
                    <p class="user_lang">{{user_profile.user_good_lang}}</p>
                    <p class="badge">고급</p>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <div v-if="article.user_id.user_email == my_email && article.article_select != user_profile._id" class="notselect">
                  <v-btn class="notbtn" @click="btn_click(user_profile._id, user_profile.user_email, article.user_id.user_email, article.article_title)"><v-icon class="select_icon">mdi-check-all</v-icon>통역가 선택하기</v-btn>
                </div>
                <div v-if="article.user_id.user_email != my_email && article.article_select == user_profile._id" class="div_select"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</div>
                <div v-if="article.user_id.user_email == my_email && article.article_select == user_profile._id && !money_success" class="select">
                  <v-btn class="btn" @click="btn_click(user_profile._id)"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</v-btn>
                
                  <v-dialog
                    v-model="dialog2"
                    persistent
                    max-width="350"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="complete_btn"><v-icon class="select_icon">mdi-account-reactivate</v-icon>통역사 확정하기</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline">
                        계좌 비밀번호를 입력해주세요. 
                      </v-card-title>
                      <v-card-text>
                        <input v-model="send_data.Password" type="text" placeholder="비밀번호">
                        <v-btn @click="save_send(article.user_id.user_wallet, article.article_egg, article.article_to_egg)">송금하기</v-btn>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog2 = false"
                        >
                          close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>

                <v-dialog
                  v-model="dialog3"
                  persistent
                  max-width="350"
                  class="modal"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" 
                      v-if="article.user_id.user_email == my_email && article.article_select == user_profile._id && money_success"  
                      class="cancel_btn_2">
                      통역사 취소하기 
                    </v-btn>
                  </template>
                  <v-card class="modal_body">
                    <v-card-title class="headline">
                      취소 사유를 작성해주세요. 
                    </v-card-title>
                    <v-card-text class="modal_text">
                      <input type="text" placeholder="취소 사유">
                      <v-btn>전송하기</v-btn>
                      </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog3 = false"
                      >
                        close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog> 

              </div>
              <v-row class="contents">
                <div class="content">
                  {{content.candidate_content}}
                </div>
                <v-spacer></v-spacer>
                 <!-- <v-btn v-if="user_profile.user_email == my_email " @click="apply_cancel(applyData)" class="cancel_btn">취소하기</v-btn> -->
                <v-btn v-if="user_profile.user_email == my_email && article.article_select != user_profile._id" @click="apply_cancel(applyData)" class="cancel_btn">취소하기</v-btn>
                <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="350"
                  class="modal"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" 
                      v-if="user_profile.user_email == my_email && article.article_select == user_profile._id" 
                      class="cancel_btn_2">
                      취소하기
                    </v-btn>
                  </template>
                  <v-card class="modal_body">
                    <v-card-title class="headline">
                      취소 사유를 작성해주세요. 
                    </v-card-title>
                    <v-card-text class="modal_text">
                      <input type="text" placeholder="취소 사유">
                      <v-btn>전송하기</v-btn>
                      </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog> 
              </v-row>
            </div>
          </ol>
        </li>
      </div>
    </div>

    <!--Mobile -->
    <!-- <div id="Mobile" v-if="windowWidth <= 380">
      <div class="detail_body">
        <div class="profile">
          <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
          <h4 class="center">{{ article.user_id.user_nickname}}</h4>
          <v-spacer></v-spacer>
          <span class="ing">진행중</span>
        </div>
        <div class="title">
          <h4 class="detail_title">{{ article.article_title }}</h4>
        </div>
        <hr>
        <div class="content">
          <p class="detail_content">{{ article.article_content}}</p>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">요청사항</h3>
          <div class="request">
            <p> 1) {{article.article_requests}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">언어</h3>
          <div class="request">
            <p>{{article.article_from}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{article.article_to}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">날짜 / 예상시간</h3>
          <div class="request">
            <p class="inline">{{article.article_date}} {{article.article_start}}</p> ~ <p class="inline"> {{article.article_enddate}} {{article.article_end}} </p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">금액</h3>
          <div class="request">
            <span class="point inline">{{article.article_egg}} <v-icon class="egg_icon">mdi-egg-easter</v-icon></span>
          </div>
        </div>
      </div>

      <div class="apply">
        <h4>통역가 지원하기</h4>
        <input class="applybox" type="text"/>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn class="applybtn">지원하기</v-btn>
        </v-row>
      </div>

      <div class="applyList">
        <li v-for="list in applyList" :key="list.user_name">
          <div v-if="list.select" class="applyCard_select">
            <v-row class="select_btns">
              <v-spacer></v-spacer>
              <v-btn v-if="list.select" class="select" @click="translator_cancel(list)"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</v-btn>
            </v-row>
            <div class="profile">
              <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
              <div class="applyUser">
                <h4 class="center">{{ list.user_name }}  |</h4>
                <div class="native_lang">
                  <p class="user_lang">{{list.user_lang}}</p>
                  <p class="badge">모국어</p>
                </div>
                <div class="native_lang">
                  <p class="user_lang">{{list.good_lang}}</p>
                  <p class="badge">고급</p>
                </div>
              </div>
            </div>
            <div class="content">
              {{list.apply_content}}
            </div>
          </div>

          <div v-if="!list.select" class="applyCard_notselect">
            <v-row class="select_btns">
              <v-spacer></v-spacer>
              <v-btn v-if="list.select" class="select" @click="translator_cancel(list)"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</v-btn>
              <v-btn v-if="!list.select" class="notselect" @click="translator_select(list)"><v-icon class="select_icon">mdi-check-all</v-icon>통역가 선택하기</v-btn>
            </v-row>
            <div class="profile">
              <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
              <div class="applyUser">
                <h4 class="center">{{ list.user_name }}  |</h4>
                <div class="native_lang">
                  <p class="user_lang">{{list.user_lang}}</p>
                  <p class="badge">모국어</p>
                </div>
                <div class="native_lang">
                  <p class="user_lang">{{list.good_lang}}</p>
                  <p class="badge">고급</p>
                </div>
              </div>
            </div>
            <div class="content">
              {{list.apply_content}}
            </div>
          </div>
        </li>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import emailjs from "emailjs-com";
  const TransDetailModule = namespace('TransDetail');
  @Component({

  })
  export default class TransDetail extends Vue {
    @Prop()
      id !: String;

    private candidate_content : String = "";
    private my_email : any = Vue.cookies.get('email');
    private dialog: boolean = false;
    private dialog2: boolean = false;
    private dialog3: boolean = false;
    private finish : boolean = false;

    private send_data = {
      fromEgg : "",
      toEgg : "",
      Password: "",
      Egg : 0
    }
 
    private templateParams = {
      to_email: "",
      client_email: "",
      title: "",
      message_html: `https://j3b103.p.ssafy.io/`
    }

    private cancelParams = {
      to_email: "",
      title: "",
      reason: "",
      message_html: `https://j3b103.p.ssafy.io/`
    }

    // methods 
    translator_select(list : any){
      list.select = true
    }
    translator_cancel(list : any){
      list.select = false
    }

    sendTest(){
      emailjs
        .send(
          "mamago",
          "template_ptpula7",
          this.templateParams,
          "user_vsSYzgaTl8akZR9vLj921",
        )
        .then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function(error) {
            console.log("FAILED...", error);
          }
        );
    }

    btn_click(user_id : string, to_email: string, client_email: string, title: string) {
      this.clickData.user_id = user_id
      this.candi_click(this.clickData)
      this.send_id(user_id)

      this.templateParams.to_email = to_email,
      this.templateParams.client_email = client_email,
      this.templateParams.title = title
      this.sendTest()
    }

    @TransDetailModule.State('article')
    private article!: any;

    @TransDetailModule.State('user')
    private user!: any;

    @TransDetailModule.State('toegg')
    private toegg!: any;

    @TransDetailModule.State('money_success')
    private money_success!: boolean;

    @TransDetailModule.Mutation('save_article')
    private save_article !: any;

    @TransDetailModule.Mutation('save_user')
    private save_user !: any;

    @TransDetailModule.Action('get_article_1')
    private get_article_1!: (id: String) => void;

    @TransDetailModule.Action('apply')
    private apply!: (applyData: any) => void;

    @TransDetailModule.Action('apply_cancel')
    private apply_cancel!: (applyData: any) => void;

    @TransDetailModule.Action('get_candidate')
    private get_candidate!: (id: String) => void;

    @TransDetailModule.Action('candi_click')
    private candi_click!: (user_id: String) => void;

    @TransDetailModule.Action('send_id')
    private send_id!: (user_id : String) => void;

    @TransDetailModule.Action('send_money')
    private send_money!: (send_data : any) => void;


    private candi_complete : boolean = false ;

    private applyData : any = {
      candidate_content : "",
      article_id: this.id,
    }

    private clickData : any = {
      article_id: this.id,
      user_id: ""
    }

    save_send(address : string, egg : number, toegg : string){
      this.send_data.fromEgg = address
      this.send_data.Egg = egg
      this.send_data.toEgg = toegg
      this.finish = true
      this.dialog2 = false
      console.log(this.send_data)
      this.send_money(this.send_data)
    }

    async mounted() {
      await this.get_article_1(this.id)
      console.log('mounted')

      await this.get_candidate(this.article.article_candidate)
      window.scrollTo(0, 0)
    }   
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/transdetail.scss';
</style>