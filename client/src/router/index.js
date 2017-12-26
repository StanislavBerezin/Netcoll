import Vue from 'vue'
import Router from 'vue-router'


//for lazy loads
const Intro = resolve => require(['@/components/Intro'], resolve)
const Check = resolve => require(['@/components/Check'], resolve)



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Component1',
      component:  Intro
    },
    {
      path: '/home',
      name: 'Check',
      component: Check
    }
  ] 
})
