<template>
  <div>
    <!--WEB-->
    <div id="WEB" v-if="windowWidth > 380">
      <div class="detail_body">
        <div class="profile">
          <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
          <h4 class="center">{{ detailData.user_nickname }}</h4>
          <v-spacer></v-spacer>
          <span class="ing">진행중</span>
        </div>
        <div class="title">
          <h2 class="detail_title">{{ detailData.title }}</h2>
        </div>
        <hr>
        <div class="content">
          <p class="detail_content">{{ detailData.article_content}}</p>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">요청사항</h3>
          <div class="request">
            <p> 1) {{detailData.article_requests}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">언어</h3>
          <div class="request">
            <p class="large">{{detailData.article_from}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{detailData.article_to}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">날짜 / 예상시간</h3>
          <div class="request">
            <p class="inline mr-3">{{detailData.article_date}}</p> | 
            <p class="inline ml-3">{{detailData.article_start}} ~ {{detailData.article_end}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">금액</h3>
          <div class="request">
            <span class="point inline">{{detailData.article_egg}} <v-icon class="egg_icon">mdi-egg-easter</v-icon></span>
          </div>
        </div>
      </div>

      <div class="apply">
        <h3>통역가 지원하기</h3>
        <v-row class="row">
          <input class="applybox" type="text"/>
          <v-btn class="applybtn">지원하기</v-btn>
        </v-row>
      </div>

      <div class="applyList">
        <li v-for="list in applyList" :key="list.user_nickname">
          <div v-if="list.select" class="applyCard_select">
            <div class="profile">
              <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
              <div class="applyUser">
                <h3 class="center">{{ list.user_name }}  |</h3>
                <div class="native_lang">
                  <p class="user_lang">{{list.user_lang}}</p>
                  <p class="badge">모국어</p>
                </div>
                <div class="native_lang">
                  <p class="user_lang">{{list.good_lang}}</p>
                  <p class="badge">고급</p>
                </div>
              </div>
              <v-spacer></v-spacer>
              <div v-if="list.select" class="select">
                <v-btn class="btn" @click="translator_cancel(list)"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</v-btn>
              </div>
              <div v-if="!list.select" class="notselect">
                <v-btn class="notbtn" @click="translator_select(list)"><v-icon class="select_icon">mdi-check-all</v-icon>통역가 선택하기</v-btn>
                <!-- <v-icon class="select_icon">mdi-check-all</v-icon>통역가 선택하기 -->
              </div>
            </div>
            <div class="content">
              {{list.apply_content}}
            </div>
          </div>

          <div v-if="!list.select" class="applyCard_notselect">
            <div class="profile">
              <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
              <div class="applyUser">
                <h3 class="center">{{ list.user_name }}  |</h3>
                <div class="native_lang">
                  <p class="user_lang">{{list.user_lang}}</p>
                  <p class="badge">모국어</p>
                </div>
                <div class="native_lang">
                  <p class="user_lang">{{list.good_lang}}</p>
                  <p class="badge">고급</p>
                </div>
              </div>
              <v-spacer></v-spacer>
              <div v-if="list.select" class="select">
                <v-btn class="btn" @click="translator_cancel(list)"><v-icon class="select_icon">mdi-account-tie-voice</v-icon>선택된 통역가</v-btn>
              </div>
              <div v-if="!list.select" class="notselect">
                <v-btn class="notbtn" @click="translator_select(list)"><v-icon class="select_icon">mdi-check-all</v-icon>통역가 선택하기</v-btn>
              </div>
            </div>
            <div class="content">
              {{list.apply_content}}
            </div>
          </div>
        </li>
      </div>
    </div>

    <!--Mobile -->
    <div id="Mobile" v-if="windowWidth <= 380">
      <div class="detail_body">
        <div class="profile">
          <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
          <h4 class="center">{{ detailData.user_nickname }}</h4>
          <v-spacer></v-spacer>
          <span class="ing">진행중</span>
        </div>
        <div class="title">
          <h4 class="detail_title">{{ detailData.title }}</h4>
        </div>
        <hr>
        <div class="content">
          <p class="detail_content">{{ detailData.article_content}}</p>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">요청사항</h3>
          <div class="request">
            <p> 1) {{detailData.article_requests}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">언어</h3>
          <div class="request">
            <p>{{detailData.article_from}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{detailData.article_to}}</p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">날짜 / 예상시간</h3>
          <div class="request">
            <p class="inline">{{detailData.article_date}} {{detailData.article_start}}</p> ~ <p class="inline"> {{detailData.article_enddate}} {{detailData.article_end}} </p>
          </div>
        </div>
        <div class="requests"> 
          <v-icon class="check_icon">mdi-check-bold</v-icon>
          <h3 class="check">금액</h3>
          <div class="request">
            <span class="point inline">{{detailData.article_egg}} <v-icon class="egg_icon">mdi-egg-easter</v-icon></span>
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
        <li v-for="list in applyList" :key="list.user_nickname">
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
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    

  })
  export default class TransDetail extends Vue {
    private detailData : any = {
      user_nickname: '단짠단짱',
      title: '비즈니스 대화가 있는데 도와주실 분 구합니다 : ) ',
      article_content: '누구 scss나 typescript 장인 어디 없나요.. 살려주세요.. 이거 계속 하는거 맞는거겟죠.. 이미 돌아가기도 늦었어요.. 인생.. 모르게따요 !!!!!!!!!!!!!!!!!!!! 난 오늘도 봉가 봉가 노래는 좋은가 봉가 안 좋은가 봉가 나도 모르겠다 봉가',
      article_egg: '200',
      article_date: '2020-09-22',
      article_enddate: '2020-09-22',
      article_from: '한국어',
      article_to: 'English',
      article_start: '3:00 AM',
      article_end: '5:00 AM',
      article_created_at: '2020-09-15',
      article_requests: '미국 억양',
      article_select: 'ekekek1234',
    }

    private applyList : any = [
      {
        user_name: '이다인',
        user_lang: '한국어',
        good_lang: 'English',
        apply_content: '한국에 거주하고있는 30세 여성입니다. UCLA에서 세무를 전공하였습니다. 프로필 확인 부탁드립니다.',
        select: true,
      },
      {
        user_name: '용가리',
        user_lang: '한국어',
        good_lang: 'English',
        apply_content: '한국에 거주하고있는 30세 여성입니다. UCLA에서 세무를 전공하였습니다. 프로필 확인 부탁드립니다.',
        select: false,      
      },
      {
        user_name: '아메용',
        user_lang: '한국어',
        good_lang: 'English',
        apply_content: '한국에 거주하고있는 30세 여성입니다. UCLA에서 세무를 전공하였습니다. 프로필 확인 부탁드립니다.',
        select: false,
      }
    ]

    // methods 
    translator_select(list : any){
      list.select = true
    }

    translator_cancel(list : any){
      list.select = false
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/transdetail.scss';
</style>