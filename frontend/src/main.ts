import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import VueCookies from 'vue-cookies-ts'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueCookies)
    

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

