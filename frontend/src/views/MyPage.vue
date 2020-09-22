<template>
  <div>
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
      <p>{{ windowWidth }}</p>
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