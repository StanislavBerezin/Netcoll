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
          //WHEN REGULAR USERS ENTER THE CREATOR PAGE, THESE 2 are
          //THE COMPONENTS TO BE DISPLAYED
          path: 'bookings',
          component: AsyncRoute('profile/creator/components/ViewCreator/Sessions'),
          name: 'bookSession'
        },
        {
          path: 'createdArticles',
          component: AsyncRoute('profile/creator/components/ViewCreator/CreatedArticles'),
          name: 'createdArticles'
        },

        //THESE 4 when you are the content creator and viewing your own page
        {
          path: 'edit',
          component: AsyncRoute('profile/creator/components/MyCreator/Edit'),
          name: 'editUser'
        },
        //for the content creator
        {
          path: 'income',
          component: AsyncRoute('profile/creator/components/MyCreator/Income'),
          name: 'income'
        },
        //for the content creator
        {
          path: 'setSession',
          component: AsyncRoute('profile/creator/components/MyCreator/SetSessions'),
          name: 'setSession'
        },
        //for the content creator
        {
          path: 'createArticle',
          component: AsyncRoute('profile/creator/components/MyCreator/CreateArticle'),
          name: 'createArticle'
        }

      ]
    },

    {
      path: '/dashboard/article/:id',
      component: AsyncRoute('dash/viewArticle/Article'),
      name: 'ViewArticle'
    }

  ]
})
