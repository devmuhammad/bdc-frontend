import Vue from 'vue'
import Router from 'vue-router'
import Purchase from '@/components/views/purchase/purchase'
import Selling from '@/components/views/selling/selling'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'purchase',
      component: Purchase
    },
    {
      path: '/selling',
      name: 'selling',
      component: Selling
    }
  ]
})
