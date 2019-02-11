import Vue from 'vue'
import Router from 'vue-router'
import Purchase from '@/components/views/purchase/purchase'
import Selling from '@/components/views/selling/selling'
import Xchange from '@/components/views/xchange-rate/xchange-rate'
import Dashboard from '@/components/views/dashboard/dashboard'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/purchase',
      name: 'purchase',
      component: Purchase
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/selling',
      name: 'selling',
      component: Selling
    },
    {
      path: '/xchange',
      name: 'xchange-rate',
      component: Xchange
    }
  ]
})
