import Vue from 'vue'
import Vuex from 'vuex'
import Home from './Home'
import Login from './Login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules :{
    Home,
    Login,
  }
})
