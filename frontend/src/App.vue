<template>
  <v-app >
    <div class="flex_pure">
      <div class="center_pure">
        <img src="@/assets/images/logo.png" alt="로고" class="img_logo">
      </div>
      <div class="right">
        <!-- 마이페이지 -->
        <span>
          <i class="fas fa-user-circle fa-2x" @click="goMypage()"></i>
        </span>
        <!-- 알림 -->
        <span>
          <i class="far fa-bell fa-2x"></i>
        </span>
        <!-- 로구아웃 -->
        <span>
          <i class="fas fa-sign-out-alt fa-2x"></i>
        </span>
      </div>
    </div>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {

    },

    methods: {
      goMypage() {
        this.$router.push('/mypage')
      }
    }
  })
  export default class APP extends Vue {
  }
</script>

<style lang="scss">
  @import '@/assets/scss/nav.scss';
</style>