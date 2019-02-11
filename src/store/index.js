import Vue from 'vue'
import Vuex from 'vuex'
import Usermanager from './modules/usermanager'
import Currency from './modules/currency'
import Purchases from './modules/purchase'
import XchangeRoute from './modules/xchangeroute'
import Xchangerate from './modules/xchangerate'
import Sales from './modules/sales'
import Auth from './modules/authUser'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      Currency,
      Purchases,
      XchangeRoute,
      Xchangerate,
      Usermanager,
      Sales,
      Auth
      
  }
});