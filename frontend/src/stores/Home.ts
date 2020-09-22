import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({namespaced: true})
export default class Home extends VuexModule {
  
  // states
  public count: number = 0;

  // getters
  get doubledCount() {
    return this.count * 2;
  }

  // mutations
  @Mutation
  public increment(delta: number) {
    console.log(`increment mutation: ${delta}`);
    this.count += delta;
    console.log(this.count);
  }

  // actions
  @Action({ commit: 'increment' })
  public incr(delta: number) {
    console.log(`increment action: ${delta}`);
    delta ++;
    return delta;
  }

}