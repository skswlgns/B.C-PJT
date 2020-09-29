<template>
  <div class="frame">
    <div class="frame2">
      <div class="input"> 
        <h1 class="lang_form">언어 설정</h1>
        <div class="lang_input">
          <div class="select_lang">
            <select v-model="transData.lang_1" name="lang_1" class="lang_1">
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
            <v-icon class="swap_icon" @click="change">mdi-swap-horizontal-bold</v-icon>
            <select v-model="transData.lang_2" name="lang_2" class="lang_2">
              <option>통역 될 언어</option>
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
        </div>
        <h1>포인트</h1>
        <div class='point_fr'>
          <select v-model="transData.point" name="point" class="point">
            <option>50000</option>
            <option>100000</option>
            <option>150000</option>
            <option>200000</option>
            <option>250000</option>
            <option>300000</option>
          </select>
          <input type="text" class="point_input" v-model="transData.point">
          <div class='space'></div>
          <div class="btn_fr">
            <div class="btn">
              <span class="flip-front" @click="pointInput">직접</span>
              <span class="flip-back" @click="pointInput">입력</span>
            </div>
          </div>
        </div>
        <h1>날짜/시간 선택</h1>
        <div class="date_fr">
          <div class="start_date">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="transData.start_date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="transData.start_date"
                  label="통역 시작일"
                  prepend-icon=""
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="transData.start_date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(transData.start_date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </div>
          <div class="start_time">
            <v-menu
              ref="menu2"
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="transData.start_time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="transData.start_time"
                  label="통역 시작 시간"
                  prepend-icon=""
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu2"
                v-model="transData.start_time"
                full-width
                @click:minute="$refs.menu2.save(transData.start_time)"
              ></v-time-picker>
            </v-menu>
          </div>
          <div class="end_date">
            <v-menu
              ref="menu3"
              v-model="menu3"
              :close-on-content-click="false"
              :return-value.sync="transData.end_date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="transData.end_date"
                  label="통역 종료일"
                  prepend-icon=""
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="transData.end_date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu3 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu3.save(transData.end_date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </div>
          <div class="end_time">
            <v-menu
              ref="menu4"
              v-model="menu4"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="transData.end_time"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="transData.end_time"
                  label="통역 종료 시간"
                  prepend-icon=""
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="menu4"
                v-model="transData.end_time"
                full-width
                @click:minute="$refs.menu4.save(transData.end_time)"
              ></v-time-picker>
            </v-menu>
          </div>
        </div>
        <h1>제목</h1>
        <div class="title_fr">
          <input type="text" class="text" v-model="transData.title">
        </div>
        <h1>내용</h1>
        <div class="content_fr">
          <textarea class="content" v-model="transData.content"></textarea>
        </div>
        <h1>요청사항</h1>
        <div class="request_fr">
          <div class="request_stage">
            <div class="first_request" v-for="i in transData.request" :key='i.id'>
              <input type="text" class="request" v-model="i.content">
              <div class="plus_btn" v-if="i.id === 0">
                <button class="icon-btn add-btn" @click="addText">
                  <div class="add-icon"></div>
                  <div class="btn-txt">추가</div>
                </button>
                <button class="icon-btn add-btn" @click="deleteText">  
                  <div class="btn-txt">삭제</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- <h1>파일 추가</h1>
        <div class="file_input">
          <v-file-input 
            accept="*"
            label="File input"
          ></v-file-input>
        </div> -->
      </div>
      <div class='space'></div>
      <div class="regist">
        <div class="memo">
          <h2>요청 정보</h2>
          <h3>언어</h3>
          <div class="language">
            <div>{{transData.lang_1}}</div>
            <div> -> </div>
            <div>{{transData.lang_2}}</div>
          </div>
          <h3>포인트</h3>
          <div>{{ transData.point }} </div>
          <h3>날짜/시간</h3>
          <div>
            {{transData.start_date}}  {{transData.start_time}} ~ {{transData.end_date}}  {{transData.end_time}}
          </div>
          <h3>제목</h3>   
          <div>{{transData.title}}</div>
          <h3>내용</h3>   
          <div>{{transData.content}}</div>
          <h3>요청사항</h3>   
          <div v-for="i in transData.request" :key="i.id">
              {{i.content}}
          </div>
          <v-btn
            class="request_btn"
            color="primary"
          >
            요청하기
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    }
  })
  export default class TranslateRegist extends Vue {
    private transData : any = {
      lang_1 : "통역 할 언어",
      lang_2 : "통역 될 언어",
      point: 0,
      start_date: new Date().toISOString().substr(0, 10),
      start_time: '00:00',
      end_date: new Date().toISOString().substr(0, 10),
      end_time: '00:00',
      title : '',
      content : '',
      request : [{id: 0, content:''}],
      // file:''
    }
    private menu : boolean = false;
    private menu2 : boolean = false;
    private menu3 : boolean = false;
    private menu4 : boolean = false;
    change() {
      if (this.transData.lang_1 !== "통역 할 언어" && this.transData.lang_2 !== "통역 될 언어") {
        let temp : any;
        temp = this.transData.lang_1;
        this.transData.lang_1 = this.transData.lang_2;
        this.transData.lang_2 = temp;
      }
    }
    pointInput() {
      const pointElem = document.querySelector('.point') as HTMLElement;
      pointElem.classList.remove('point');
      pointElem.style.width = '0';
      const inputElem = document.querySelector('.point_input') as HTMLElement;
      inputElem.classList.add('point');
    }
    addText() {
      let count: number =  this.transData.request.length;
      this.transData.request.push({id: count + 1, value: ''});
    }
    deleteText() {
      if (this.transData.request.length > 1) {
        this.transData.request.pop(); 
      }
    }

    async mounted() {
      (function() {
        let maxScrollValue : number;
        const registElem = document.querySelector('.memo') as HTMLElement;
        
        function resizeHandler() {
          maxScrollValue = document.body.offsetHeight;
        }

        function move() {
          const scrollPer = scrollY / maxScrollValue;
          if (window.innerWidth > 375) {
            if (scrollPer < 0.3) {
              registElem.animate([
              {
                transform: 'translateY(0)'
              }], {duration: 1500, delay: 500, fill: 'forwards', easing: 'ease-in'});
            }
            if (scrollPer > 0.6) {
              registElem.animate([
              {
                transform: `translateY(100%)`
              }], {duration: 1500, fill: 'forwards'});
            }
            if (scrollPer > 0.9) {
              let yMove = scrollPer * 170
              registElem.animate([
              {
                transform: 'translateY(' + yMove + '%)'
              }], {duration: 1500, fill: 'forwards'});
            }
          }

        }
        window.addEventListener('scroll', move);

        window.addEventListener('resize', resizeHandler);

        resizeHandler();
      })();
    }
    
}

</script>

<style lang="scss">
  @import '@/assets/scss/reset.scss';
  @import '@/assets/scss/translateregist.scss';
</style>