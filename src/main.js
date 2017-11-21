// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Resource from 'vue-resource'

import './assets/css/reset.css'
import './assets/js/rem'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
Vue.use(Resource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Resource,
  template: '<App/>',
  components: { App }
})
