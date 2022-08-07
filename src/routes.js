import Main from './views/Main/index.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import store from '@/store/index'
/** @type {import('vue-router').RouterOptions['routes']} */
let token = store.state.user.token
const routes = [
  {
    path: '/',
    name: 'Main',
    meta: { title: 'Main' },
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: 'Home' },
        component: () => import('./views/Home.vue')
      },
      {
        path: '/sport',
        name: 'Sport',
        meta: { title: 'Sport' },
        component: () => import('./views/Sport.vue')
      },
      {
        path: '/lottery',
        name: 'Lottery',
        meta: { title: 'Lottery' },
        component: () => import('./views/Lottery.vue')
      },
      {
        path: '/realbet',
        name: 'RealBet',
        meta: { title: 'RealBet' },
        component: () => import('./views/RealBet.vue')
      },
      // {
      //   path: '/app',
      //   name: 'Application',
      //   meta: { title: 'Application' },
      //   component: () => import('./views/Application.vue')
      // },
      {
        path: '/userCenter',
        name: 'UserCenter',
        meta: { title: 'UserCenter', requireAuth: true },
        component: () => import('./views/UserCenter/index.vue'),
        redirect: '/wallet',


        children: [
          {
            path: '/wallet',
            name: 'Wallet',
            meta: { title: 'Wallet' },
            component: () => import('./views/UserCenter/Wallet.vue')
          },
          {
            path: '/transRecord',
            name: 'TransferRecord',
            meta: { title: 'TransferRecord' },
            component: () => import('./views/UserCenter/transRecord.vue')
          },
          {
            path: '/bindCoinAddress',
            name: 'bindCoinAddress',
            meta: { title: 'bindCoinAddress' },
            component: () => import('./views/UserCenter/bindCoinAdd.vue')
          },
          {
            path: '/RequstWithdraw',
            name: 'RequstWithdraw',
            meta: { title: 'RequstWithdraw' },
            component: () => import('./views/UserCenter/RequstWithdraw.vue')
          },
          // {
          //   path: '/betRecord',
          //   name: 'betRecord',
          //   meta: { title: 'betRecord' },
          //   component: () => import('./views/UserCenter/betRecord.vue')
          // },
          // {
          //   path: '/mail',
          //   name: 'Mail',
          //   meta: { title: 'Mail' },
          //   component: () => import('./views/UserCenter/Mail.vue')
          // },
          // {
          //   path: '/myVip',
          //   name: 'MyVip',
          //   meta: { title: 'MyVip' },
          //   component: () => import('./views/UserCenter/MyVip.vue')
          // },
          // {
          //   path: '/suggestion',
          //   name: 'Suggestion',
          //   meta: { title: 'Suggestion' },
          //   component: () => import('./views/UserCenter/Suggestion.vue')
          // },
          // {
          //   path: '/phonePwd',
          //   name: 'PhonePwd',
          //   meta: { title: 'PhonePwd' },
          //   component: () => import('./views/UserCenter/PhonePwd.vue')
          // },
          // {
          //   path: '/banks',
          //   name: 'Banks',
          //   meta: { title: 'Banks' },
          //   component: () => import('./views/UserCenter/Banks.vue')
          // },
          // {
          //   path: '/depost',
          //   name: 'Deposit',
          //   meta: { title: 'Deposit' },
          //   component: () => import('./views/UserCenter/Deposit.vue')
          // },
          // {
          //   path: '/transfer',
          //   name: 'Transfer',
          //   meta: { title: 'Transfer' },
          //   component: () => import('./views/UserCenter/Transfer.vue')
          // },
          // {
          //   path: '/withdrawals',
          //   name: 'Withdrawals',
          //   meta: { title: 'Withdrawals' },
          //   component: () => import('./views/UserCenter/Withdrawals.vue')
          // },
        ],

      },

      // {
      //   path: '/m/muserCenter',
      //   name: 'mUserCenter',
      //   meta: { title: 'mUserCenter' },
      //   component: () => import('./views/mUserCenter/index.vue'),
      //   redirect: '/m/m_wallet',
      //   children: [

      //   ]
      // }
    ]
  },
  // {
  //   path: '/about',
  //   meta: { title: 'About' },
  //   component: About,
  // },
  // for mobile only
  {
    path: '/service',
    meta: { title: 'Service', requireAuth:true },
    component: () => import('./views/CustomerService.vue')
  },
  {
    path: '/sportView',
    meta: { title: 'sportView', requireAuth:true },
    component: () => import('./views/sportView.vue')
  },
  {
    path: '/register',
    meta: { title: 'Register', requiresVisitor: true },
    component: () => import('./views/Register.vue')
  },
  {
    path: '/login',
    meta: { title: 'Login', requiresVisitor: true },
    component: () => import('./views/Login.vue')
  },
  {
    path: '/m/m_wallet',
    name: 'mWallet',
    meta: { title: 'mWallet',requireAuth:true },
    component: () => import('./views/mUserCenter/m_Wallet.vue')
  },
  {
    path: '/m/m_transRecord',
    name: 'mTransRecord',
    meta: { title: 'mTransRecord',requireAuth:true  },
    component: () => import('./views/mUserCenter/m_TransRecord.vue')
  },
  {
    path: '/m/m_bindCoinAddress',
    name: 'mbindCoinAddress',
    meta: { title: 'mbindCoinAddress',requireAuth:true },
    component: () => import('./views/mUserCenter/m_bindCoinAdd.vue')
  },
  {
    path: '/m/m_RequstWithdraw',
    name: 'mRequstWithdraw',
    meta: { title: 'mRequstRecharge',requireAuth:true },
    component: () => import('./views/mUserCenter/m_RequstWithdraw.vue')
  },
  // {
  //   path: '/m/m_betRecord',
  //   name: 'mbetRecord',
  //   meta: { title: 'mbetRecord',requireAuth:true  },
  //   component: () => import('./views/mUserCenter/m_betRecord.vue')
  // },
  // {
  //   path: '/m/m_mail',
  //   name: 'mMail',
  //   meta: { title: 'mMail' },
  //   component: () => import('./views/mUserCenter/m_Mail.vue')
  // },
  // {
  //   path: '/m/m_myVip',
  //   name: 'mMyVip',
  //   meta: { title: 'mMyVip' },
  //   component: () => import('./views/mUserCenter/m_MyVip.vue')
  // },
  // {
  //   path: '/m/m_suggestion',
  //   name: 'mSuggestion',
  //   meta: { title: 'mSuggestion' },
  //   component: () => import('./views/mUserCenter/m_Suggestion.vue')
  // },
  // {
  //   path: '/m/m_phonePwd',
  //   name: 'mPhonePwd',
  //   meta: { title: 'mPhonePwd' },
  //   component: () => import('./views/mUserCenter/m_PhonePwd.vue')
  // },
  // {
  //   path: '/m/m_depost',
  //   name: 'mDeposit',
  //   meta: { title: 'mDeposit' },
  //   component: () => import('./views/mUserCenter/m_Deposit.vue')
  // },
  // {
  //   path: '/m/m_transfer',
  //   name: 'mTransfer',
  //   meta: { title: 'mTransfer' },
  //   component: () => import('./views/mUserCenter/m_Transfer.vue')
  // },
  // {
  //   path: '/m/m_withdrawals',
  //   name: 'mWithdrawals',
  //   meta: { title: 'mWithdrawals' },
  //   component: () => import('./views/mUserCenter/m_Withdrawals.vue')
  // },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresVisitor)) {
