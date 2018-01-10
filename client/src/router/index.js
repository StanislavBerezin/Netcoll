import Vue from 'vue'
import Router from 'vue-router'


//for lazy loads
const Intro = resolve => require(['@/components/Intro'], resolve)
const Dashboard = resolve => require(['@/components/dash/Dashboard'], resolve)


const AsyncRoute = name => resolve => ({
  component: System.import(`@/components/${name}.vue`)

  /*.then(mod => resolve(mod)),
  loading: Loading,
  delay: 0, */
  //can add if need to load something
});



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Introduction',
      component: Intro
    },
    {
      path: '/dashboard',
      name: "Dashboard",
      component: Dashboard,
      children: [{
          path: 'unit/:unitCode',
          component: AsyncRoute('dash/UnitDash'),
          name: 'Unit'
        },
        {
          path: 'findUnit/:unitCode',
          component: AsyncRoute('dash/beforeUnits/FindUnit'),
          name: 'FindUnit'
        },
        {
          path: 'purchasedArticles',
          component: AsyncRoute('dash/PurchasedArticles'),
          name: 'purchasedArticles'
        }

      ]
    },
    {
      path: '/dashboard/profile/:id',
      name: 'userProfile',
      component: AsyncRoute('profile/Profile'),
      children: [{
          path: 'bookings',
          component: AsyncRoute('profile/creator/components/Sessions'),
          name: 'bookSession'
        },
        {
          path: 'createdArticles',
          component: AsyncRoute('profile/creator/components/CreatedArticles'),
          name: 'createdArticles'
        }
      ]
    },
    {
      path: '/dashboard/makingArticle',
      name: "CreatingArticle",
      component: AsyncRoute('dash/createArticle/MakingArticle')
    },
    {
      path: '/dashboard/article/:id',
      component: AsyncRoute('dash/viewArticle/Article'),
      name: 'ViewArticle'
    }

  ]
})
