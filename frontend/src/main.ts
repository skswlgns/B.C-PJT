import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import VueCookies from 'vue-cookies-ts'

// export { CookiesOption, Cookies } from 'cookies-ts';

Vue.config.productionTip = false
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// Vue.cookies.config({expires: '7d'})
// export default {
//   install(_Vue: typeof Vue) {
//     const vueCookies = new cookies();
//     _Vue.prototype.$cookies = vueCookies;
//     (_Vue as any).cookies = vueCookies;
//   }
// };