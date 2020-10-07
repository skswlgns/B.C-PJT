<template>
  <div>
    <!--WEB-->
    <div id="WEB" v-if="windowWidth > 380">
      <div class="detail_body">
        <div class="profile">
          <img :src="'https://j3b103.p.ssafy.io/image/' + article.user_id.user_image" alt="프로필이미지" class="profile_image"  @click="goUserpage(article.user_id)" v-if="article.user_id.user_image">
          <img src="@/assets/images/user_basic.png" alt="프로필 이미지" v-else class="profile_image">
          <h4 class="center"  @click="goUserpage(article.user_id)">{{ article.user_id.user_nickname }}</h4>
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
          <ul class="request" v-for="i in article.article_request" :key="i.id">
            <li>{{ i.content }}</li>
          </ul>
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
        <v-row class="requests" v-if="article.user_id.user_email === my_email">
          <v-spacer></v-spacer>
          <router-link  :to="{ name: 'TransRevise', params: { id: applyData.article_id }}" class='routerbtn'><v-btn class="edit_btn">수정하기</v-btn></router-link>
          <v-btn class="del_btn" @click="del(id)">삭제하기</v-btn>
        </v-row>
      </div>

      <div class="apply"  v-if="myinfo">
        <h3>통역가 지원하기</h3>
        <v-row class="row">
          <input v-model="applyData2.candidate_content" class="applybox" type="text"/>
          <v-btn class="applybtn" @click="apply(applyData2)">지원하기</v-btn>
        </v-row>
      </div>

      <div class="applyList">
        <h1>지원현황</h1>
        <ul>
          <li v-for="(user_profile, index) in user" :key="index">
            <div v-for="(content, index) in article.article_candidate" :key="index">
              
              <div v-if="user_profile._id == content.user_id" class="applyCard_select">
                <div class="profile">
                    <img :src="'https://j3b103.p.ssafy.io/image/' + user_profile.user_image"  @click="goUserpage(user_profile)" alt="프로필 이미지" class="profile_image" v-if="user_profile.user_image" >
                    <img src="@/assets/images/user_basic.png" alt="프로필 이미지" v-else class="profile_image" @click="goUserpage(user_profile)">
                    <div class="profile_nick" @click="goUserpage(user_profile)">{{user_profile.user_nickname}}</div>

                  <div class="applyUser">
                    <div class="native_lang">
                      <p class="user_lang">{{user_profile.user_lang}}</p>
                      <p class="badge">모국어</p>
                  </div>
                  <div class="native_lang" v-for="(li, index) in user_profile.user_good_lang" :key="index" style="font-family: Noto Sans">
                    <p class="user_lang">{{li.slice(0, -1)}}</p>
                    <p class="badge" v-if="li.slice(-1) == '1'">네이티브</p>
                    <p class="badge" v-if="li.slice(-1) == '2'">고급</p>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <div v-if="article.user_id.user_email == my_email && article.article_select != user_profile._id" class="notselect">
                  <v-dialog
                    v-model="dialog4"
                    persistent
                    max-width="400"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" class="notbtn">
                        <v-icon class="select_icon">mdi-check-all</v-icon>통역가 선택하기
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text>
                        <input v-model="contractData.passWord" type="text" placeholder="비밀번호">
                        <v-btn @click="btn_click(user_profile._id, user_profile.user_email, article.user_id.user_email, article.article_title, article.user_id.user_wallet, user_profile.user_wallet, article._id, content._id, article.article_egg)">입력하기</v-btn>
                      </v-card-text>
                      <v-spacer></v-spacer>
                      <v-card-actions>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog4 = false"
                        >
                          close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
                <div v-if="article.user_id.user_email != my_email && article.article_select == user_profile._id" class="div_select"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</div>
                <div v-if="article.user_id.user_email == my_email && article.article_select == user_profile._id && !money_success" class="select">              
                  <v-dialog
                    v-model="dialog3"
                    persistent
                    max-width="350"
                    class="modal"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on"   
                        class="cancel_btn_2">
                        <v-icon class="select_icon">mdi-close-thick</v-icon>
                        통역사 취소하기 
                      </v-btn>
                    </template>
                    <v-card class="modal_body">
                      <v-card-title class="headline">
                        취소 사유를 작성해주세요. 
                      </v-card-title>
                      <v-card-text class="modal_text">
                        <input v-model="cancelParams.reason" type="text" placeholder="취소 사유">
                        <v-btn @click="cancel_save(article.user_id.user_email ,article.article_title)">전송하기</v-btn>
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
              </div>
              <v-row class="contents">
                <div class="content">
                  {{content.candidate_content}}
                </div>
                <v-spacer></v-spacer>
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
                      <input v-model="cancelParams.reason" type="text" placeholder="취소 사유">
                      <v-btn @click="cancel_save(article.user_id.user_email ,article.article_title)">전송하기</v-btn>
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
          </div>
        </li>
        </ul>
      </div>
    </div>
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
      
    private my_email : any = Vue.cookies.get('email');
    private dialog: boolean = false;
    private dialog2: boolean = false;
    private dialog3: boolean = false;
    private dialog4: boolean = false;
    private is_true: boolean = false;
 
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

    private contractData : any = {
      _selectPerson : "",
      _selectedPerson : "",
      article : "",
      _selectedArticle : "",
      _point : 0,
      passWord : ""
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
        // .then(
        //   function(response) {
        //   },
        //   function(error) {
        //   }
        // );
    }

    btn_click(user_id : string, to_email: string, client_email: string, title: string, _selectPerson: string, _selectedPerson: string, article: string, _selectedArticle: string, _point: number) {
      this.clickData.user_id = user_id
      this.candi_click(this.clickData)
      this.send_id(user_id)

      this.templateParams.to_email = to_email,
      this.templateParams.client_email = client_email,
      this.templateParams.title = title
      this.sendTest()

      this.contractData._selectPerson = _selectPerson,
      this.contractData._selectedPerson = _selectedPerson,
      this.contractData.article = article,
      this.contractData._selectedArticle = _selectedArticle,
      this.contractData._point = _point
      this.saveContract(this.contractData)
    }

    cancelTest(){
      emailjs
        .send(
          "mamago",
          "template_o5pxba4",
          this.cancelParams,
          "user_vsSYzgaTl8akZR9vLj921",
        )
        // .then(
        //   function(response) {
            // console.log("SUCCESS!", response.status, response.text);
          // },
          // function(error) {
            // console.log("FAILED...", error);
          // }
        // );
    }
    cancel_save(to_email: string, title: string){
      // this.cancelParams.to_email = to_email,
      this.cancelParams.title = title
      this.cancelTest()
      this.dialog3 = false
      this.dialog = false
    }

    applypreview(temp: any, myinfo: any) {
      if (myinfo.user_is_ts === true) {
        this.apply(temp)
      } else {
        alert('통역가를 등록하여야지 지원할 수 있습니다.')
      }
    }

    @TransDetailModule.State('article')
    private article!: any;

    @TransDetailModule.State('user')
    private user!: any;

    @TransDetailModule.State('toegg')
    private toegg!: any;

    @TransDetailModule.State('myinfo')
    private myinfo!: any;

    @TransDetailModule.State('money_success')
    private money_success!: boolean;

    @TransDetailModule.Mutation('save_article')
    private save_article !: any;

    @TransDetailModule.Mutation('save_user')
    private save_user !: any;

    @TransDetailModule.Mutation('goUserpage')
    private goUserpage !: any;

    @TransDetailModule.Action('get_article_1')
    private get_article_1!: (id: String) => void;

    @TransDetailModule.Action('apply')
    private apply!: (applyData: any) => void;

    @TransDetailModule.Action('apply_cancel')
    private apply_cancel!: (applyData: any) => void;

    @TransDetailModule.Action('get_candidate')
    private get_candidate!: (candi_list: any) => void;

    @TransDetailModule.Action('delete')
    private del!: (id: String) => void;

    @TransDetailModule.Action('candi_click')
    private candi_click!: (user_id: String) => void;

    @TransDetailModule.Action('send_id')
    private send_id!: (user_id : String) => void;

    @TransDetailModule.Action('send_money')
    private send_money!: (send_data : any) => void;

    @TransDetailModule.Action('saveContract')
    private saveContract!: (contractData : any) => void;

    @TransDetailModule.Action('get_myinfo')
    private get_myinfo!: () => void;

    private candi_complete : boolean = false ;

    private applyData : any = {
      candidate_content : "",
      article_id: this.id,
    }

    private applyData2: any = {
      candidate_content: '',
      article_id: this.id,
      is_ts: false
    }

    private clickData : any = {
      article_id: this.id,
      user_id: ""
    }

    private passData : any = {
      
    }

    async created() {
      await this.get_article_1(this.id)
      if (this.article.article_candidate){
        await this.get_candidate(this.article.article_candidate)
      }
      await this.get_myinfo()

      if (this.myinfo.user_is_ts === true) {
        this.applyData2.is_ts = true;
      }
    }

    async mounted() {
      window.scrollTo(0, 0)
    }   
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/transdetail.scss';
</style>