//     const user = store.state.user.token
//     if (user) {
//       next('/')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }

// })

router.beforeEach((to, from, next) => {
  const user = store.state.user.token
  // if (to.path === "/" && !user) {
  //   return next();
  // }
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   if(user === null || user === undefined){
  //     next("/login");
  //   }else{
  //     next()
  //   }
  // } else if(to.matched.some(record => record.meta.requiresVisitor)) {
  //   if(user){
  //     next()
  //   }else{
  //     next()
  //   }
  // }else{
  //   next()
  // }

  // if (!user) {
  //   if (to.meta.requireAuth) {
  //     next({ path: '/' })
  //   } else {
  //     next()
  //   }
  // }
  // else {
  //   next()
  // }
  //  if (user) {
  //   if (to.matched.some(record => record.meta.requiresVisitor)) {
  //     next({ path: '/' })
  //   } else {
  //     next({ path: '/login' })
  //   }
  // } else{
  //   next()
  // }
  //const user = store.state.user.token
  if (to.matched.some(record => record.meta.requiresVisitor) 
  ) {
    if (user) {
      next('/')
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.requireAuth)) {
    if (!user) {
      next('/login')
    } else {
      next()
    }
  }else{
    next()
  }
 // next()

});

// if (to.matched.some(record => record.meta.requiresVisitor)) {
//   const user = store.state.user.token
//   if (user) {
//     next({ name: 'home' })
//   } else {
//     next()
//   }
// } else {
//   next()
// }
export default router