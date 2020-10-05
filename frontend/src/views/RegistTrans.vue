
<template>
  <div>
    {{myinfo}}
    <!-- {{ myinfo.user_good_lang }} -->
    <!-- {{ temp_lang }} -->
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
              <label class="custom-select" for="gender">
                <select id="gender" name="options" v-model="myinfo.user_gender">
                  <option value="" disabled>성별을 선택하세요</option>
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
                <select id="styledSelect1" name="options" @change="onChange($event)">
                  <option value="" disabled>Please select</option>
                  <option v-for="(option, index) in options" :value="option.value" :key="index">
                    {{ option.text }}
                  </option>
                </select>
<<<<<<< HEAD
=======
                <div>
                  <span v-for="(lang, index) in myinfo.user_good_lang" :key="index" class="mx-2 mt-2">{{lang}}
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="primary"
                       @click="removeA(temp_lang, lang)"
                    >
                      <v-icon dark>
                        mdi-minus
                      </v-icon>
                    </v-btn>
                  </span>
                </div>
>>>>>>> 0874366789b0a0027c8a6d4983598b3323454532
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
          <!-- <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">경력증명</h3>
            </v-col>
            <v-col cols="9">
              <input type="file">
            </v-col>
          </v-row> -->
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="9">
              <button class="red my-3" type="button" @click="first_trans(myinfo)">다음단계</button>
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
        <label>
          <textarea type="text" placeholder="자신을 소개해주세요"/>
        </label>

        <h4>경력증명</h4>
        <input type="file">
        <button class="red mt-3" type="button" @click="first_trans(myinfo)">신청하기</button>
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
    private options: any = [
      { text: '한국어', value: '한국어' },
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
      { text: 'Ελληνικά', value: 'Ελληνικά' },
      { text: 'беларуская', value: 'беларуская' },
      { text: 'български', value: 'български' },
      { text: 'кыргызча', value: 'кыргызча' },
      { text: 'қазақ тілі', value: 'қазақ тілі' },
      { text: 'македонски', value: 'македонски' },
      { text: 'монгол', value: 'монгол' },
      { text: 'српски', value: 'српски' },
      { text: 'татар', value: 'татар' },
      { text: 'тоҷикӣ', value: 'тоҷикӣ' },
      { text: 'українська', value: 'українська' },
      { text: 'ქართული', value: 'ქართული' },
      { text: 'հայերեն', value: 'հայերեն' },
      { text: 'ייִדיש', value: 'ייִדיש' },
      { text: 'עברית', value: 'עברית' },
      { text: 'ئۇيغۇرچە', value: 'ئۇيغۇرچە' },
      { text: 'اردو', value: 'اردو' },
      { text: 'پښتو', value: 'پښتو' },
      { text: 'سنڌي', value: 'سنڌي' },
      { text: 'فارسی', value: 'فارسی' },
      { text: 'کوردیی ناوەندی', value: 'کوردیی ناوەندی' },
      { text: 'ትግርኛ', value: 'ትግርኛ' },
      { text: 'አማርኛ', value: 'አማርኛ' },
      { text: 'नेपाली', value: 'नेपाली' },
      { text: 'मराठी', value: 'मराठी' },
      { text: 'हिन्दी', value: 'हिन्दी' },
      { text: 'বাংলা', value: 'বাংলা' },
      { text: 'ਪੰਜਾਬੀ', value: 'ਪੰਜਾਬੀ' },
      { text: 'ગુજરાતી', value: 'ગુજરાતી' },
      { text: 'ଓଡ଼ିଆ', value: 'ଓଡ଼ିଆ' },
      { text: 'தமிழ்', value: 'தமிழ்' },
      { text: 'తెలుగు', value: 'తెలుగు' },
      { text: 'ಕನ್ನಡ', value: 'ಕನ್ನಡ' },
      { text: 'മലയാളം', value: 'മലയാളം' },
      { text: 'සිංහල', value: 'සිංහල' },
      { text: 'ລາວ', value: 'ລາວ' },
      { text: 'မြန်မာ', value: 'မြန်မာ' },
      { text: 'ខ្មែរ', value: 'ខ្មែរ' },
      { text: 'ᏣᎳᎩ', value: 'ᏣᎳᎩ' }
    ]
    private temp_lang: any = [];

    @RegistTransModule.State('myinfo')
    private myinfo!: any;

    @RegistTransModule.Action('get_mypage')
    private get_mypage!: () => void;

    @RegistTransModule.Action('first_trans')
    private first_trans!: (data:any) => void;

    async mounted() {
      await this.get_mypage()

      window.scrollTo(0, 0)
    }

    onChange(event: any) {
      this.temp_lang.push(event.target.value)
      this.myinfo.user_good_lang = [...new Set(this.temp_lang)];
    }

    removeA(arr:any) {
      var what, a = arguments, L = a.length, ax;
      while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
      }
      this.myinfo.user_good_lang = [...new Set(arr)];
    }  
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/registtrans.scss"
</style>