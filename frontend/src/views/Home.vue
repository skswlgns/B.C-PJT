<template>
  <div class="home">
    <div class="select-character">
      <button class="select-character-btn select-character-btn-ilbuni" data-char="ilbuni" @click="goLink"></button>
      <button class="select-character-btn select-character-btn-ragirl" data-char="ragirl"></button>
    </div>
    <div class="world">
      <div class="stage">
        <div class="house">
          <section class="wall wall-left"></section>
          <section class="wall wall-right"></section>
          <section class="wall wall-front wall-front-a">
            <div class="wall-content">
              <h2 class="wall-title">통역</h2>
            </div>
          </section>
          <!-- <section class="wall wall-front wall-front-b">
            <div class="wall-content">
              <h2 class="wall-title">번역</h2>
            </div>
          </section>
          <section class="wall wall-front wall-front-c">
            <div class="wall-content">
              <h2 class="wall-title">통역</h2>
            </div>
          </section>
          <section class="wall wall-front wall-front-d">
            <div class="wall-content">
              <h2 class="wall-title">공부 좀 하세요</h2>
            </div>
          </section> -->
        </div>
        <!-- 캐릭터 놓기 -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  methods : {
    goLink() {
      (function() {
        const stageElem = document.querySelector('.stage') as HTMLElement;
        const mainElem = document.createElement('div') as HTMLElement;
        let maxScrollValue : number = document.body.offsetHeight - window.innerHeight;
        mainElem.classList.add('character');
        mainElem.innerHTML = ''
          + '<div class="character-face-con character-head">'
              + '<div class="character-face character-head-face face-front"></div>'
              + '<div class="character-face character-head-face face-back"></div>'
          + '</div>'
          + '<div class="character-face-con character-torso">'
              + '<div class="character-face character-torso-face face-front"></div>'
              + '<div class="character-face character-torso-face face-back"></div>'
          + '</div>'
          + '<div class="character-face-con character-arm character-arm-right">'
              + '<div class="character-face character-arm-face face-front"></div>'
              + '<div class="character-face character-arm-face face-back"></div>'
          + '</div>'
          + '<div class="character-face-con character-arm character-arm-left">'
              + '<div class="character-face character-arm-face face-front"></div>'
              + '<div class="character-face character-arm-face face-back"></div>'
          + '</div>'
          + '<div class="character-face-con character-leg character-leg-right">'
              + '<div class="character-face character-leg-face face-front"></div>'
              + '<div class="character-face character-leg-face face-back"></div>'
          + '</div>'
          + '<div class="character-face-con character-leg character-leg-left">'
              + '<div class="character-face character-leg-face face-front"></div>'
              + '<div class="character-face character-leg-face face-back"></div>'
          + '</div>';
          stageElem.appendChild(mainElem);
          
          function go() {
            const scrollPer = pageYOffset / maxScrollValue;
          
            mainElem.classList.add('running', 'login');
  
          }
          function back() {
            console.log(maxScrollValue);
            // mainElem.setAttribute('data-direction', 'forward');
            setTimeout(go, 500);
          }

          setTimeout(back, 1000);

      })();

    }
  },
  mounted() {
    (function () {
      const stageElem = document.querySelector('.stage') as HTMLElement;
      const houseElem = document.querySelector('.house') as HTMLElement;
      let maxScrollValue : number;
      interface Pos {
        x : number,
        y : number
      }
      let mousePos : Pos = {
        x : 0,
        y : 0
      }

      function resizeHandler() {  
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
      }

      function moveHandler(e : any) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
      }

      window.addEventListener('scroll', function () {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
      });

      window.addEventListener('mousemove', moveHandler);

      window.addEventListener('resize', resizeHandler);

      resizeHandler();
    })();
  }
})
export default class Home extends Vue {

} 
</script>

<style>
@import '../assets/scss/reset.scss';
@import '../assets/scss/home.scss';
</style>