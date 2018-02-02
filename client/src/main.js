// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import sync from 'vuex-router-sync'
import Buefy from 'buefy'
import mystyle from './mystyle.sass'
import mavonEditor from 'mavon-editor'
import VueScrollTo from 'vue-scrollto'
import Vuelidate from 'vuelidate'
import VueLocalStorage from 'vue-localstorage'
import VCalendar from 'v-calendar';


import 'v-calendar/lib/v-calendar.min.css';
import 'mavon-editor/dist/css/index.css'
import 'font-awesome/css/font-awesome.min.css'

import Auth from './plugins/Auth'
 

 
Vue.use(VueScrollTo)
Vue.use(Buefy)
Vue.use(mavonEditor)
Vue.use(Vuelidate)
Vue.use(VueLocalStorage)
Vue.use(VCalendar);
Vue.use(Auth)


Vue.config.productionTip = false

/*

Vue.http.interceptors.push(function(request, next) {
    if (request.url[0] === '/') {
        request.url = process.env.API + request.url;

        var token = Vue.auth.getToken();
        if (token)
            request.headers.set('Authorization', 'Bearer ' + token);
    }

    next(function(response) {
        if (response.status == 422) {
            response.body.errors.forEach(function (e) {
                alertify.error(e);
            });
        }
    });
});

//configure route guards
in routes
   meta: { requiresAuth: true }
   and any other to true if need to protect

Router.beforeEach(function (to, from, next)  {
    //prevent access to 'requiresGuest' routes;
    if (to.matched.some(function(record) { return record.meta.requiresGuest })
        && Vue.auth.loggedIn())
    {
        next({
            path: '/newsfeed'
        });
    }
    else if (to.matched.some(function(record) { return record.meta.requiresAuth })
        && !Vue.auth.loggedIn())
    {
        next({
            path: '/auth/login',
            query: { redirect: to.fullPath }
        });
    }
    else {
        next(); // make sure to always call next()!
    }
});



*/



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
