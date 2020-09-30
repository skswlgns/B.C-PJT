<template>
  <div>
    {{article}}
    <hr>
    {{ article.article_candidate }}
    <hr>
    {{ user }}
    {{ my_email }}
    <hr>

    <!--WEB-->
    <div id="WEB" v-if="windowWidth > 380">
      <div class="detail_body">
        <div class="profile">
          <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
          <h4 class="center">{{ article.user_id.user_nickname }}</h4>
          <v-spacer></v-spacer>
          <span class="ing">진행중</span>
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
            {{ user_profile._id }} | {{ content.user_id }}
            <div v-if="user_profile._id == content.user_id && article.article_select == user_profile._id" class="applyCard_select">
              <div class="profile">
                <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
                <div class="applyUser">
                  <h3 class="center">{{ user_profile.user_name }}  |</h3>
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
                <div class="select">
                  <v-btn class="btn" @click="btn_click(user_profile._id)"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</v-btn>
                </div>
              </div>
              <v-row class="contents">
                <div class="content">
                  {{content.candidate_content}}
                </div>
                <v-spacer></v-spacer>
                <v-btn v-if="user_profile.user_email == my_email" @click="apply_cancel(applyData)" class="cancel_btn">취소하기</v-btn>
              </v-row>
            </div>

            <div v-if="user_profile._id == content.user_id && article.article_select != user_profile._id" class="applyCard_notselect">
              <div class="profile">
                <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
                <div class="applyUser">
                  <h3 class="center">{{ user_profile.user_name }}  |</h3>
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

                <div class="notselect">
                  <v-btn class="notbtn" @click="btn_click(user_profile._id)"><v-icon class="select_icon">mdi-check-all</v-icon>통역가 선택하기</v-btn>
                </div>
              </div>
              <v-row class="contents">
                <div class="content">
                  {{content.candidate_content}}
                </div>
                <v-spacer></v-spacer>
                <v-btn v-if="user_profile.user_email == my_email" @click="apply_cancel(applyData)" class="cancel_btn">취소하기</v-btn>
              </v-row>
            </div>
          </ol>
        </li>
      </div>
    </div>

    <!--Mobile -->
    <div id="Mobile" v-if="windowWidth <= 380">
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
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const TransDetailModule = namespace('TransDetail');
  @Component({

  })
  export default class TransDetail extends Vue {
    @Prop()
      id !: String;

    private candidate_content : String = "";
    private my_email : any = Vue.cookies.get('email');

    // methods 
    translator_select(list : any){
      list.select = true
    }
    translator_cancel(list : any){
      list.select = false
    }

    btn_click(user_id : String) {
      this.clickData.user_id = user_id
      this.candi_click(this.clickData)
    }

    @TransDetailModule.State('article')
    private article!: any;

    @TransDetailModule.State('user')
    private user!: any;

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


    private applyData : any = {
      candidate_content : "",
      article_id: this.id,
    }

    private clickData : any = {
      article_id: this.id,
      user_id: ""
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