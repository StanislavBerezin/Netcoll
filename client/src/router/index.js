import Vue from 'vue'
import Router from 'vue-router'


//for lazy loads
const Component1 = resolve => require(['@/components/Component1'], resolve)
const Check = resolve => require(['@/components/Check'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Component1',
      component:  Component1
    },
    {
      path: '/home',
      name: 'Check',
      component: Check
    }
  ] 
})
