<template>
  <div id="home">
    <!-- WEB -->
    <div id="WEB" v-if="windowWidth > 380" >
      <!-- <h1 class="trans_h1">통역 리스트</h1> -->
      <div class="selection">
        <div class="selection_lang">
          <select v-model="searchData.lang_1" name="searchData.lang_1" id="searchData.lang_1">
            <option value="" disabled>통역받을 언어</option>
            <option v-for="(option, index) in options" :value="option.value" :key="index">
              {{ option.text }}
            </option>
          </select>
          <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon>
          <select v-model="searchData.lang_2" name="searchData.lang_2" id="searchData.lang_2" >
            <option value="" disabled>통역할 언어</option>
            <option v-for="(option, index) in options" :value="option.value" :key="index">
              {{ option.text }}
            </option>
          </select>
        </div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }" >
            <input v-model="searchData.date_picker" v-bind="attrs" v-on="on" type="text" class="selection_date" placeholder="시작 날짜" >
          </template>
          <v-list>
            <v-date-picker v-model="searchData.date_picker" color="green lighten-1" ></v-date-picker>
          </v-list>
        </v-menu>
        <input type="text" class="selection_egg" v-model.number="searchData.egg" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
      </div>

      <v-row class="home_main">
        <v-col lg="8" class="px-0">
          <div class="cardList">
            <ul>
              <li v-for="(list, index) in searching" :key="index">
                  <div class="card router" @click="goDetailpage(list._id)"> 
                    <div class="profile">
                      <img :src="'https://j3b103.p.ssafy.io/image/'+ list.user_id.user_image" alt="프로필이미지" class="profile_image" v-if="list.user_id.user_image">
                      <img src="@/assets/images/user_basic.png" alt="프로필 이미지" v-else class="profile_image">
                      <h6 class="center">{{ list.user_id.user_nickname }}</h6>
                      <v-spacer></v-spacer>
                      <div class="point"> <span>{{list.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                    </div> 
                    <div> 
                    <h3 class="card_content">{{ list.article_title }}</h3></div>
                    <div class="">
                      <p class="inline">{{list.article_from}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{list.article_to}}</p> | <p class="inline">{{list.article_start_date}} {{list.article_start_time}}</p> ~ <p class="inline"> {{list.article_end_date}} {{list.article_end_time}} </p>
                    </div>
                  </div> 
              </li>
            </ul>
          </div>
          <div v-if="articleData.length === 0">
            <img src="../assets/images/텅.png" class="searchImg">
          </div>
        </v-col>

        <v-col lg="4">
          <div class="applyTrans">
            <div class="btns">
              <router-link to="/regist" class="router"><v-btn class="btn_blue">통역 요청</v-btn></router-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Mobile -->
    <div id="Mobile" v-if="windowWidth <= 380">
      <h3 class="trans_h3">통역 신청 리스트</h3>
      <div class="selection">
        <div class="selection_lang">
          <select v-model="searchData.lang_1" name="serachData.lang_1" id="serachData.lang_1">
            <option value="" disabled>통역받을 언어</option>
            <option v-for="(option, index) in options" :value="option.value" :key="index" style="font-family: Noto Sans">
              {{ option.text }}
            </option>
          </select>
          <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon>
          <select v-model="searchData.lang_2" name="serachData.lang_2" id="serachData.lang_2">
            <option value="" disabled>통역할 언어</option>
            <option v-for="(option, index) in options" :value="option.value" :key="index" style="font-family: Noto Sans">
              {{ option.text }}
            </option>
          </select>
        </div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <input v-model="searchData.date_picker" v-bind="attrs" v-on="on" type="text" class="selection_date" placeholder="통역 날짜">
          </template>
          <v-list>
            <v-date-picker v-model="searchData.date_picker" color="green lighten-1"></v-date-picker>
          </v-list>
        </v-menu>
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <input
              v-model="searchData.time_picker"
              class="selection_time"
              placeholder="통역 시간"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="searchData.time_picker"
            full-width
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>
      </div>

      <div class="applyTrans">
        <div class="btns">
          <v-btn class="btn_blue">긴급 통역 요청</v-btn>
          <v-btn class="btn">일반 통역 요청</v-btn>
        </div>
      </div>

      <div class="cardList" @click="goDetail()">
        <ul>
          <li v-for="(list, index) in searching" :key="index">
            <div class="card"> 
              <div class="profile">
                <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image">
                <h6 class="center">{{ list.user_id.user_nickname }}</h6>
                <v-spacer></v-spacer>
                <div class="point"> <span>{{list.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
              </div> 
              <h4 class="card_content">{{ list.article_title.slice(0, 20)}}...</h4>
              <p class="inline">{{list.article_from}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{list.article_to}}</p>
              <br>
              <p class="inline">{{list.article_date}} {{list.article_start}}</p> ~ <p class="inline"> {{list.article_enddate}} {{list.article_end}} </p>
            </div> 
          </li>
        </ul>
        <div v-if="articleData.length === 0">
          <img src="../assets/images/텅.png" class="searchImg" style="width: 100%">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const HomeModule = namespace('Home');

  @Component({
    components: {
    }
  })
  export default class Home extends Vue {

    private articleData: any = []
    private imgurl: string = ''

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

    private searchData : any = {
      lang_1 : "",
      lang_2 : "",
      date_picker : "",
      time_picker : "",
      egg: 0,
    }
    private menu2 = false
    private modal2 = false

    // methods
    goDetail(){
      this.$router.push('/transdetail').catch(()=>{})
    }
    // vuex 영역
    @HomeModule.State('article')
    private article!: any;

    @HomeModule.State('limit')
    private limit!: number;

    @HomeModule.Mutation('goUserpage')
    private goUserpage !: any;

    @HomeModule.Mutation('goDetailpage')
    private goDetailpage !: any;

    @HomeModule.Action('get_article')
    private get_article!: () => void;

    async created()  {
      
      await this.get_article()
      this.articleData = this.article

    }
    private get searching() {
      if (this.searchData.lang_1 || this.searchData.lang_2 || this.searchData.date_picker || this.searchData.time_picker || this.searchData.egg) {
        this.articleData = this.article.filter((from: any) => from.article_from.includes(this.searchData.lang_1))
        this.articleData = this.articleData.filter((to: any) => to.article_to.includes(this.searchData.lang_2))
        this.articleData = this.articleData.filter((date : any) => date.article_start_date.includes(this.searchData.date_picker)) 
        this.articleData = this.articleData.filter((time : any) => time.article_start_time >= this.searchData.time_picker)
        this.articleData = this.articleData.filter((egg : any) => egg.article_egg >= this.searchData.egg)
      }
      return this.articleData
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/home.scss';
</style>