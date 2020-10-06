<template>
  <div>
    {{ myinfo }}
    <hr>
    <!-- #브라우저# -->
    <div v-if="windowWidth > 375">
      <h1>마이페이지</h1>
      <div class="user-box d-flex">
        <img :src="myinfo.user_image" alt="profile_image" class="box" v-if="myinfo.user_image">
        <img src="@/assets/images/user_basic.png" alt="profile_image" class="box" v-else>
        <div class="pure-mt">
          <span class="nick-size">{{ myinfo.user_nickname }}<v-btn color="error" class="ml-2" rounded dark v-if="myinfo.user_is_ts === true">통역가</v-btn></span>
          <p>ㅁ 모국어 | {{ myinfo.user_lang }}</p>
          <p> {{ mymoney }} <v-icon class="egg_icon">mdi-egg-easter</v-icon></p>
          <span v-if="myinfo.user_good_lang != ''">잘하는 언어 | 
            <span v-for="(lang, index) in myinfo.user_good_lang" :key="index" class="mx-1"> 
              <v-btn rounded color="primary" dark small v-if="lang.slice(-1) == 1">{{ lang.slice(0,-1) }}</v-btn>
              <v-btn rounded color="warning" dark small v-else>{{ lang.slice(0,-1) }}</v-btn>
            </span>
          </span>
          <p class="mt-1">
            <span>
              <v-btn rounded color="primary" dark small class="mx-1">네이티브</v-btn>
              <v-btn rounded color="warning" dark small>고급</v-btn>
            </span>
          </p>
        </div>
        <div class="ml-auto my-auto mr-3">
          <div class="d-flex flex-column">
            <v-btn
              color="error"
              class="my-2 mr-10"
              v-if="myinfo.user_is_ts === false"
              @click="goRegist()">
              통역사 신청하기
            </v-btn>
            <v-btn
              color="error"
              class="my-2 mr-10"
              v-else
              @click="gotransedit()">
              통역사 수정하기
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
            v-for="(post, index) in myarticle" :key="index"
          >
            <router-link :to="{name: 'TransDetail', params : {id:post._id}}" class="router">
              <v-list-item v-if="post.article_select">
                <v-list-item-content>
                  <div class="card_header">
                    <div class="overline mb-4 request">요청</div>
                    <v-spacer></v-spacer>
                    <div class="point"> <span>{{post.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                  </div>
                  <v-list-item-title class="headline mb-1">{{ post.article_title }}</v-list-item-title>
                  <v-list-item-subtitle class="my-2">{{ post.article_start_date }} ~ {{ post.article_end_date }} |
                      {{  post.article_from }} -> {{ post.article_to }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <div class="btn_box">
              <v-btn @click="goChat()" class="chat_btn">화상 채팅</v-btn>

              <v-dialog
                v-model="dialog2"
                persistent
                max-width="400"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" class="send_btn">통역사 송금하기</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    계좌 비밀번호를 입력해주세요. 
                  </v-card-title>
                  <v-card-text>
                    <input v-model="send_data.Password" type="text" placeholder="비밀번호">
                    <v-btn @click="save_send(myinfo.user_wallet, post.article_egg, post.article_to_egg)">송금하기</v-btn>
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
            <div class="chat_box">
              <p>! 화상 채팅 입력 방법 !</p>
              <p>nickname : 이름 작성</p>
              <p>Room : <span class="room">{{post._id.substr(0, 5)}}</span></p>
            </div>
          </v-card>
        </div>

        <div>
          <v-card
            class="two_box flex"
            max-width="1200"
            outlined
            v-for="(post, index) in applyarticle" :key="index" 
          >
            <div v-if="post.article_id">
              <router-link  :to="{name: 'TransDetail', params : {id:post.article_id._id}}" class="router">
                <v-list-item v-if="post.article_id.article_select == myinfo._id">
                  <v-list-item-content>
                    <div class="card_header">
                      <div class="overline mb-4 apply">참여</div>
                      <v-spacer></v-spacer>
                      <div class="point"> <span>{{post.article_id.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                    </div>
                    <v-list-item-title class="headline mb-1">{{ post.article_id.article_title }}</v-list-item-title>
                    <v-list-item-subtitle class="my-2">{{ post.article_id.article_start_date }} ~ {{ post.article_id.article_end_date }} | 
                      {{  post.article_id.article_from }} -> {{ post.article_id.article_to }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <div class="btn_box">
                <v-btn @click="goChat()" class="chat_btn">화상 채팅</v-btn>
              </div>
              <div class="chat_box">
                <p> ! 화상 채팅 입력 방법 !</p>
                <p>nickname : 이름 작성</p>
                <p>Room : <span class="room">{{post.article_id._id.substr(0, 5)}}</span></p>
              </div>
            </div>
          </v-card> 
        </div>
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
                      v-for="(post, index) in myarticle" :key="index"
                    >
                    <router-link :to="{name: 'TransDetail', params : {id:post._id}}" class="router">
                      <v-list-item>
                        <v-list-item-content>
                          <div class="card_header">
                            <!--여기도 진행중, 마감, 완료 나누기 ㅠㅠㅠㅠㅠㅠㅠㅠ-->
                            <div class="overline mb-4 complete">완료</div>
                            <div class="overline mb-4 nocomplete">미완료</div>
                            <v-spacer></v-spacer>
                            <div class="point"> <span>{{post.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                          </div>
                          <v-list-item-title class="headline mb-1">{{ post.article_title }}</v-list-item-title>
                          <v-list-item-subtitle class="my-2">{{ post.article_start_date }} ~ {{ post.article_end_date }} |
                             {{ post.article_from }} -> {{ post.article_to }} </v-list-item-subtitle>
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
                </div>
                <v-row>
                  <v-col col="12">
                      <v-card
                        class="mx-auto my-3"
                        max-width="500"
                        outlined
                        v-for="(post, index) in applyarticle" :key="index"
                      >
                      <div v-if="post.article_id != null">
                        <router-link :to="{name: 'TransDetail', params : {id: post.article_id._id}}" class="router">
                          <v-list-item>
                            <v-list-item-content>
                              <div class="card_header">
                                <div class="overline mb-4 complete">완료</div>
                                <div class="overline mb-4 nocomplete">미완료</div>
                                <v-spacer></v-spacer>
                                <div class="point"> <span>{{post.article_id.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                              </div>
                              <v-list-item-title class="headline mb-1">{{ post.article_id.article_title }}</v-list-item-title>
                              <v-list-item-subtitle class="my-2">{{ post.article_id.article_start_date }} ~ {{ post.article_id.article_end_date }} | 
                                {{  post.article_id.article_from }} -> {{ post.article_id.article_to }}</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-list-item>
                        </router-link> 
                      </div>
                      <div v-else class="text-center">
                        해당 글은 삭제되었습니다.
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import emailjs from "emailjs-com";
  const myPageModule = namespace('MyPage');

  @Component({
    methods: {
      goRegist() {
        this.$router.push('/registtrans')
      },

      goedit() {
        this.$router.push('/editprofile')
      },

      gotransedit() {
        this.$router.push('/edittrans')
      }
    }
  })

  export default class MyPage extends Vue {

  @myPageModule.State('myinfo')
  private myinfo!: any;
  private temp_wallet : String = ""
  private dialog2 : boolean = false
  private finish : boolean = false

  set_address(address : String){
    this.temp_wallet = address
  }

   private successParams = {
      to_email: "",
      title: "",
      reason: "",
      message_html: `https://j3b103.p.ssafy.io/`
    }

  @myPageModule.State('myarticle')
  private myarticle!: any;

  @myPageModule.State('applyarticle')
  private applyarticle!: any;

  @myPageModule.State('mymoney')
  private mymoney!: any;
  
  @myPageModule.State('success_money')
  private success_money!: boolean;

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

  @myPageModule.Action('send_money')
  private send_money!: (send_data : any) => void;

  private send_data = {
    fromEgg : "",
    toEgg : "",
    Password: "",
    Egg : 0
  }

  save_send(address : string, egg : number, toegg : string){
    this.send_data.fromEgg = address
    this.send_data.Egg = egg
    this.send_data.toEgg = toegg
    this.finish = true
    this.dialog2 = false
    this.send_money(this.send_data)
  }

  successTest(){
      emailjs
        .send(
          "mamago",
          "template_346dwuw",
          this.successParams,
          "user_3x0V5QZyfdtMPvYN4YMOC",
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

  if(success_money : boolean){
    console.log(success_money)
  }

  async created() {
    // console.log('여기는 비폴 ')
    await this.get_mypage()
    await this.get_myarticle()
    await this.get_applyarticle()
    await this.get_balance(this.myinfo.user_wallet)
  }

  async mounted(){

  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/mypage.scss';
</style>
