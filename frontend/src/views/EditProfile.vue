<template>
  <div>
    <v-card  class="mb-2">
      <v-container>
        <h2 class="text-center my-3"> 프로필 수정 </h2>
        <div>
          <v-col xs="6" md="11" class="mx-auto">
            <v-text-field 
              v-model="myinfo.user_nickname" label="닉네임" outlined id="nickname"></v-text-field>
          </v-col>
        </div>

        <div>
          <v-col xs="6" md="11" class="mx-auto">
            <v-text-field 
              v-model="myinfo.user_phone" label="휴대폰 번호" outlined id="phonenumber"></v-text-field>
          </v-col>
        </div>

        <div>
          <h3 class="ml-4"> 프로필 이미지 </h3>
          <v-col xs="6" md="11" class="mx-auto">
            <v-file-input
              label="프로필 이미지를 등록해주세요."
              filled
              prepend-icon="mdi-camera"
              accept = "image/*"
              v-model="myinfo.user_image"
            ></v-file-input>
          </v-col>
        </div>

         <div class="text-center mx-auto">
          <div class="my-2">
            <v-btn depressed x-large class="white--text" color="#5C6BC0">수정하기</v-btn>
          </div>
        </div>

      </v-container>
    </v-card>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const EditProfileModule = namespace('EditProfile');
  @Component({
    mounted() {
      
    }
  })
  export default class EditProfile extends Vue {


    @EditProfileModule.State('myinfo')
    private myinfo!: any;

    @EditProfileModule.Action('get_mypage')
    private get_mypage!: () => void;




    async mounted() {
      this.get_mypage()

      window.scrollTo(0, 0)
    }
  }
</script>

<style lang="scss" scoped>

</style>