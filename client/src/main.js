// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import sync from 'vuex-router-sync'
const Buefy = require('buefy')
import mystyle from './mystyle.sass'




Vue.use(Buefy.default)


Vue.component('star-rating', {
	props:{
  	stars:{
    	type:Number,
      required:true
    },
    showGrey:{
    	type:Boolean
    }
  },
	template:`
  <div>
  	<template v-if="showGrey">
    	<b-icon
        v-for="n in 5"
        icon="star"
        :type="n <= stars ? 'is-warning' : 'is-grey'"
        :key="n"
      />
    </template>
    <template v-else>
    	<b-icon
      	v-for="n in stars"
        icon="star"
        type="is-warning"
      />
    </template>
  </div>`
})



Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
