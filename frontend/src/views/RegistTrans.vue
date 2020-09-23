
<template>
  <div>
    <div v-if="windowWidth > 375">
      diq
    </div>
    <div v-else>
      <form>  
        <div class="segment">
          <h1>통역가 신청</h1>
        </div>
        
        <label>
          <input type="text" placeholder="실명"/>
        </label>
        <label>
          <input type="password" placeholder="성별"/>
        </label>
        <button class="red" type="button"><i class="icon ion-md-lock"></i> Log in</button>
        
        <div class="segment">
          <button class="unit" type="button"><i class="icon ion-md-arrow-back"></i></button>
          <button class="unit" type="button"><i class="icon ion-md-bookmark"></i></button>
          <button class="unit" type="button"><i class="icon ion-md-settings"></i></button>
        </div>
        
        <div class="input-group">
          <label>
            <input type="text" placeholder="Email Address"/>
          </label>
          <button class="unit" type="button"><i class="icon ion-md-search"></i></button>
        </div>        
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({

  })

  export default class RegistTrans extends Vue {
  
  
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/registtrans.scss"
</style>