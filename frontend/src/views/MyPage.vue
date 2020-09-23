<template>
  <div>
    <div v-if="windowWidth > 375">
      <h1>마이페이지</h1>
      <div class="user-box d-flex">
        <img src="https://t1.daumcdn.net/cfile/tistory/991DA6445EFEB65E15" alt="" class="box">
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
            통역가 신청하기
          </v-btn>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="ma-2">마이페이지</h2>
      <div class="card-container mx-auto">
        <span class="pro">통역가!</span>
        <img class="round" src="https://t1.daumcdn.net/cfile/tistory/991DA6445EFEB65E15" alt="user" />
        <h3>닉네임</h3>
        <h6>모국어</h6>
        <p>자기소개 있을 경우 <br> 여따 적으슈</p>
        <div class="buttons">
          <button class="primary_pure">
            Message
          </button>
        </div>
        <div class="skills">
          <h6>통역가능언어</h6>
          <ul>
            <li>스페인어</li>
            <li>영어</li>
            <li>독일어</li>
            <li>일본어</li>
            <li>짱깨어</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({

  })

  export default class MyPage extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/mypage.scss'
</style>