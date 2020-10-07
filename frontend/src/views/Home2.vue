<template>
<div class="frame">
  <div class="top">
    <div class="top-border">
      <div class="top-main">
        <div class="top-landing">
          <div class="top-inner">
            <div class="slide"> 
              <img src="../assets/images/peo1.png" class="item" alt="mian model">
              <img src="../assets/images/peo2.png" class="item" alt="mian model">
              <img src="../assets/images/peo3.png" class="item" alt="mian model">
              <img src="../assets/images/peo4.png" class="item" alt="mian model">
              <img src="../assets/images/peo5.png" class="item" alt="mian model">
            </div>
            <table class="table-center">
              <th>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td> 
                </tr>
              </th>
              <tbody>
                <tr class="tr1">
                  <td>
                    실시간 통역<br>
                    <strong>언택트</strong>로 안전하게
                  </td>
                  <td></td>
                  <td>
                    중요한 통역은<br>
                    <strong>신뢰할 수 있는 통역가</strong>에게
                  </td>
                </tr>
                <tr class="space"></tr>
                <tr class="tr2">
                  <td>긴급한 상황이 생겼을 때 당황하지 마시고</td>
                  <td></td>
                  <td>블록체인을 통해 검증된 통역가들을 신뢰하고 맡겨주세요.</td>
                </tr>
                <tr class="space"></tr>
                <tr class="tr3">
                  <td>평균 응답시간 <span>30 </span>분을 목표</td>
                  <td></td>
                  <td>통역가 <span>5,398</span>명이상을 목표로</td>
                </tr>
                <tr class="space"></tr>
                <tr>
                  <td> 
                    <!-- <a href='/home'>빠르게 통역하기</a> -->
                  </td>
                  <td>
                    <!-- <a href="/home">전문통역 견적받기</a> -->
                  </td>
                  <td>
                    <a href="/home">Go Mamago </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="bottom-section">
      <div class="bottom-landing">
        <div class="bottom-main">
          <div class="bottom-table">
            <div class="text">
              <h2 data-animate="fadeInUP_rending">통역가로 활동하세요</h2>
              <div class="text-content1">
                <div class="interval">
                  <p>시·공간 제약 X</p>
                  <p>언제, 어디서든 원할 때 통역을 할 수 있습니다.</p> 
                </div>
                <!-- <a href="/home">통역 참여하기</a> -->
              </div>
            <div class="text-content2">
              <div class="interval">
                <p>블록체인 기반의 서비스</p>
                <p>블록체인 Resume<br>
                  Egg를 통한 송금 서비스로 신뢰 구축</p> 
              </div>
              <a href="/login">회원가입</a>
            </div>

            </div>
            <div class="picture">
              <div class="picture-top">
                <div class="pic-position">
                  <img src='../assets/images/translate.png' alt="illustration">
                </div>
                <div class="pic-position2">
                  <img src="../assets/images/translation.png" alt="illustration">
                </div>  
              </div>
            </div>
          </div>
        </div>
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
    (function () {
      const h2Elem = document.querySelector('h2') as HTMLElement;
      h2Elem.setAttribute('animated', 'false');
      const text1Elem = document.querySelector('.text-content1') as HTMLElement;
      text1Elem.setAttribute('animated', 'false');
      const img1Elem = document.querySelector('.pic-position') as HTMLElement;
      img1Elem.setAttribute('animated', 'false');
      const text2Elem = document.querySelector('.text-content2') as HTMLElement;
      text2Elem.setAttribute('animated', 'false');
      const img2Elem = document.querySelector('.pic-position2') as HTMLElement;
      img2Elem.setAttribute('animated', 'false');
      let maxScrollValue: number;

      function resizeHandler () {
        maxScrollValue = document.body.offsetHeight;
      }

      function show(e:any) {
          e.setAttribute('animated', 'true')
          e.style.visibility = 'visible';
          e.animate([{
            opacity: 0,
            transform: `translate3d(0, 20px, 0)`
          },
          {
            opacity: 1,
            transform: `none`
          }], {duration: 1500});
      }

      function appear () {
        const scrollPer = scrollY / maxScrollValue;
        if (scrollPer > 0.25 && h2Elem.getAttribute('animated') === 'false') {
          show(h2Elem);
        } 
        if (scrollPer > 0.4 && text1Elem.getAttribute('animated') === 'false') {
          setTimeout(show, 200, text1Elem);
          setTimeout(show, 200, img1Elem);
        }
        if (scrollPer > 0.75 && text2Elem.getAttribute('animated') === 'false') {
          setTimeout(show, 400, text2Elem);
          setTimeout(show, 400, img2Elem);
        } 
      }

      window.addEventListener('scroll', appear);

      window.addEventListener('resize', resizeHandler);

      resizeHandler();
    })();
  }
})
export default class Home2 extends Vue {

} 
</script>

<style lang="scss" scoped>
  @import '../assets/scss/reset.scss';
  @import '../assets/scss/home2.scss';
</style>