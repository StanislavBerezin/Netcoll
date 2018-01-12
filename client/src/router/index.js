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
        //for people viewing the session not for the creator
          path: 'bookings',
          component: AsyncRoute('profile/creator/components/Sessions'),
          name: 'bookSession'
        },
        {
          //also for the people viewing the profile
          path: 'createdArticles',
          component: AsyncRoute('profile/creator/components/CreatedArticles'),
          name: 'createdArticles'
        },

        //for the content creator
        {
          path: 'edit',
          component: AsyncRoute('profile/creator/components/Edit'),
          name: 'editUser'
        },
        //for the content creator
        {
          path: 'income',
          component: AsyncRoute('profile/creator/components/Income'),
          name: 'income'
        },
        //for the content creator
        {
          path: 'setSession',
          component: AsyncRoute('profile/creator/components/SetSessions'),
          name: 'setSession'
        },
        //for the content creator
        {
          path: 'createArticle',
          component: AsyncRoute('profile/creator/components/CreateArticle'),
          name: 'createArticle'
        },
         {
          path: 'bookedSessions',
          component: AsyncRoute('profile/creator/components/Booked'),
          name: 'booked'
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
