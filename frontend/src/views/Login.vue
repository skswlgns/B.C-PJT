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
            <select v-model="signupData.user_lang" name="pets" id="pet-select">
                <option>{{ signupData.user_lang }}</option>
                <option>한국어</option>
                <option>English</option>
                <option>Deutsch</option>
                <option>español</option>
                <option>español (Latinoamérica)</option>
                <option>français</option>
                <option>hrvatski</option>
                <option>italiano</option>
                <option>Nederlands</option>
                <option>polski</option>
                <option>português (Brasil)</option>
                <option>português (Portugal)</option>
                <option>Tiếng Việt</option>
                <option>Türkçe</option>
                <option>русский</option>
                <option>العربية</option>
                <option>ไทย</option>
                <option>中文 (简体)</option>
                <option>中文 (繁體)</option>
                <option>日本語</option>
                <option>Acoli</option>
                <option>Afrikaans</option>
                <option>Akan</option>
                <option>Asụsụ Igbo</option>
                <option>azərbaycan</option>
                <option>Balinese</option>
                <option>Basa Sunda</option>
                <option>Binisaya</option>
                <option>Bork, bork, bork!</option>
                <option>bosanski</option>
                <option>brezhoneg</option>
                <option>català</option>
                <option>čeština</option>
                <option>chiShona</option>
                <option>Corsican</option>
                <option>Cymraeg</option>
                <option>dansk</option>
                <option>Èdè Yorùbá</option>
                <option>eesti</option>
                <option>Elmer Fudd</option>
                <option>esperanto</option>
                <option>euskara</option>
                <option>Eʋegbe</option>
                <option>Filipino</option>
                <option>Filipino</option>
                <option>føroyskt</option>
                <option>Frysk</option>
                <option>Ga</option>
                <option>Gaeilge</option>
                <option>Gàidhlig</option>
                <option>galego</option>
                <option>Guarani</option>
                <option>Hacker</option>
                <option>Haitian Creole</option>
                <option>Hausa</option>
                <option>ʻŌlelo Hawaiʻi</option>
                <option>Ichibemba</option>
                <option>Ikirundi</option>
                <option>Indonesia</option>
                <option>interlingua</option>
                <option>isiXhosa</option>
                <option>isiZulu</option>
                <option>íslenska</option>
                <option>Jawa</option>
                <option>Kinyarwanda</option>
                <option>Kiswahili</option>
                <option>Klingon</option>
                <option>Kongo</option>
                <option>kreol morisien</option>
                <option>Krio (Sierra Leone)</option>
                <option>Latin</option>
                <option>latviešu</option>
                <option>lea fakatonga</option>
                <option>lietuvių</option>
                <option>lingála</option>
                <option>Lozi</option>
                <option>Luba-Lulua</option>
                <option>Luganda</option>
                <option>magyar</option>
                <option>Malagasy</option>
                <option>Malti</option>
                <option>Māori</option>
                <option>Melayu</option>
                <option>Nigerian Pidgin</option>
                <option>norsk</option>
                <option>Northern Sotho</option>
                <option>Nyanja</option>
                <option>nynorsk</option>
                <option>ozbek</option>
                <option>Occitan</option>
                <option>Oromoo</option>
                <option>Pirate</option>
                <option>română</option>
                <option>rumantsch</option>
                <option>Runasimi</option>
                <option>nRunyankore</option>
                <option>Seychellois Creole</option>
                <option>shqip</option>
                <option>slovenčina</option>
                <option>slovenščina</option>
                <option>Soomaali</option>
                <option>Southern Sotho</option>
                <option>srpski (Crna Gora)</option>
                <option>srpski (latinica)</option>
                <option>suomi</option>
                <option>svenska</option>
                <option>Tswana</option>
                <option>Tumbuka</option>
                <option>türkmen dili</option>
                <option>Twi</option>
                <option>Wolof</option>
                <option>Ελληνικά</option>
                <option>беларуская</option>
                <option>български</option>
                <option>кыргызча</option>
                <option>қазақ тілі</option>
                <option>македонски</option>
                <option>монгол</option>
                <option>српски</option>
                <option>татар</option>
                <option>тоҷикӣ</option>
                <option>українська</option>
                <option>ქართული</option>
                <option>հայերեն</option>
                <option>ייִדיש</option>
                <option>עברית</option>
                <option>ئۇيغۇرچە</option>
                <option>اردو</option>
                <option>پښتو</option>
                <option>سنڌي</option>
                <option>فارسی</option>
                <option>کوردیی ناوەندی</option>
                <option>ትግርኛ</option>
                <option>አማርኛ</option>
                <option>नेपाली</option>
                <option>मराठी</option>
                <option>हिन्दी</option>
                <option>বাংলা</option>
                <option>ਪੰਜਾਬੀ</option>
                <option>ગુજરાતી</option>
                <option>ଓଡ଼ିଆ</option>
                <option>தமிழ்</option>
                <option>తెలుగు</option>
                <option>ಕನ್ನಡ</option>
                <option>മലയാളം</option>
                <option>සිංහල</option>
                <option>ລາວ</option>
                <option>မြန်မာ</option>
                <option>ខ្មែរ</option>
                <option>ᏣᎳᎩ</option>
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
                <option>{{ signupData.user_lang }}</option>
                <option>한국어</option>
                <option>English</option>
                <option>Deutsch</option>
                <option>español</option>
                <option>español (Latinoamérica)</option>
                <option>français</option>
                <option>hrvatski</option>
                <option>italiano</option>
                <option>Nederlands</option>
                <option>polski</option>
                <option>português (Brasil)</option>
                <option>português (Portugal)</option>
                <option>Tiếng Việt</option>
                <option>Türkçe</option>
                <option>русский</option>
                <option>العربية</option>
                <option>ไทย</option>
                <option>中文 (简体)</option>
                <option>中文 (繁體)</option>
                <option>日本語</option>
                <option>Acoli</option>
                <option>Afrikaans</option>
                <option>Akan</option>
                <option>Asụsụ Igbo</option>
                <option>azərbaycan</option>
                <option>Balinese</option>
                <option>Basa Sunda</option>
                <option>Binisaya</option>
                <option>Bork, bork, bork!</option>
                <option>bosanski</option>
                <option>brezhoneg</option>
                <option>català</option>
                <option>čeština</option>
                <option>chiShona</option>
                <option>Corsican</option>
                <option>Cymraeg</option>
                <option>dansk</option>
                <option>Èdè Yorùbá</option>
                <option>eesti</option>
                <option>Elmer Fudd</option>
                <option>esperanto</option>
                <option>euskara</option>
                <option>Eʋegbe</option>
                <option>Filipino</option>
                <option>Filipino</option>
                <option>føroyskt</option>
                <option>Frysk</option>
                <option>Ga</option>
                <option>Gaeilge</option>
                <option>Gàidhlig</option>
                <option>galego</option>
                <option>Guarani</option>
                <option>Hacker</option>
                <option>Haitian Creole</option>
                <option>Hausa</option>
                <option>ʻŌlelo Hawaiʻi</option>
                <option>Ichibemba</option>
                <option>Ikirundi</option>
                <option>Indonesia</option>
                <option>interlingua</option>
                <option>isiXhosa</option>
                <option>isiZulu</option>
                <option>íslenska</option>
                <option>Jawa</option>
                <option>Kinyarwanda</option>
                <option>Kiswahili</option>
                <option>Klingon</option>
                <option>Kongo</option>
                <option>kreol morisien</option>
                <option>Krio (Sierra Leone)</option>
                <option>Latin</option>
                <option>latviešu</option>
                <option>lea fakatonga</option>
                <option>lietuvių</option>
                <option>lingála</option>
                <option>Lozi</option>
                <option>Luba-Lulua</option>
                <option>Luganda</option>
                <option>magyar</option>
                <option>Malagasy</option>
                <option>Malti</option>
                <option>Māori</option>
                <option>Melayu</option>
                <option>Nigerian Pidgin</option>
                <option>norsk</option>
                <option>Northern Sotho</option>
                <option>Nyanja</option>
                <option>nynorsk</option>
                <option>ozbek</option>
                <option>Occitan</option>
                <option>Oromoo</option>
                <option>Pirate</option>
                <option>română</option>
                <option>rumantsch</option>
                <option>Runasimi</option>
                <option>nRunyankore</option>
                <option>Seychellois Creole</option>
                <option>shqip</option>
                <option>slovenčina</option>
                <option>slovenščina</option>
                <option>Soomaali</option>
                <option>Southern Sotho</option>
                <option>srpski (Crna Gora)</option>
                <option>srpski (latinica)</option>
                <option>suomi</option>
                <option>svenska</option>
                <option>Tswana</option>
                <option>Tumbuka</option>
                <option>türkmen dili</option>
                <option>Twi</option>
                <option>Wolof</option>
                <option>Ελληνικά</option>
                <option>беларуская</option>
                <option>български</option>
                <option>кыргызча</option>
                <option>қазақ тілі</option>
                <option>македонски</option>
                <option>монгол</option>
                <option>српски</option>
                <option>татар</option>
                <option>тоҷикӣ</option>
                <option>українська</option>
                <option>ქართული</option>
                <option>հայերեն</option>
                <option>ייִדיש</option>
                <option>עברית</option>
                <option>ئۇيغۇرچە</option>
                <option>اردو</option>
                <option>پښتو</option>
                <option>سنڌي</option>
                <option>فارسی</option>
                <option>کوردیی ناوەندی</option>
                <option>ትግርኛ</option>
                <option>አማርኛ</option>
                <option>नेपाली</option>
                <option>मराठी</option>
                <option>हिन्दी</option>
                <option>বাংলা</option>
                <option>ਪੰਜਾਬੀ</option>
                <option>ગુજરાતી</option>
                <option>ଓଡ଼ିଆ</option>
                <option>தமிழ்</option>
                <option>తెలుగు</option>
                <option>ಕನ್ನಡ</option>
                <option>മലയാളം</option>
                <option>සිංහල</option>
                <option>ລາວ</option>
                <option>မြန်မာ</option>
                <option>ខ្មែរ</option>
                <option>ᏣᎳᎩ</option>
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

    private signupData : any = {
      user_email : "",
      user_nickname: "",
      user_pwd: "",
      user_phone: "",
      user_lang: "모국어",
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
      console.log('')
      this.create_wallet(wallet_password)
    }
    
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/login.scss';
</style>
