import Vue from 'vue'
import App from './App.vue'
import store from './stores'
import router from './router'
import VueCookies from 'vue-cookies-ts'
import vuetify from './plugins/vuetify';
import VueWindowSize from 'vue-window-size';
 
Vue.config.productionTip = false
Vue.use(VueCookies)
Vue.use(VueWindowSize)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

