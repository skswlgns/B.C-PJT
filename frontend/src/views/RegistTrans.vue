
<template>
  <div>
    {{ myinfo }}
    <div v-if="windowWidth > 375">
      <h1>통역가 등록하기</h1>
      <div class="user-box">
        <div class="d-flex">
          <img src="@/assets/images/user_basic.png" alt="profile_image" class="box" v-if="myinfo.user_image === ''">
          <img :src="myinfo.user_image" alt="profile_image" class="box" v-else>
          <div class="pure-mt">
            <span class="nick-size">닉네임</span>
            <p>모국어 | {{myinfo.user_lang}}</p>
          </div>
        </div>
        <div class="mt-15">
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">실명</h3>
            </v-col>
            <v-col cols="9">
              <input type="text" v-model="myinfo.user_name">
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">성별</h3>
            </v-col>
            <v-col cols="9">
              <label class="custom-select" for="styledSelect1">
                <select id="styledSelect1" name="options" v-model="myinfo.user_gender">
                  <option value=""></option>
                  <option value="남">남</option>
                  <option value="여">여</option>
                </select>
              </label>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">자신있는 언어</h3>
            </v-col>
            <v-col cols="9">
              <label class="custom-select" for="styledSelect1">
                <select id="styledSelect1" name="options" v-model="myinfo.user_good_lang" >
                  <option>통역 할 언어</option>
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
                <span v-for="i in onChange" :key='i'>{{ myinfo.user_good_lang }}</span>
              </label>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">자기소개</h3>
            </v-col>
            <v-col cols="9">
              <textarea type="text" placeholder="자신을 소개해주세요" v-model="myinfo.user_intro"/>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">경력증명</h3>
            </v-col>
            <v-col cols="9">
              <input type="file">
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="9">
              <button class="red my-3" type="button">신청하기</button>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <div v-else>
      <form>  
        <div class="segment">
          <h1>통역가 신청</h1>
        </div>
        
        <label>
          <input type="text" placeholder="실명"/>
        </label>
        <label class="custom-select" for="styledSelect1">
          <select id="styledSelect1" name="options">
            <option value="">성별</option>
            <option value="남">남자</option>
            <option value="여">여자</option>
          </select>
        </label>
        <label class="custom-select" for="styledSelect1">
          <select id="styledSelect1" name="options">
            <option value="">자신있는 언어</option>
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
        </label>
        <label>
          <textarea type="text" placeholder="자신을 소개해주세요"/>
        </label>

        <h4>경력증명</h4>
        <input type="file">
        <button class="red mt-3" type="button">신청하기</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

  const RegistTransModule = namespace('RegistTrans');

  @Component({
    methods: {

    }
  })

  export default class RegistTrans extends Vue {
  
  @RegistTransModule.State('myinfo')
  private myinfo!: any;

  @RegistTransModule.Action('get_mypage')
  private get_mypage!: () => void;

   async mounted() {
    await this.get_mypage()

    window.scrollTo(0, 0)
  }

  onChange(event: any) {
    // console.log(this.myinfo.user_good_lang)
    console.log('dfsdfsd',this.myinfo.user_good_lang)
    this.myinfo.user_good_lang.push(event.target.value)
  }

  
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/registtrans.scss"
</style>