<template>
  <div>

    <!-- #                    브라우저                       # -->

    <div v-if="windowWidth > 375">
      <h1>마이페이지</h1>
      <div class="user-box d-flex">
        <img src="https://t1.daumcdn.net/cfile/tistory/991DA6445EFEB65E15" alt="profile_image" class="box">
        <div class="pure-mt">
          <span class="nick-size">닉네임</span>
          <p>ㅁ 국가</p>
          <span>ㅁ 잘하는 언어</span>
          <span>| 
            <v-responsive
            class="text-center grey lighten-2 rounded-pill d-inline-flex align-center justify-center ma-1"
            height="1.2vw"
            width="5vw"
            >
              초고수
            </v-responsive></span>
        </div>
        <div class="ml-auto my-auto mr-3">
          <v-btn
            color="primary"
            class="ma-10">
            <i class="far fa-envelope"></i>
          </v-btn>
        </div>
      </div>
      <div>
        <div class="user-box">
          <br>
          <div class="d-flex">
            <h2 class="mx-4">통역내역</h2>
          </div>
          <v-row class="ma-4">
            <v-col col="6"  v-for="(li, index) in list" :key="index">
              <v-card
                class="mx-auto my-3"
                max-width="500"
                outlined
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
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <!-- ########################   모바일    ##################################3-->

    <div v-else>
      <h2 class="ma-2">마이페이지</h2>
      <div class="card-container mx-auto text-center">
        <span class="pro">통역가</span>
        <img class="round" src="https://t1.daumcdn.net/cfile/tistory/991DA6445EFEB65E15" alt="user" />
        <h3>닉네임</h3>
        <h6>모국어</h6>
        <p>자기소개 있을 경우 <br> 여따 적으슈</p>
        <div class="buttons">
          <button class="primary_pure">
            <i class="far fa-envelope"></i>
          </button>
        </div>
        <div class="skills">
          <h6>통역가능언어</h6>
          <ul class="mx-2 mt-2">
            <li>스페인어</li>
            <li>영어</li>
            <li>독일어</li>
            <li>일본어</li>
            <li>짱깨어</li>
          </ul>
        </div>
      </div>
      
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({

  })

  export default class UserPage extends Vue {
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
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/userpage.scss';
</style>