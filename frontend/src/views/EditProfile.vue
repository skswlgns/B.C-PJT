<template>
  <div>
    {{ myinfo }}
    {{profile_image}}
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
          <!-- <h3 class="ml-4"> 프로필 이미지 </h3> -->
          <v-col xs="6" md="11" class="mx-auto">
            <v-file-input
              :rules="rules"
              accept="image/*"
              placeholder="프로필 이미지를 등록해주세요!"
              prepend-icon="mdi-camera"
              label="프로필 이미지"
              v-model="myinfo.user_image"
            ></v-file-input>
          </v-col>
        </div>

         <div class="text-center mx-auto">
          <div class="my-2">
            <v-btn depressed x-large class="white--text" color="#5C6BC0" @click="editprofile(myinfo, profile_image)">수정하기</v-btn>
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
    data: () => ({
      rules: [
        (value: { size: number; }) => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    }),
  })
  export default class EditProfile extends Vue {
    private profile_image: string = '';

    @EditProfileModule.State('myinfo')
    private myinfo!: any;

    @EditProfileModule.Action('get_mypage')
    private get_mypage!: () => void;

    @EditProfileModule.Action('editprofile')
    private editprofile!: (profiledata:any, profile_image:string) => void;




    async mounted() {
      await this.get_mypage()

      window.scrollTo(0, 0)
    }
  }
</script>

<style lang="scss" scoped>

</style>