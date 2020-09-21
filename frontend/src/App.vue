<template>
  <div>
    <!-- <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div> -->
    <div class="flex">
      <div class="center">
        <img src="@/assets/images/logo.png" alt="로고" class="img_logo">
      </div>
      <div class="right">
        <span>
          <i class="fas fa-user-circle fa-2x"></i>
        </span>
        <span>
          <i class="far fa-bell fa-2x"></i>
        </span>
        <span>로그아웃</span>
      </div>
    </div>
    <router-view/>  
  </div>
</template>

<style lang="scss">
  @import '@/assets/scss/reset.scss';
  @import '@/assets/scss/nav.scss';
</style>
