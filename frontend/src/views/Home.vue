<template>
  <div id="home">
    <!-- {{ article }} -->
    <!-- WEB -->
    <div id="WEB" v-if="windowWidth > 380" >
      <!-- <h1 class="trans_h1">통역 리스트</h1> -->
      <div class="selection">
        <div class="selection_lang">
          <select v-model="searchData.lang_1" name="searchData.lang_1" id="searchData.lang_1" >
        <option>{{ searchData.lang_1 }}</option>
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
          <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon>
          <select v-model="searchData.lang_2" name="searchData.lang_2" id="searchData.lang_2" >
            <option>{{ searchData.lang_2 }}</option>
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
          <template v-slot:activator="{ on, attrs }" >
            <input v-model="searchData.date_picker" v-bind="attrs" v-on="on" type="text" class="selection_date" placeholder="시작 날짜" >
          </template>
          <v-list>
            <v-date-picker v-model="searchData.date_picker" color="green lighten-1" ></v-date-picker>
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
            @click:minute="$refs.menu.save(searchData.time_picker)"
          ></v-time-picker>
        </v-menu>
        <input type="text" class="selection_egg" v-model.number="searchData.egg" oninput="this.value = this.value.replace(/[^0-9]/g, '');">
      </div>

      <v-row class="home_main">
        <v-col lg="8">
          <div class="cardList">
            <!-- <infinite-loading @infinite="infiniteHandler" spinner="waveDots"></infinite-loading> -->
            <li v-for="(list, index) in searching" :key="index">
                <div class="card"> 
                  <div class="profile">
                    <img src="@/assets/images/지창욱.jpg" alt="창욱" class="profile_image" @click="goUserpage(list.user_id._id)">
                    <h6 class="center" @click="goUserpage(list.user_id._id)">{{ list.user_id.user_nickname }}</h6>
                    <v-spacer></v-spacer>
                    <div class="point"> <span>{{list.article_egg}} </span><v-icon class="egg_icon">mdi-egg-easter</v-icon></div>
                  </div> 
                  <div @click="goDetailpage(list._id)" class="router"> 
                  <h2 class="card_content">{{ list.article_title }}</h2></div>
                  <div class="">
                    <p class="inline">{{list.article_from}} <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon> {{list.article_to}}</p> | <p class="inline">{{list.article_start_date}} {{list.article_start_time}}</p> ~ <p class="inline"> {{list.article_end_date}} {{list.article_end_time}} </p>
                  </div>
                </div> 
            </li>
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
        <option>{{ searchData.lang_1 }}</option>
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
          <v-icon class="swap_icon">mdi-swap-horizontal-bold</v-icon>
          <select v-model="searchData.lang_2" name="serachData.lang_2" id="serachData.lang_2">
            <option>{{ searchData.lang_2 }}</option>
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