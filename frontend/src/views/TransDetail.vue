<template>
  <div>
    <div class="detail_body">
      <div class="profile">
        <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
        <h4 class="center">{{ detailData.user_id }}</h4>
      </div>
      <div class="title">
        <h2 class="detail_title">{{ detailData.title }}</h2>
      </div>
      <div class="content">
        <p class="detail_content">{{ detailData.content}}</p>
      </div>
      <div class="requests"> 
        <v-icon class="check_icon">mdi-check-bold</v-icon>
        <h3 class="check">요청사항</h3>
        <div class="request">
          <p> 1) {{detailData.requests}}</p>
        </div>
      </div>
      <div class="requests"> 
        <v-icon class="check_icon">mdi-check-bold</v-icon>
        <h3 class="check">언어</h3>
        <div class="request">
          <p class="large">{{detailData.lang_1}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{detailData.lang_2}}</p>
        </div>
      </div>
      <div class="requests"> 
        <v-icon class="check_icon">mdi-check-bold</v-icon>
        <h3 class="check">날짜 / 예상시간</h3>
        <div class="request">
          <p class="inline mr-3">{{detailData.date}}</p> | 
          <p class="inline ml-3">{{detailData.start_time}} ~ {{detailData.end_time}}</p>
        </div>
      </div>
      <div class="requests"> 
        <v-icon class="check_icon">mdi-check-bold</v-icon>
        <h3 class="check">금액</h3>
        <div class="request">
          <span class="point inline">{{detailData.point}} <v-icon class="egg_icon">mdi-egg-easter</v-icon></span>
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
      
    </div> 
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TransDetail extends Vue {
    private detailData : any = {
      user_id: 'dlekdls0213',
      title: '비즈니스 대화가 있는데 도와주실 분 구합니다 : ) ',
      content: '누구 scss나 typescript 장인 어디 없나요.. 살려주세요.. 이거 계속 하는거 맞는거겟죠.. 이미 돌아가기도 늦었어요.. 인생.. 모르게따요 !!!!!!!!!!!!!!!!!!!! 난 오늘도 봉가 봉가 노래는 좋은가 봉가 안 좋은가 봉가 나도 모르겠다 봉가',
      point: '200',
      date: '2020-09-22',
      lang_1: '한국어',
      lang_2: 'English',
      start_time: '3:00 AM',
      end_time: '5:00 AM',
      requests: '미국 억양',
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/transdetail.scss';
</style>