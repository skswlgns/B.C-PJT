<template>
  <div>
    <div v-if="windowWidth > 375">
      <h1>통역가 수정하기</h1>
      <div class="user-box">
        <div class="d-flex">
          <img src="@/assets/images/user_basic.png" alt="profile_image" class="box" v-if="myinfo.user_image === ''">
          <img :src="'https://j3b103.p.ssafy.io/image/' + myinfo.user_image" alt="profile_image" class="box" v-else>
          <div class="pure-mt">
            <span class="nick-size">{{ myinfo.user_nickname }}</span>
            <p style="font-family: Noto Sans">모국어 | {{myinfo.user_lang}}</p>
          </div>
        </div>
        <div class="mt-15">
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">자신있는 언어</h3>
            </v-col>
            <v-col cols="9">
              <label class="custom-select" for="styledSelect1">
                <select id="styledSelect1" name="options" @change="onChange($event)">
                  <option value="" disabled>Please select</option>
                  <option v-for="(option, index) in options" :value="option.value" :key="index" style="font-family: Noto Sans">
                    {{ option.text }}
                  </option>
                </select>
                <div>
                  <span v-for="(lang, index) in myinfo.user_good_lang" :key="index" class="mx-2 mt-2">{{lang.slice(0,-1)}}
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

  const EdittransModule = namespace('Edittrans');

  @Component({
    methods: {

    }
  })

  export default class Edittrans extends Vue {
    private options: any = [
      { text: '한국어[네이티브]', value: '한국어1' },
      { text: '한국어[고급]', value: '한국어2' },
      { text: 'Deutsch[네이티브]', value: 'Deutsch1' },
      { text: 'Deutsch[고급]', value: 'Deutsch2' },
      { text: 'English[네이티브]', value: 'English1' },
      { text: 'English[고급]', value: 'English2' },
      { text: 'español[네이티브]', value: 'español1' },
      { text: 'español[고급]', value: 'español2' },
      { text: 'español (Latinoamérica)[네이티브]', value: 'español (Latinoamérica)1' },
      { text: 'español (Latinoamérica)[고급]', value: 'español (Latinoamérica)2' },
      { text: 'français[네이티브]', value: 'français1' },
      { text: 'français[고급]', value: 'français2' },
      { text: 'hrvatski[네이티브]', value: 'hrvatski1' },
      { text: 'hrvatski[고급]', value: 'hrvatski2' },
      { text: 'italiano[네이티브]', value: 'italiano1' },
      { text: 'italiano[고급]', value: 'italiano2' },
      { text: 'Nederlands[네이티브]', value: 'Nederlands1' },
      { text: 'Nederlands[고급]', value: 'Nederlands2' },
      { text: 'polski[네이티브]', value: 'polski1' },
      { text: 'polski[고급]', value: 'polski2' },
      { text: 'português (Brasil)[네이티브]', value: 'português (Brasil)1' },
      { text: 'português (Brasil)[고급]', value: 'português (Brasil)2' },
      { text: 'português (Portugal)[네이티브]', value: 'português (Portugal)1' },
      { text: 'português (Portugal)[고급]', value: 'português (Portugal)2' },
      { text: 'Tiếng Việt[네이티브]', value: 'Tiếng Việt1' },
      { text: 'Tiếng Việt[고급]', value: 'Tiếng Việt2' },
      { text: 'Türkçe[네이티브]', value: 'Türkçe1' },
      { text: 'Türkçe[고급]', value: 'Türkçe2' },
      { text: 'русский[네이티브]', value: 'русский1' },
      { text: 'русский[고급]', value: 'русский2' },
      { text: 'العربية[네이티브]', value: 'العربية1' },
      { text: 'العربية[고급]', value: 'العربية2' },
      { text: 'ไทย[네이티브]', value: 'ไทย1' },
      { text: 'ไทย[고급]', value: 'ไทย2' },
      { text: '中文 (简体)[네이티브]', value: '中文 (简体)1' },
      { text: '中文 (简体)[고급]', value: '中文 (简体)2' },
      { text: '中文 (繁體)[네이티브]', value: '中文 (繁體)1' },
      { text: '中文 (繁體)[고급]', value: '中文 (繁體)2' },
      { text: '日本語[네이티브]', value: '日本語1' },
      { text: '日本語[고급]', value: '日本語2' },
      { text: 'Acoli[네이티브]', value: 'Acoli1' },
      { text: 'Acoli[고급]', value: 'Acoli2' },
      { text: 'Afrikaans[네이티브]', value: 'Afrikaans1' },
      { text: 'Afrikaans[고급]', value: 'Afrikaans2' },
      { text: 'Akan[네이티브]', value: 'Akan1' },
      { text: 'Akan[고급]', value: 'Akan2' },
      { text: 'Asụsụ Igbo[네이티브]', value: 'Asụsụ Igbo1' },
      { text: 'Asụsụ Igbo[고급]', value: 'Asụsụ Igbo2' },
      { text: 'azərbaycan[네이티브]', value: 'azərbaycan1' },
      { text: 'azərbaycan[고급]', value: 'azərbaycan2' },
      { text: 'Balinese[네이티브]', value: 'Balinese1' },
      { text: 'Balinese[고급]', value: 'Balinese2' },
      { text: 'Basa Sunda[네이티브]', value: 'Basa Sunda1' },
      { text: 'Basa Sunda[고급]', value: 'Basa Sunda2' },
      { text: 'Binisaya[네이티브]', value: 'Binisaya1' },
      { text: 'Binisaya[고급]', value: 'Binisaya2' },
      { text: 'Bork, bork, bork![네이티브]', value: 'Bork, bork, bork!1' },
      { text: 'Bork, bork, bork![고급]', value: 'Bork, bork, bork!2' },
      { text: 'bosanski[네이티브]', value: 'bosanski1' },
      { text: 'bosanski[고급]', value: 'bosanski2' },
      { text: 'brezhoneg[네이티브]', value: 'brezhoneg1' },
      { text: 'brezhoneg[고급]', value: 'brezhoneg2' },
      { text: 'català[네이티브]', value: 'català1' },
      { text: 'català[고급]', value: 'català2' },
      { text: 'čeština[네이티브]', value: 'čeština1' },
      { text: 'čeština[고급]', value: 'čeština2' },
      { text: 'chiShona[네이티브]', value: 'chiShona1' },
      { text: 'chiShona[고급]', value: 'chiShona2' },
      { text: 'Corsican[네이티브]', value: 'Corsican1' },
      { text: 'Corsican[고급]', value: 'Corsican2' },
      { text: 'Cymraeg[네이티브]', value: 'Cymraeg1' },
      { text: 'Cymraeg[고급]', value: 'Cymraeg2' },
      { text: 'dansk[네이티브]', value: 'dansk1' },
      { text: 'dansk[고급]', value: 'dansk2' },
      { text: 'Èdè Yorùbá[네이티브]', value: 'Èdè Yorùbá1' },
      { text: 'Èdè Yorùbá[고급]', value: 'Èdè Yorùbá2' },
      { text: 'eesti[네이티브]', value: 'eesti1' },
      { text: 'eesti[고급]', value: 'eesti2' },
      { text: 'Elmer Fudd[네이티브]', value: 'Elmer Fudd1' },
      { text: 'Elmer Fudd[고급]', value: 'Elmer Fudd2' },
      { text: 'esperanto[네이티브]', value: 'esperanto1' },
      { text: 'esperanto[고급]', value: 'esperanto2' },
      { text: 'euskara[네이티브]', value: 'euskara1' },
      { text: 'euskara[고급]', value: 'euskara2' },
      { text: 'Eʋegbe[네이티브]', value: 'Eʋegbe1' },
      { text: 'Eʋegbe[고급]', value: 'Eʋegbe2' },
      { text: 'Filipino[네이티브]', value: 'Filipino1' },
      { text: 'Filipino[고급]', value: 'Filipino2' },
      { text: 'Filipino[네이티브]', value: 'Filipino1' },
      { text: 'Filipino[고급]', value: 'Filipino2' },
      { text: 'føroyskt[네이티브]', value: 'føroyskt1' },
      { text: 'føroyskt[고급]', value: 'føroyskt2' },
      { text: 'Frysk[네이티브]', value: 'Frysk1' },
      { text: 'Frysk[고급]', value: 'Frysk2' },
      { text: 'Ga[네이티브]', value: 'Ga1' },
      { text: 'Ga[고급]', value: 'Ga2' },
      { text: 'Gaeilge[네이티브]', value: 'Gaeilge1' },
      { text: 'Gaeilge[고급]', value: 'Gaeilge2' },
      { text: 'Gàidhlig[네이티브]', value: 'Gàidhlig1' },
      { text: 'Gàidhlig[고급]', value: 'Gàidhlig2' },
      { text: 'galego[네이티브]', value: 'galego1' },
      { text: 'galego[고급]', value: 'galego2' },
      { text: 'Guarani[네이티브]', value: 'Guarani1' },
      { text: 'Guarani[고급]', value: 'Guarani2' },
      { text: 'Hacker[네이티브]', value: 'Hacker1' },
      { text: 'Hacker[고급]', value: 'Hacker2' },
      { text: 'Haitian Creole[네이티브]', value: 'Haitian Creole1' },
      { text: 'Haitian Creole[고급]', value: 'Haitian Creole2' },
      { text: 'Hausa[네이티브]', value: 'Hausa1' },
      { text: 'Hausa[고급]', value: 'Hausa2' },
      { text: 'ʻŌlelo Hawaiʻi[네이티브]', value: 'ʻŌlelo Hawaiʻi1' },
      { text: 'ʻŌlelo Hawaiʻi[고급]', value: 'ʻŌlelo Hawaiʻi2' },
      { text: 'Ichibemba[네이티브]', value: 'Ichibemba1' },
      { text: 'Ichibemba[고급]', value: 'Ichibemba2' },
      { text: 'Ikirundi[네이티브]', value: 'Ikirundi1' },
      { text: 'Ikirundi[고급]', value: 'Ikirundi2' },
      { text: 'Indonesia[네이티브]', value: 'Indonesia1' },
      { text: 'Indonesia[고급]', value: 'Indonesia2' },
      { text: 'interlingua[네이티브]', value: 'interlingua1' },
      { text: 'interlingua[고급]', value: 'interlingua2' },
      { text: 'isiXhosa[네이티브]', value: 'isiXhosa1' },
      { text: 'isiXhosa[고급]', value: 'isiXhosa2' },
      { text: 'isiZulu[네이티브]', value: 'isiZulu1' },
      { text: 'isiZulu[고급]', value: 'isiZulu2' },
      { text: 'íslenska[네이티브]', value: 'íslenska1' },
      { text: 'íslenska[고급]', value: 'íslenska2' },
      { text: 'Jawa[네이티브]', value: 'Jawa1' },
      { text: 'Jawa[고급]', value: 'Jawa2' },
      { text: 'Kinyarwanda[네이티브]', value: 'Kinyarwanda1' },
      { text: 'Kinyarwanda[고급]', value: 'Kinyarwanda2' },
      { text: 'Kiswahili[네이티브]', value: 'Kiswahili1' },
      { text: 'Kiswahili[고급]', value: 'Kiswahili2' },
      { text: 'Klingon[네이티브]', value: 'Klingon1' },
      { text: 'Klingon[고급]', value: 'Klingon2' },
      { text: 'Kongo[네이티브]', value: 'Kongo1' },
      { text: 'Kongo[고급]', value: 'Kongo2' },
      { text: 'kreol morisien[네이티브]', value: 'kreol morisien1' },
      { text: 'kreol morisien[고급]', value: 'kreol morisien2' },
      { text: 'Krio (Sierra Leone)[네이티브]', value: 'Krio (Sierra Leone)1' },
      { text: 'Krio (Sierra Leone)[고급]', value: 'Krio (Sierra Leone)2' },
      { text: 'Latin[네이티브]', value: 'Latin1' },
      { text: 'Latin[고급]', value: 'Latin2' },
      { text: 'latviešu[네이티브]', value: 'latviešu1' },
      { text: 'latviešu[고급]', value: 'latviešu2' },
      { text: 'lea fakatonga[네이티브]', value: 'lea fakatonga1' },
      { text: 'lea fakatonga[고급]', value: 'lea fakatonga2' },
      { text: 'lietuvių[네이티브]', value: 'lietuvių1' },
      { text: 'lietuvių[고급]', value: 'lietuvių2' },
      { text: 'lingála[네이티브]', value: 'lingála1' },
      { text: 'lingála[고급]', value: 'lingála2' },
      { text: 'Lozi[네이티브]', value: 'Lozi1' },
      { text: 'Lozi[고급]', value: 'Lozi2' },
      { text: 'Luba-Lulua[네이티브]', value: 'Luba-Lulua1' },
      { text: 'Luba-Lulua[고급]', value: 'Luba-Lulua2' },
      { text: 'Luganda[네이티브]', value: 'Luganda1' },
      { text: 'Luganda[고급]', value: 'Luganda2' },
      { text: 'magyar[네이티브]', value: 'magyar1' },
      { text: 'magyar[고급]', value: 'magyar2' },
      { text: 'Malagasy[네이티브]', value: 'Malagasy1' },
      { text: 'Malagasy[고급]', value: 'Malagasy2' },
      { text: 'Malti[네이티브]', value: 'Malti1' },
      { text: 'Malti[고급]', value: 'Malti2' },
      { text: 'Māori[네이티브]', value: 'Māori1' },
      { text: 'Māori[고급]', value: 'Māori2' },
      { text: 'Melayu[네이티브]', value: 'Melayu1' },
      { text: 'Melayu[고급]', value: 'Melayu2' },
      { text: 'Nigerian Pidgin[네이티브]', value: 'Nigerian Pidgin1' },
      { text: 'Nigerian Pidgin[고급]', value: 'Nigerian Pidgin2' },
      { text: 'norsk[네이티브]', value: 'norsk1' },
      { text: 'norsk[고급]', value: 'norsk2' },
      { text: 'Northern Sotho[네이티브]', value: 'Northern Sotho1' },
      { text: 'Northern Sotho[고급]', value: 'Northern Sotho2' },
      { text: 'Nyanja[네이티브]', value: 'Nyanja1' },
      { text: 'Nyanja[고급]', value: 'Nyanja2' },
      { text: 'nynorsk[네이티브]', value: 'nynorsk1' },
      { text: 'nynorsk[고급]', value: 'nynorsk2' },
      { text: 'ozbek[네이티브]', value: 'ozbek1' },
      { text: 'ozbek[고급]', value: 'ozbek2' },
      { text: 'Occitan[네이티브]', value: 'Occitan1' },
      { text: 'Occitan[고급]', value: 'Occitan2' },
      { text: 'Oromoo[네이티브]', value: 'Oromoo1' },
      { text: 'Oromoo[고급]', value: 'Oromoo2' },
      { text: 'Pirate[네이티브]', value: 'Pirate1' },
      { text: 'Pirate[고급]', value: 'Pirate2' },
      { text: 'română[네이티브]', value: 'română1' },
      { text: 'română[고급]', value: 'română2' },
      { text: 'rumantsch[네이티브]', value: 'rumantsch1' },
      { text: 'rumantsch[고급]', value: 'rumantsch2' },
      { text: 'Runasimi[네이티브]', value: 'Runasimi1' },
      { text: 'Runasimi[고급]', value: 'Runasimi2' },
      { text: 'Runyankore[네이티브]', value: 'Runyankore1' },
      { text: 'Runyankore[고급]', value: 'Runyankore2' },
      { text: 'Seychellois Creole[네이티브]', value: 'Seychellois Creole1' },
      { text: 'Seychellois Creole[고급]', value: 'Seychellois Creole2' },
      { text: 'shqip[네이티브]', value: 'shqip1' },
      { text: 'shqip[고급]', value: 'shqip2' },
      { text: 'slovenčina[네이티브]', value: 'slovenčina1' },
      { text: 'slovenčina[고급]', value: 'slovenčina2' },
      { text: 'slovenščina[네이티브]', value: 'slovenščina1' },
      { text: 'slovenščina[고급]', value: 'slovenščina2' },
      { text: 'Soomaali[네이티브]', value: 'Soomaali1' },
      { text: 'Soomaali[고급]', value: 'Soomaali2' },
      { text: 'Southern Sotho[네이티브]', value: 'Southern Sotho1' },
      { text: 'Southern Sotho[고급]', value: 'Southern Sotho2' },
      { text: 'srpski (Crna Gora)[네이티브]', value: 'srpski (Crna Gora)1' },
      { text: 'srpski (Crna Gora)[고급]', value: 'srpski (Crna Gora)2' },
      { text: 'srpski (latinica)[네이티브]', value: 'srpski (latinica)1' },
      { text: 'srpski (latinica)[고급]', value: 'srpski (latinica)2' },
      { text: 'suomi[네이티브]', value: 'suomi1' },
      { text: 'suomi[고급]', value: 'suomi2' },
      { text: 'svenska[네이티브]', value: 'svenska1' },
      { text: 'svenska[고급]', value: 'svenska2' },
      { text: 'Tswana[네이티브]', value: 'Tswana1' },
      { text: 'Tswana[고급]', value: 'Tswana2' },
      { text: 'Tumbuka[네이티브]', value: 'Tumbuka1' },
      { text: 'Tumbuka[고급]', value: 'Tumbuka2' },
      { text: 'türkmen dili[네이티브]', value: 'türkmen dili1' },
      { text: 'türkmen dili[고급]', value: 'türkmen dili2' },
      { text: 'Twi[네이티브]', value: 'Twi1' },
      { text: 'Twi[고급]', value: 'Twi2' },
      { text: 'Wolof[네이티브]', value: 'Wolof1' },
      { text: 'Wolof[고급]', value: 'Wolof2' }
    ]
    private temp_lang: any = [];

    @EdittransModule.State('myinfo')
    private myinfo!: any;

    @EdittransModule.Action('get_mypage')
    private get_mypage!: () => void;

    @EdittransModule.Action('first_trans')
    private first_trans!: (data:any) => void;

    async mounted() {
      await this.get_mypage()

      window.scrollTo(0, 0)
      this.temp_lang = [...new Set(this.myinfo.user_good_lang)];
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
  @import "@/assets/scss/registtrans.scss";
</style>