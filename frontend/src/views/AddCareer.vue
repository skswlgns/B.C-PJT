<template>
  <div>
    이름{{name}}
    설명{{desc}}
    파일{{file}}
    {{user_resume}}
    <div v-if="windowWidth > 375">
      <h1>경력 증명</h1>
      <div class="user-box">
        <div class="mt-15">
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">경력명</h3>
            </v-col>
            <v-col cols="9">
              <input type="text" v-model="name">
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">경력설명</h3>
            </v-col>
            <v-col cols="9">
              <textarea type="text" v-model="desc" placeholder="경력에 대해 설명해주세요"/>
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">경력증명</h3>
            </v-col>
            <v-col cols="9">
              <v-file-input
                :rules="rules"
                placeholder="경력증명을 위한 파일을 업로드 해주세요."
                label="경령증명파일"
                v-model="file"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col class="text-center">
              <v-btn rounded color="warning" dark small @click="add_resume(name, desc, file)">추가하기</v-btn>
            </v-col>
          </v-row>          
          <v-row v-for="(resume, index) in user_resume" :key="index" class="text-center">
            <v-col cols="3">
              <h3 class="ml-10 mt-3">미리보기</h3>
            </v-col>
            <v-col cols="9" >
              <p>{{resume.resume_name }}</p>
              <p>{{resume.resume_desc }}</p>
              <p>{{resume.resume_file }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="9">
              <button class="red my-3" type="button" @click="addcareer(user_resume)">신청하기</button>
            </v-col>
          </v-row>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';

  const AddCareerModule = namespace('AddCareer');
  @Component({
    data: () => ({
      rules: [
        (value: { size: number; }) => !value || value.size < 20000000 || 'Avatar size should be less than 20 MB!',
      ],
    }),
  })
  export default class AddCareer extends Vue {
    private profile_image: string = '';
    private name: string = '';
    private desc: string = '';
    private file: any = {};
    private user_resume: any = [

    ]

    @AddCareerModule.State('myinfo')
    private myinfo!: any;

    @AddCareerModule.Action('get_mypage')
    private get_mypage!: () => void;

    @AddCareerModule.Action('addcareer')
    private addcareer!: (user_resume:any) => void;


    add_resume(name:string, desc:string, file:any) {
      this.user_resume.push({resume_name: name, resume_desc: desc, resume_file:file})
      this.name = '';
      this.desc = '';
      this.file = '';
    }

    async mounted() {
      await this.get_mypage()

      window.scrollTo(0, 0)
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/registtrans.scss";
</style>