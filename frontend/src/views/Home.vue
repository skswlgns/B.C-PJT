<template>
  <div id="home">
    <h1>통역 신청 리스트</h1>
    <div class="selection">
      <div class="selection_lang">
        <select v-model="transData.lang_1" name="lang_1" id="lang_1">
      <option>{{ transData.lang_1 }}</option>
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
        <select v-model="transData.lang_2" name="lang_2" id="lang_2">
          <option>{{ transData.lang_2 }}</option>
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

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <input v-model="date_picker" v-bind="attrs" v-on="on" type="text" class="selection_date" placeholder="통역 날짜">
        </template>
        <v-list>
          <v-date-picker v-model="date_picker" color="green lighten-1"></v-date-picker>
        </v-list>
      </v-menu>

      <v-col cols="11" sm="5">
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
        class="selection_time"
      >
        <template v-slot:activator="{ on, attrs }">
          <input
            v-model="time_picker"
            placeholder="통역 시간"
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time_picker"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // import { namespace } from 'vuex-class';
  // const CountStoreModule = namespace('Home');

  @Component
  export default class Home extends Vue {
    // @CountStoreModule.State('count')
    // private count!: number;

    // @CountStoreModule.Getter('doubledCount')
    // private doubledCount!: number;

    // @CountStoreModule.Action('incr')
    // private incr!: (delta: number) => void;

    private transData : any = {
      lang_1 : "통역 할 언어",
      lang_2 : "통역 될 언어",
      date : "",
      time : "",
    }

    private date_picker = ""
    private time_picker = ""
    private menu2 = false
    private modal2 = false
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/home.scss';
</style>