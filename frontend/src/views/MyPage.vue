<template>
  <div>
    <!-- #브라우저# -->
    <div v-if="windowWidth > 375">
      <div class="user-box d-flex">
        <img :src="imgurl" alt="profile_image" class="box" v-if="myinfo.user_image">
        <img src="@/assets/images/user_basic.png" alt="profile_image" class="box" v-else>
        <div class="pure-mt"> 
          <div class="nick-size">{{ myinfo.user_nickname }}<div v-if="myinfo.user_is_ts === true"><img src="../assets/images/crown.png"></div></div>
          <div class="badge_fr">
            <p>{{ myinfo.user_lang }}</p>
            <div class="secondary text-no-wrap rounded-pill badge"><span class="badge_font">모국어</span></div>
          </div>
          <span class="ability" v-if="myinfo.user_good_lang != ''">
            <span v-for="(lang, index) in myinfo.user_good_lang" :key="index" class="abil"> 
              <span class="ability_fr" v-if="lang.slice(-1) == 1">
                <span class="abilities">{{ lang.slice(0,-1) }}</span>
                <div class="green darken-4 text-no-wrap rounded-pill ab"><span class="badges">네이티브</span></div>
              </span>
              <span v-else class="ability_fr">
                <span class="abilities">{{ lang.slice(0,-1) }}</span>
                <div class="deep-purple darken-1 text-no-wrap rounded-pill ab"><span class="badges">고급</span></div>  
              </span>
            </span>
          </span>
          <div class="egg">
            <p> {{ Math.ceil(mymoney) }} <v-icon class="egg_icon">mdi-egg-easter</v-icon></p>
          </div>
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
          <li class="no_style" v-for="(post, index) in myarticle" :key="index">
            {{post}}
            <v-card
              class="my-3 two_box"
              max-width="1600"
              outlined
              v-if="post.article_select"
            >
              <router-link :to="{name: 'TransDetail', params : {id:post._id}}" class="router">
                <v-list-item >
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
                <v-btn @click="goChat()" color="#0288D1" class="mt-1 chat_btn">화상 채팅</v-btn>

                <v-dialog
                  v-model="dialog2"
                  persistent
                  max-width="400"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" color="#388E3C" class="send_btn">통역사 송금하기</v-btn>
                  </template>
                <v-card>
                  <v-card-title class="headline">
                    이번 통역가는 어떠셨나요?
                  </v-card-title>
                  <v-card-text>                    
                    <input type="radio" id="one" value="1" v-model="star.star_rate_score" class="ml-1">
                    <label for="one">1</label>
                    <input type="radio" id="two" value="2" v-model="star.star_rate_score" class="ml-1">
                    <label for="two">2</label>
                    <input type="radio" id="three" value="3" v-model="star.star_rate_score" class="ml-1">
                    <label for="three">3</label>
                    <input type="radio" id="four" value="4" v-model="star.star_rate_score" class="ml-1">
                    <label for="four">4</label>
                    <input type="radio" id="five" value="5" v-model="star.star_rate_score" class="ml-1">
                    <label for="five">5</label>
                    <div v-if="star.star_rate_score == '1'"><i class="fas fa-star"></i></div>
                    <div v-else-if="star.star_rate_score == '2'">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div v-else-if="star.star_rate_score == '3'">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div v-else-if="star.star_rate_score == '4'">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div v-else-if="star.star_rate_score == '5'">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>                    
                  </v-card-text>
                  <v-row class="text-center">
                    <v-col cols="12">
                      <textarea type="text" placeholder="왜 그러한 평점을 주셨나요?(선택)" v-model="star.star_rate_content" v-if="star.star_rate_score != ''"/>
                    </v-col>
                  </v-row>
                  <v-card-title class="headline">
                    계좌 비밀번호를 입력해주세요. 
                  </v-card-title>
                  <v-card-text>
                    <input v-model="send_data.Password" type="text" placeholder="비밀번호">
                    <v-btn @click="save_send(myinfo.user_wallet, post.article_egg, post.article_to_egg, star, post)">송금하기</v-btn>
                  </v-card-text>
                    <v-spacer></v-spacer>

                  <v-card-actions>
                    <v-sapcer></v-sapcer>
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
                <p>Room : <span class="room">{{post._id.substr(0, 7)}}</span></p>
              </div>
            </v-card>
          </li>
        </div>

        <!--지원한거-->
        <div>
          <li class="no_style" v-for="(post, index) in applyarticle" :key="index">
            <v-card
              class="my-3 two_box"
              max-width="1600"
              outlined
              v-if="post.article_id.article_select == myinfo._id"
            >
              <router-link :to="{name: 'TransDetail', params : {id:post.article_id._id}}" class="router">
                <v-list-item>
                  <v-list-item-content>
                    <div class="card_header">
                      <div class="overline mb-4 apply">참여</div>
                      <v-spacer></v-spacer>
                      <div class="point"> <span>{{post.article_id.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                    </div>
                    <v-list-item-title class="headline mb-1">{{ post.article_id.article_title }}</v-list-item-title>
                    <v-list-item-subtitle class="my-2">{{ post.article_id.article_start_date }} ~ {{ post.article_id.article_end_date }} |
                        {{  post.article_id.article_from }} -> {{ post.article_id.article_to }} </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
              <div class="btn_box">
                <v-btn @click="goChat()" color="#0288D1" class="mt-8 chat_btn">화상 채팅</v-btn>
              </div>
              <div class="chat_box">
                <p>! 화상 채팅 입력 방법 !</p>
                <p>nickname : 이름 작성</p>
                <p>Room : <span class="room">{{post.article_id._id.substr(0, 7)}}</span></p>
              </div>
            </v-card>
          </li>
        </div>
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
                            <span v-if="!post.article_select && !success_money" class="ing">진행중</span>
                            <span v-if="post.article_select && !success_money" class="end">마감</span>
                            <span v-if="success_money" class="complete">완료</span>
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
                    참여 ({{ applyarticle.length}})
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
                                <span v-if="!post.article_id.article_select && !success_money" class="ing">진행중</span>
                                <span v-if="post.article_id.article_select && !success_money" class="end">마감</span>
                                <span v-if="success_money" class="complete">완료</span>
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
  private imgurl: string = ''

  private star: any = {
    star_rate_ts_user_id: '',
    article_id: '',
    star_rate_score: '',
    star_rate_content: '',
  }

  set_address(address : String){
    this.temp_wallet = address
  }

   private successParams = {
    to_email: "",
    client_email: "",
    title: "",
    money: 0,
    message_html: `https://j3b103.p.ssafy.io/`
  }

  @myPageModule.State('myarticle')
  private myarticle!: any;

  @myPageModule.State('applyarticle')
  private applyarticle!: any;

  @myPageModule.State('mymoney')
  private mymoney!: Number;
  
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
  private send_money!: (send_data : any, successParams : any) => any;

  @myPageModule.Action('successTest')
  private successTest!: (successParams : any) => any;

  @myPageModule.Action('send_rate')
  private send_rate!: (star: any) => void;

  private send_data = {
    fromEgg : "",
    toEgg : "",
    Password: "",
    Egg : 0
  }

  save_send(address : string, egg : number, toegg : string, to_email : string, title : string, client_email : string, star:any, post:any){
    this.send_data.fromEgg = address
    this.send_data.Egg = egg
    this.send_data.toEgg = toegg
    this.finish = true
    this.dialog2 = false
    star.article_id = post._id
    star.star_rate_ts_user_id = post.article_select
    if (star.star_rate_score == '') {
      alert('평점을 입력해주세요.')
    } else {
      this.send_rate(star)
      // this.send_money(this.send_data)
    }

    this.successParams.to_email = to_email,
    this.successParams.client_email = client_email,
    this.successParams.title = title
    this.successParams.money = egg
    this.send_money(this.send_data, this.successParams)
  }

  async created() {
    await this.get_mypage()
    await this.get_myarticle()
    await this.get_applyarticle()
    await this.get_balance(this.myinfo.user_wallet)
    this.imgurl = `https://j3b103.p.ssafy.io/image/${this.myinfo.user_image}`
  }

  async mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/mypage.scss';
</style>
