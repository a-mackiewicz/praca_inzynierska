import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { SVG } from "@svgdotjs/svg.js";
import VueSessionStorage from 'vue-sessionstorage'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.use(VueSessionStorage)

Vue.$cookies.config('7d')
// set global cookie
Vue.$cookies.set('theme','default');
Vue.$cookies.set('hover-time','1s');
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(SVG);

Vue.config.productionTip = false

new Vue({
  router, SVG,
  render: h => h(App)
}).$mount('#app')
