<template>
  <div>
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form action="#">
          <h1>회원가입</h1>
          <!-- <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div> -->
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
          <input type="text" placeholder="닉네임" />
          <input type="text" placeholder="전화번호" />
          <button>회원가입</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>LOGIN</h1>
          <!-- <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div> -->
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Login</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome MAMAGO!</h1>
            <button class="ghost" id="signIn">Login</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>안녕, 마마고에 온 걸 환영해!</h1>
            <button class="ghost" id="signUp">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import '@/assets/scss/login.scss'
  @Component({
    components: {
    },
    mounted() {
      const signUpButton = document.getElementById('signUp')!;
      const signInButton = document.getElementById('signIn')!;
      const container = document.getElementById('container')!;

      if (signUpButton) {
          signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
          });
      }
      if (signInButton) {
        signInButton.addEventListener('click', () => {
          container.classList.remove("right-panel-active");
        });
      }
    }
  })
  export default class Login extends Vue {}
</script>
