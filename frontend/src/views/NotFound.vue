<template>
  <div>
    <div class="face">
      <div class="band">
        <div class="red"></div>
        <div class="white"></div>
        <div class="blue"></div>
      </div>
      <div class="eyes"></div>
      <div class="dimples"></div>
      <div class="mouth"></div>
    </div>

    <h1>404 Page Not Found</h1>
    <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
    <div class="btn" @click="goHome()">Return to Home</div>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  
  @Component({
    components: {
    },
    methods: {
      goHome() {
        this.$router.push('/')
      }
    }

  })

  export default class NotFound extends Vue {

  }
</script>

<style lang="scss" scoped>
 @import '@/assets/scss/NotFound.scss';
</style>
