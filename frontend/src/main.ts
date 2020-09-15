import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
<<<<<<< HEAD
=======
// import store from './vuex/store'
>>>>>>> 8361c26b317d2c24bbfa06dce77c17e73caba1f9

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
