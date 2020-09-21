<template>
  <div class="home">
    <div class="first">
      <div class="first_content">
        <div class="slide">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="first-text">
          <div class="first-center">
            <p>실시간 인공지능</p><br>
            <p>집단지성으로 빠르게</p><br>
            <p>전세계 1,030만 사용자의 <span>집단지성</span>으로 용도에 딱 맞는 자연스러운 번역</p>
            <p>평균 응답시간 3분</p>
            <button>빠르게 번역하기</button>
          </div>
          <div class="first-center2">
            <p>실시간 인공지능</p><br>
            <p>집단지성으로 빠르게</p><br>
            <p>전세계 1,030만 사용자의 집단지성으로 용도에 딱 맞는 자연스러운 번역</p>
            <p>평균 응답시간 3분</p>
            <button>빠르게 번역하기</button>
          </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  methods : {

  },
  mounted() {
  }
})
export default class Home2 extends Vue {

} 
</script>

<style scoped>
/* @import '../assets/scss/reset.scss'; */
  @import '../assets/scss/home2.scss';
</style>