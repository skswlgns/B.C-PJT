<template>
<div class="frame">
  <div class="top">
    <div class="top-border">
      <div class="top-main">
        <div class="top-landing">
          <div class="top-inner">
            <div class="slide"> 
              <img src="../assets/images/peo1.png" class="item">
              <img src="../assets/images/peo2.png" class="item">
              <img src="../assets/images/peo3.png" class="item">
              <img src="../assets/images/peo4.png" class="item">
              <img src="../assets/images/peo5.png" class="item">
            </div>
            <table class="table-center">
              <thead>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td> 
                </tr>
              </thead>
              <tbody>
                <tr class="tr1">
                  <td>
                    실시간 통역<br>
                    <b>언택트</b>로 안전하게
                  </td>
                  <td></td>
                  <td>
                    중요한 통역은<br>
                    <b>전문 통역가</b>에게
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
                  <td>전문 통역가 <span>5,398</span>명이상을 목표로</td>
                </tr>
                <tr class="space"></tr>
                <tr>
                  <td>
                    <a href='/home'>빠르게 통역하기</a>
                  </td>
                  <td></td>
                  <td>
                    <a href="#">전문통역 견적받기</a>
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
                  <p>집단지성 통역가</p>
                  <p>간단한 테스트를 통과하고 집단지성 통역가로 활동해보세요. 다양한 분야의 번역에 참여하여 경력을 쌓아갈 수 있습니다.</p> 
                </div>
                <a href="#">통역 참여하기</a>
              </div>
            <div class="text-content2">
              <div class="interval">
                <p>전문 통역가</p>
                <p>전문적인 통역이 가능하다면, 마마고 전문 통역가에 지원하세요.<br>
                  원하는 시간에만 통역하고, 통역 가격은 스스로 결정할 수 있습니다.</p> 
              </div>
              <a href="#">더 알아보기</a>
            </div>

            </div>
            <div class="picture">
              <div class="picture-top">
                <div class="pic-position">
                  <img src='../assets/images/picture-top.png'>
                </div>
                <div class="pic-position2">
                  <img src="../assets/images/women.png">
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