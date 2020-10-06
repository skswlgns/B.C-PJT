<template>
  <div>
    {{resume}}
    <!-- #                    브라우저                       # -->
    <div v-if="windowWidth > 375">
      <h1>유저페이지</h1>
      <div class="user-box d-flex">
        <img 
          v-if="userinfo.user_image"
          :src="'https://j3b103.p.ssafy.io/image/'+ userinfo.user_image"
          alt="profile_image" 
          class="box profile_image">
         <img 
          v-else
          src="@/assets/images/user_basic.png" 
          alt="profile_image" 
          class="box"> 
        <div class="pure-mt">
          <span class="nick-size">{{ userinfo.user_nickname }}</span>          
          <p>ㅁ 모국어 | {{ userinfo.user_lang }}</p>
          <span>ㅁ 잘하는 언어 | {{ userinfo.user_good_lang }} </span>
          <p v-if="userinfo.user_is_ts === true">
            ㅁ 신뢰도 |
            <span v-if="starrate === 1">
              <i class="fas fa-star" style="color: red"></i>
            </span>
            <span v-else-if="starrate === 2">
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
            </span>
            <span v-else-if="starrate === 3">
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
            </span>
            <span v-else-if="starrate === 4">
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
            </span>
            <span v-else-if="starrate === 5">
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
              <i class="fas fa-star" style="color: red"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="user-box">
        <br>
        <div class="d-flex">
          <h2 class="mx-4">경력</h2>
        </div>
        <v-row class="mx-2">
          <v-col v-for="(li, index) in resume" :key="index" cols="6">
            <v-card
              class="my-3"
              outlined                
            >
              <v-list-item>
                <v-list-item-content>

                  <v-list-item-title class="headline mb-1">{{ li.resume_name }}</v-list-item-title>
                  <v-list-item-subtitle class="my-2">{{li.resume_desc}}</v-list-item-subtitle>
                  
                  <VueDocPreview :value="'https://j3b103.p.ssafy.io/static/' + li.resume_file" :type="docType" v-if="li.resume_file.slice(-3,0) != 'pdf'"/>
                  <pdf :src="'https://j3b103.p.ssafy.io/static/' + li.resume_file" v-else></pdf>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="user-box">
        <br>
        <div class="d-flex">
          <h2 class="mx-4">통역내역</h2>
        </div>
        <v-row class="mx-2">
          <v-col v-for="(li, index) in candarticle" :key="index" cols="6">
            <v-card
              v-if="li.article_id.article_select === userinfo._id"
              class="my-3"
              outlined                
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">{{ li.article_id.article_title }}</v-list-item-title>
                  <v-list-item-subtitle class="my-2">{{ li.article_id.article_egg }} | {{  li.article_id.article_start_date }} -> {{ li.article_id.article_end_date }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- ########################   모바일    ##################################3-->

    <!-- <div v-else>
      <h2 class="ma-2">마이페이지</h2>
      <div class="card-container mx-auto text-center">
        <span class="pro">통역가</span>
        <img class="round" src="https://t1.daumcdn.net/cfile/tistory/991DA6445EFEB65E15" alt="user" />
        <h3>닉네임</h3>
        <h6>모국어</h6>
        <p>자기소개 있을 경우 <br> 여따 적으슈</p>
        <div class="buttons">
          <button class="primary_pure">
            <i class="far fa-envelope"></i>
          </button>
        </div>
        <div class="skills">
          <h6>통역가능언어</h6>
          <ul class="mx-2 mt-2">
            <li>스페인어</li>
            <li>영어</li>
            <li>독일어</li>
            <li>일본어</li>
            <li>짱깨어</li>
          </ul>
        </div>
      </div>
      
      <h2 class="ma-2">통역 참여내역</h2>
      <v-card
          class="mx-auto my-3"
          max-width="344"
          outlined
          v-for="(li, index) in list" :key="index"
        >
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4" v-if="li.article_complete === true">완료</div>
              <div class="overline mb-4" v-else>미완료</div>
              <v-list-item-title class="headline mb-1">{{ li.article_title }}</v-list-item-title>
              <v-list-item-subtitle class="my-2">{{ li.article_egg }} | {{ li.article_date }} | {{  li.article_from }} -> {{ li.article_to }} | 통역가 이름</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import pdf from 'vue-pdf'
import VueDocPreview from 'vue-doc-preview'

  const UserModule = namespace('UserPage');

  @Component({
    components: {
      pdf,
      VueDocPreview
    },
    mounted() {
      
    }
  })

  export default class UserPage extends Vue {
    private imgurl: string = '';
    private candarticle : any = [];
    

    @UserModule.State('userinfo')
    private userinfo!: any;

    @UserModule.State('my_article')
    private my_article!: any;

    @UserModule.State('resume')
    private resume!: any;

    @UserModule.State('starrate')
    private starrate!: Number;

    @UserModule.Action('get_userpage')
    private get_userpage!: (temp: string) => void;
    
    @UserModule.Action('get_starrate')
    private get_starrate!: (id: string) => void;

    @UserModule.Action('get_applyarticle')
    private get_applyarticle!: (id: string) => void;

    @UserModule.Action('get_resume')
    private get_resume!: (id: string) => void;

    async created() {
      await this.get_userpage(this.$route.params.id)
      this.imgurl = `https://j3b103.p.ssafy.io/image/${this.userinfo.user_image}`

      await this.get_starrate(this.$route.params.id)
      await this.get_applyarticle(this.$route.params.id)

      await this.get_resume(this.$route.params.id)

      for (let i in this.my_article) {
        if (this.my_article[i].article_id.article_select === this.userinfo._id) {
          this.candarticle.push(this.my_article[i])
        }
      }
    }

    async mounted() {

    }


}
</script>

<style lang="scss" scoped>
  // @import '@/assets/scss/userpage.scss';
  @import '@/assets/scss/mypage.scss';
</style>