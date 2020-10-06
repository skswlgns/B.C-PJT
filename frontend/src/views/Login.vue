<template>
  <div>
    <div id="WEB" v-if="windowWidth > 380">
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <div class="form_pure">
            <h1>회원가입</h1>
            <input v-model="signupData.user_email" type="email" placeholder="이메일" />
            <input @change="pwd_check()" v-model="signupData.user_pwd" type="password" placeholder="비밀번호" />
            <input @change="pwd_check()" v-model="conf_pwd" type="password" placeholder="비밀번호 확인" />
            <span class="check" v-if="this.pwd_bool">비밀번호가 일치하지 않습니다.</span>
            <input v-model="signupData.user_nickname" type="text" placeholder="닉네임" />
            <input v-model="signupData.user_phone" type="text" placeholder="전화번호" />
            <select v-model="signupData.user_lang" name="signupData.user_lang" id="signupData.user_lang">
              모국어
              <option value="" disabled>모국어</option>
              <option v-for="(option, index) in options" :value="option.value" :key="index">
                {{ option.text }}
              </option>
            </select>
            <input v-model="signupData.user_wallet" type="text" placeholder="지갑 주소" />

            <v-dialog
              v-model="dialog"
              persistent
              max-width="400"
            >
              <template v-slot:activator="{ on, attrs }">
                <a v-bind="attrs" v-on="on">지갑이 없으신가요 ? ? </a>
              </template>
              <v-card>
                <v-card-title class="headline">
                  지갑 비밀번호를 입력해주세요.
                </v-card-title>
                <v-card-text class="modal_text">
                  <input v-model="wallet_password" type="text" placeholder="비밀번호">
                  <v-btn v-if="!wallet_complete" class="create_wal" @click="wallet_create(wallet_password)">지갑 생성</v-btn>
                  <h3>{{ my_wallet }}</h3>
                  <p>위의 지갑 주소를 복사해서 작성해주세요 : )</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                  >
                    close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <button @click="signup(signupData)">회원가입</button>
          </div>
        </div>
        <div class="form-container sign-in-container">
          <div class="form_pure">
            <h1>LOGIN</h1>
            <h3>{{ user_token }}</h3>
            <input v-model="loginData.user_email" type="email" placeholder="Email" />
            <input v-model="loginData.user_pwd" type="password" placeholder="Password" @keypress.enter="login(loginData)"/>
            <a href="#">Forgot your password?</a>
            <button @click="login(loginData)">Login</button>
          </div>
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
    <div id="Mobile"  v-if="windowWidth <= 380">
      <div class="form-structor">
        <div id="signup_body" class="signup slide-up">
          <h2 class="form-title" id="signup"><span>or</span>Sign up</h2>
          <div class="form-holder">
            <input v-model="signupData.user_email" type="email" class="input" placeholder="Email" />
            <input @change="pwd_check()" type="password" v-model="signupData.user_pwd" class="input" placeholder="Password" />
            <input @change="pwd_check()" type="password" v-model="conf_pwd" class="input" placeholder="Password" />
            <span class="check" v-if="this.pwd_bool">비밀번호가 일치하지 않습니다.</span>
            <input v-model="signupData.user_nickname" type="text" class="input" placeholder="닉네임" />
            <input v-model="signupData.user_phone" type="text" class="input" placeholder="전화번호" />
            <select v-model="signupData.user_lang" class="input" name="pets" id="pet-select">
              <option value="" disabled>모국어</option>
              <option v-for="(option, index) in options" :value="option.value" :key="index">
                {{ option.text }}
              </option>
            </select>
          </div>
          <span class="check" v-if="this.pwd_bool"> * 비밀번호가 일치하지 않습니다.</span>
          <button class="submit-btn" @click="signup(signupData)">Sign up</button>
        </div>
        <div id="login_body" class="login ">
          <div class="center">
            <h2 class="form-title" id="login"><span>or</span>Log in</h2>
            <div class="form-holder">
              <input v-model="loginData.user_email" type="email" class="input" placeholder="Email" />
              <input v-model="loginData.user_pwd" type="password" class="input" placeholder="Password" />
            </div>
            <button class="submit-btn" @click="login(loginData)">Log in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  // import { Socket } from 'net';
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const LoginModule = namespace('Login');

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

      const loginBtn = document.getElementById('login')!;
      const signupBtn = document.getElementById('signup')!;
      const loginBody = document.getElementById('login_body')!;
      const signupBody = document.getElementById('signup_body')!;

      loginBtn.addEventListener('click', () => {
        signupBody.classList.add('slide-up')
        loginBody.classList.remove('slide-up') 
      });

      signupBtn.addEventListener('click', () => {
        loginBody.classList.add('slide-up')
        signupBody.classList.remove('slide-up')
      });
    },
  })

  export default class Login extends Vue {
    // 데이터 영역
    private dialog: boolean = false;
    private wallet_password: String = '';
    private wallet_complete : boolean = false;

    private options: any =[
      { text: 'Deutsch', value: 'Deutsch' },
      { text: 'English', value: 'English' },
      { text: 'español', value: 'español' },
      { text: 'español (Latinoamérica)', value: 'español (Latinoamérica)' },
      { text: 'français', value: 'français' },
      { text: 'hrvatski', value: 'hrvatski' },
      { text: 'italiano', value: 'italiano' },
      { text: 'Nederlands', value: 'Nederlands' },
      { text: 'polski', value: 'polski' },
      { text: 'português (Brasil)', value: 'português (Brasil)' },
      { text: 'português (Portugal)', value: 'português (Portugal)' },
      { text: 'Tiếng Việt', value: 'Tiếng Việt' },
      { text: 'Türkçe', value: 'Türkçe' },
      { text: 'русский', value: 'русский' },
      { text: 'العربية', value: 'العربية' },
      { text: 'ไทย', value: 'ไทย' },
      { text: '한국어', value: '한국어' },
      { text: '中文 (简体)', value: '中文 (简体)' },
      { text: '中文 (繁體)', value: '中文 (繁體)' },
      { text: '日本語', value: '日本語' },
      { text: 'Acoli', value: 'Acoli' },
      { text: 'Afrikaans', value: 'Afrikaans' },
      { text: 'Akan', value: 'Akan' },
      { text: 'Asụsụ Igbo', value: 'Asụsụ Igbo' },
      { text: 'azərbaycan', value: 'azərbaycan' },
      { text: 'Balinese', value: 'Balinese' },
      { text: 'Basa Sunda', value: 'Basa Sunda' },
      { text: 'Binisaya', value: 'Binisaya' },
      { text: 'Bork, bork, bork!', value: 'Bork, bork, bork!' },
      { text: 'bosanski', value: 'bosanski' },
      { text: 'brezhoneg', value: 'brezhoneg' },
      { text: 'català', value: 'català' },
      { text: 'čeština', value: 'čeština' },
      { text: 'chiShona', value: 'chiShona' },
      { text: 'Corsican', value: 'Corsican' },
      { text: 'Cymraeg', value: 'Cymraeg' },
      { text: 'dansk', value: 'dansk' },
      { text: 'Èdè Yorùbá', value: 'Èdè Yorùbá' },
      { text: 'eesti', value: 'eesti' },
      { text: 'Elmer Fudd', value: 'Elmer Fudd' },
      { text: 'esperanto', value: 'esperanto' },
      { text: 'euskara', value: 'euskara' },
      { text: 'Eʋegbe', value: 'Eʋegbe' },
      { text: 'Filipino', value: 'Filipino' },
      { text: 'Filipino', value: 'Filipino' },
      { text: 'føroyskt', value: 'føroyskt' },
      { text: 'Frysk', value: 'Frysk' },
      { text: 'Ga', value: 'Ga' },
      { text: 'Gaeilge', value: 'Gaeilge' },
      { text: 'Gàidhlig', value: 'Gàidhlig' },
      { text: 'galego', value: 'galego' },
      { text: 'Guarani', value: 'Guarani' },
      { text: 'Hacker', value: 'Hacker' },
      { text: 'Haitian Creole', value: 'Haitian Creole' },
      { text: 'Hausa', value: 'Hausa' },
      { text: 'ʻŌlelo Hawaiʻi', value: 'ʻŌlelo Hawaiʻi' },
      { text: 'Ichibemba', value: 'Ichibemba' },
      { text: 'Ikirundi', value: 'Ikirundi' },
      { text: 'Indonesia', value: 'Indonesia' },
      { text: 'interlingua', value: 'interlingua' },
      { text: 'isiXhosa', value: 'isiXhosa' },
      { text: 'isiZulu', value: 'isiZulu' },
      { text: 'íslenska', value: 'íslenska' },
      { text: 'Jawa', value: 'Jawa' },
      { text: 'Kinyarwanda', value: 'Kinyarwanda' },
      { text: 'Kiswahili', value: 'Kiswahili' },
      { text: 'Klingon', value: 'Klingon' },
      { text: 'Kongo', value: 'Kongo' },
      { text: 'kreol morisien', value: 'kreol morisien' },
      { text: 'Krio (Sierra Leone)', value: 'Krio (Sierra Leone)' },
      { text: 'Latin', value: 'Latin' },
      { text: 'latviešu', value: 'latviešu' },
      { text: 'lea fakatonga', value: 'lea fakatonga' },
      { text: 'lietuvių', value: 'lietuvių' },
      { text: 'lingála', value: 'lingála' },
      { text: 'Lozi', value: 'Lozi' },
      { text: 'Luba-Lulua', value: 'Luba-Lulua' },
      { text: 'Luganda', value: 'Luganda' },
      { text: 'magyar', value: 'magyar' },
      { text: 'Malagasy', value: 'Malagasy' },
      { text: 'Malti', value: 'Malti' },
      { text: 'Māori', value: 'Māori' },
      { text: 'Melayu', value: 'Melayu' },
      { text: 'Nigerian Pidgin', value: 'Nigerian Pidgin' },
      { text: 'norsk', value: 'norsk' },
      { text: 'Northern Sotho', value: 'Northern Sotho' },
      { text: 'Nyanja', value: 'Nyanja' },
      { text: 'nynorsk', value: 'nynorsk' },
      { text: 'ozbek', value: 'ozbek' },
      { text: 'Occitan', value: 'Occitan' },
      { text: 'Oromoo', value: 'Oromoo' },
      { text: 'Pirate', value: 'Pirate' },
      { text: 'română', value: 'română' },
      { text: 'rumantsch', value: 'rumantsch' },
      { text: 'Runasimi', value: 'Runasimi' },
      { text: 'Runyankore', value: 'Runyankore' },
      { text: 'Seychellois Creole', value: 'Seychellois Creole' },
      { text: 'shqip', value: 'shqip' },
      { text: 'slovenčina', value: 'slovenčina' },
      { text: 'slovenščina', value: 'slovenščina' },
      { text: 'Soomaali', value: 'Soomaali' },
      { text: 'Southern Sotho', value: 'Southern Sotho' },
      { text: 'srpski (Crna Gora)', value: 'srpski (Crna Gora)' },
      { text: 'srpski (latinica)', value: 'srpski (latinica)' },
      { text: 'suomi', value: 'suomi' },
      { text: 'svenska', value: 'svenska' },
      { text: 'Tswana', value: 'Tswana' },
      { text: 'Tumbuka', value: 'Tumbuka' },
      { text: 'türkmen dili', value: 'türkmen dili' },
      { text: 'Twi', value: 'Twi' },
      { text: 'Wolof', value: 'Wolof' },
    ]

    private signupData : any = {
      user_email : "",
      user_nickname: "",
      user_pwd: "",
      user_phone: "",
      user_lang: "",
      user_wallet : ""
    }
    private conf_pwd: string = ""
    private pwd_bool: boolean = false

    private loginData : any = {
      user_email: "",
      user_pwd: "",
    }

    // 메소드 영역
    pwd_check() {
      if (this.signupData.user_pwd === this.conf_pwd){
        this.pwd_bool = false
      }
      else {
        this.pwd_bool = true
      }
    }

    // vuex 영역
    @LoginModule.State('user_token')
    private user_token!: string;

    @LoginModule.State('my_wallet')
    private my_wallet!: string;

    @LoginModule.Action('signup')
    private signup!: (signupData: object) => void;

    @LoginModule.Action('login')
    private login!: (loginData: any) => void;

    @LoginModule.Action('create_wallet')
    private create_wallet!: (wallet_password: String) => void;

    wallet_create(wallet_password: String){
      this.wallet_complete = true
      this.create_wallet(wallet_password)
    }
    
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/login.scss';
</style>
