// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import sync from 'vuex-router-sync'
import Buefy from 'buefy'
import mystyle from './mystyle.sass'
import 'font-awesome/css/font-awesome.min.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'



Vue.use(Buefy)
Vue.use(mavonEditor)





Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
