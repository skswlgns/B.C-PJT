<template>
  <div class="home">
    <p>{{count}} * 2 = {{doubledCount}}</p>
    <button @click="incr(1)">incr</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const CountStoreModule = namespace('Home');

@Component
export default class Home extends Vue {

  @CountStoreModule.State('count')
  private count!: number;

  @CountStoreModule.Getter('doubledCount')
  private doubledCount!: number;

  @CountStoreModule.Action('incr')
  private incr!: (delta: number) => void;

}
</script>