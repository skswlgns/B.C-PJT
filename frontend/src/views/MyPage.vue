<template>
  <div>
    {{ myinfo }}
    {{ myarticle }}
    <hr>
    {{ applyarticle}}

    <!-- #브라우저# -->
    <div v-if="windowWidth > 375">
      <h1>마이페이지</h1>
      <div class="user-box d-flex">
        <img src="@/assets/images/user_basic.png" alt="profile_image" class="box" v-if="myinfo.user_image === ''">
        <img :src="myinfo.user_image" alt="profile_image" class="box" v-else>
        <div class="pure-mt">
          <span class="nick-size">{{ myinfo.user_nickname }}</span>
          <p>ㅁ 모국어 | {{ myinfo.user_lang }}</p>
          <p> {{ mymoney }} <v-icon class="egg_icon">mdi-egg-easter</v-icon></p>
          <span v-if="myinfo.user_good_lang.length !== 0">잘하는 언어 | <span v-for="(lang, index) in myinfo.user_good_lang" :key="index" > {{ lang }}</span> </span>
        </div>
        <div class="ml-auto my-auto mr-3">
          <div class="d-flex flex-column">
            <v-btn
              color="error"
              class="my-2 mr-10"
              @click="goRegist()">
              통역가 신청하기
            </v-btn>
            <v-btn
              @click="goedit()"
              color="error"
              class="my-2 mr-10">
              프로필 수정하기
            </v-btn>
          </div>
        </div>
      </div>
      
      <h1>진행 중</h1>
      <div class="ing-box">
        <!--요청한거부터 처리하자-->
        <div>
          <v-card
            class="my-3 two_box"
            max-width="1200"
            outlined
            v-for="(article, index) in myarticle" :key="index"
          >
            <router-link :to="{name: 'TransDetail', params : {id:article._id}}" class="router">
              <v-list-item v-if="article.article_select">
                <v-list-item-content>
                  <div class="card_header">
                    <!--여기도 진행중, 마감, 완료 나누기 ㅠㅠㅠㅠㅠㅠㅠㅠ-->
                    <div class="overline mb-4 complete" v-if="article.article_complete === true">완료</div>
                    <div class="overline mb-4 nocomplete" v-else>미완료</div>
                    <v-spacer></v-spacer>
                    <div class="point"> <span>{{article.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                  </div>
                  <v-list-item-title class="headline mb-1">{{ article.article_title }}</v-list-item-title>
                  <v-list-item-subtitle class="my-2">{{ article.article_start_date }} ~ {{ article.article_end_date }} |
                      {{  article.article_from }} -> {{ article.article_to }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <div class="btn_box">
              <v-btn @click="goChat()" class="chat_btn">화상 채팅</v-btn>
              <v-btn class="send_btn">통역사 송금하기</v-btn>
            </div>
            <div class="chat_box">
              <p>화상 채팅 입력 방법</p>
              <p>nicname : 이름 작성</p>
              <p>Room : <span class="room">{{article._id.substr(0, 5)}}</span></p>
            </div>
          </v-card>
        </div>

        <v-card
          class="mx-auto my-3"
          max-width="500"
          outlined
          v-for="(li, index) in applyarticle" :key="index"
        >
          <router-link :to="{name: 'TransDetail', params : {id:li.article_id._id}}" class="router">
            <v-list-item v-if="li.article_id.article_select == myinfo._id">
              <v-list-item-content>
                <div class="card_header">
                  <div class="overline mb-4 complete" v-if="li.article_complete === true">완료</div>
                  <div class="overline mb-4 nocomplete" v-else>미완료</div>
                  <v-spacer></v-spacer>
                  <div class="point"> <span>{{li.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                </div>
                <v-list-item-title class="headline mb-1">{{ li.article_id.article_title }}</v-list-item-title>
                <v-list-item-subtitle class="my-2">{{ li.article_id.article_start_date }} ~ {{ li.article_id.article_end_date }} | 
                  {{  li.article_id.article_from }} -> {{ li.article_id.article_to }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <div class="btn_box">
              <v-btn @click="goChat()" class="chat_btn">화상 채팅</v-btn>
              <v-btn class="send_btn">통역사 송금하기</v-btn>
            </div>
            <div class="chat_box">
              <p>화상 채팅 입력 방법</p>
              <p>nicname : 이름 작성</p>
              <p>Room : <span class="room">{{article._id.substr(0, 5)}}</span></p>
            </div>
        </v-card>
      </div>
      <div>

      </div>
      <div>
        <h1>내역</h1>
        <div class="user-box">
          <v-row class="ma-4">
            <v-col>
              <v-card>
                <div class="d-flex">
                  <div class="ml-2 my-2">
                    요청 ({{myarticle.length }})
                  </div>
                </div>
                <v-row>
                  <v-col col="12">
                    <v-card
                      class="mx-auto my-3"
                      max-width="500"
                      outlined
                      v-for="(article, index) in myarticle" :key="index"
                    >
                    <router-link :to="{name: 'TransDetail', params : {id:article._id}}" class="router">
                      <v-list-item>
                        <v-list-item-content>
                          <div class="card_header">
                            <!--여기도 진행중, 마감, 완료 나누기 ㅠㅠㅠㅠㅠㅠㅠㅠ-->
                            <div class="overline mb-4 complete" v-if="article.article_complete === true">완료</div>
                            <div class="overline mb-4 nocomplete" v-else>미완료</div>
                            <v-spacer></v-spacer>
                            <div class="point"> <span>{{article.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                          </div>
                          <v-list-item-title class="headline mb-1">{{ article.article_title }}</v-list-item-title>
                          <v-list-item-subtitle class="my-2">{{ article.article_start_date }} ~ {{ article.article_end_date }} |
                             {{  article.article_from }} -> {{ article.article_to }} </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </router-link>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <v-col>
              <v-card>
                <div class="d-flex">
                  <div class="ml-2 my-2">
                    참여 ( {{ applyarticle.length}})
                  </div>
                  <div class="ml-auto mr-2 my-2">
                    <a href="">전체보기</a>
                  </div>
                </div>
                <v-row>
                  <v-col col="12">
                      <v-card
                        class="mx-auto my-3"
                        max-width="500"
                        outlined
                        v-for="(li, index) in applyarticle" :key="index"
                      >
                      <router-link :to="{name: 'TransDetail', params : {id:li.article_id._id}}" class="router">
                        <v-list-item>
                          <v-list-item-content>
                            <div class="card_header">
                              <div class="overline mb-4 complete" v-if="li.article_complete === true">완료</div>
                              <div class="overline mb-4 nocomplete" v-else>미완료</div>
                              <v-spacer></v-spacer>
                              <div class="point"> <span>{{li.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                            </div>
                            <v-list-item-title class="headline mb-1">{{ li.article_id.article_title }}</v-list-item-title>
                            <v-list-item-subtitle class="my-2">{{ li.article_id.article_start_date }} ~ {{ li.article_id.article_end_date }} | 
                              {{  li.article_id.article_from }} -> {{ li.article_id.article_to }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </router-link> 
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <!-- ########################   모바일    ##################################3-->

    <!-- <div v-else-if="windowWidth <= 375">
      <h2 class="ma-2">마이페이지</h2>
      <div class="card-container mx-auto text-center">
        <span class="pro" v-if="myinfo.user_is_ts === true">통역가</span>
        <img class="round" src="@/assets/images/user_basic.png" alt="profile image" v-if="myinfo.user_image ===''" />
        <img class="round" :src="myinfo.user_image" alt="profile image" v-else />
        <h3>{{ myinfo.user_nickname }}</h3>
        <h6>{{ myinfo.user_lang}}</h6>
        <p>{{myinfo.user_intro}}</p>
        <div class="buttons">
          <button class="primary_pure" @click="goRegist()" v-if="myinfo.user_is_ts === false">
            통역가 신청하기
          </button>
          <br>
          <button class="primary_pure mt-2" @click="goedit()" v-if="myinfo.user_is_ts === false">
            프로필 수정하기
          </button>
        </div>
        <div class="skills">
          <h6>통역가능언어</h6>
          <ul class="mx-2 mt-2" v-for="(lang, index) in myinfo.user_good_lang" :key="index">
            <li>{{ lang }}</li>
          </ul>
          <h6 class="mt-4"></h6> 보유 알
          <ul class="mx-2 mt-2">
            {{ myinfo.user_egg }} <li class="ml-2" v-if="myinfo.user_egg > 0">환전하기</li>
          </ul>
        </div>
      </div>
      <h2 class="ma-2">통역 요청내역</h2>
        <v-card
          class="mx-auto my-3"
          max-width="344"
          outlined
          v-for="(li, index) in myarticle" :key="index"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4" v-if="li.article_complete === true">완료</div>
              <div class="overline mb-4" v-else>미완료</div>
               <router-link :to="{name: 'TransDetail', params : {id:li._id}}" class="router">
                <v-list-item-title class="headline mb-1">{{ li.article_title }}</v-list-item-title>
              </router-link>
              <v-list-item-subtitle class="my-2">{{ li.article_egg }}알 | {{ li.article_start_date }} ~ {{li.article_end_date}} | 
                {{  li.article_from }} -> {{ li.article_to }} | 통역가 이름</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

      <h2 class="ma-2">통역 참여내역</h2>
      <v-card
          class="mx-auto my-3"
          max-width="344"
          outlined
          v-for="(li, index) in list" :key="index"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4" v-if="li.article_complete === true">완료</div>
              <div class="overline mb-4" v-else>미완료</div>
              <v-list-item-title class="headline mb-1">{{ li.article_title }}</v-list-item-title>
              <v-list-item-subtitle class="my-2">{{ li.article_egg }} | {{ li.article_date }} | {{  li.article_from }} -> {{ li.article_to }} | 통역가 이름</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
    </div> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const myPageModule = namespace('MyPage');

  @Component({
    methods: {
      goRegist() {
        this.$router.push('/registtrans')
      },

      goedit() {
        this.$router.push('/editprofile')
      }
    }
  })

  export default class MyPage extends Vue {
    private list: any = [
    {
      article_title: '너! 내 통역가가 되어라!',
      article_egg: '200알',
      article_date: '2020.09.16',
      article_from: '한국어',
      article_to: '영어',
      article_complete: true,
      apply: '3',
      user_id: 1,
    },
    {
      article_title: '세계 제일의 통역가가 되고싶나? 그렇다면!',
      article_egg: '5000알',
      article_date: '2020.09.23',
      article_from: '스페인어',
      article_to: '한국어',
      article_complete: false,
      apply: '2',
      user_id: 2,
    },
  ]

  @myPageModule.State('myinfo')
  private myinfo!: any;

  private temp_wallet : String = ""

  set_address(address : String){
    this.temp_wallet = address
  }

  @myPageModule.State('myarticle')
  private myarticle!: any;

  @myPageModule.State('applyarticle')
  private applyarticle!: any;

  @myPageModule.State('mymoney')
  private mymoney!: any;

  @myPageModule.Action('get_mypage')
  private get_mypage!: () => void;

  @myPageModule.Action('get_myarticle')
  private get_myarticle!: () => void;

  @myPageModule.Action('get_balance')
  private get_balance!: (address : String) => void;
  
  @myPageModule.Action('get_applyarticle')
  private get_applyarticle!: () => void;

  @myPageModule.Action('goChat')
  private goChat!: () => void;

  async created() {
    // console.log('여기는 비폴 ')
    this.get_mypage()
    this.get_myarticle()
    this.get_applyarticle()
  }

  async mounted(){
    setTimeout(() => 
      this.get_balance(this.myinfo.user_wallet), 500
    )
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/mypage.scss';
</style>
