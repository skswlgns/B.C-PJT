<template>
  <v-app id="bg" :class="[{ 'cont10': windowWidth > 375 && currentRouteName !== 'Home2' && currentRouteName !== 'NotFound'} ]" >
    <!-- 웹용 -->
    <div class="flex_pure" v-if="windowWidth > 375 && currentRouteName !== 'Home2' && currentRouteName !== 'NotFound'">
      <div class="center_pure">
        <img src="@/assets/images/logo.png" alt="로고" :class="[ {'img_logo_1000 curs': windowWidth >= 1000,
        'img_logo_600 curs': windowWidth < 1000}]" @click="goHome()">
      </div>
      <!-- 로그인 되어 있을 경우 -->
      <div class="right" v-if="this.$cookies.isKey('auth-token')">
        <!-- 마이페이지 -->
        <span>
          <i class="fas fa-user-circle fa-2x nav_icon" @click="goMypage()"></i>
        </span>
        <!-- 알림 -->
        <span>
          <i class="far fa-bell fa-2x nav_icon"></i>
        </span>
        <!-- 로구아웃 -->
        <span>
          <i class="fas fa-sign-out-alt fa-2x nav_icon" @click="goLogout()"></i> 
        </span>
      </div>

      <!-- 로그인이 안되어 있을 경우 -->
      <div v-else>
        <span>
          <i class="fas fa-sign-out-alt fa-2x nav_icon" @click="goLogin()"></i> 
        </span>
      </div>
    </div>

    <!-- 모바일버전 -->
    <div v-else-if="windowWidth <= 375" class="bg-white">
      <div class="d-flex my-4 mobile_nav">
        <div class="ml-2 ">
          <img src="@/assets/images/logo_mobile.png" alt="로고!" class="img_mobile" @click="goHome()">
        </div>
        <div class="mr-2 nav">
          <i class="fas fa-user-circle fa-2x nav_icon" @click="goMypage()"></i>
        </div>
        <!-- 알림 -->
        <div class="mr-2 nav">
          <i class="far fa-bell fa-2x nav_icon"></i>
        </div>
        <!-- 로구아웃 -->
        <div class="mr-2 nav">
          <i class="fas fa-sign-out-alt fa-2x nav_icon" @click="goLogin()"></i>
        </div>
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
        this.$router.push('/mypage').catch(()=>{})
      },
      goHome() {
        this.$router.push('/home').catch(()=>{})
      },
      goLogin() {
        this.$router.push('/login').catch(()=>{})
      },
      goLogout() {
        this.$cookies.remove('auth-token')
        this.$router.push('/home')
        location.reload();
      }
    },

    computed: {
      currentRouteName() {
        return this.$route.name;
      }
    },

    created() {

    }
  })
  export default class APP extends Vue {
  }
</script>

<style lang="scss">
  @import '@/assets/scss/nav.scss';
</style>
