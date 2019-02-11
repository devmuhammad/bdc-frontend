import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from "axios"
import TableComponent from 'vue-table-component';
import VueGoogleCharts from 'vue-google-charts'


Vue.config.productionTip = false
Vue.use(VueGoogleCharts);
Vue.use(TableComponent);
// Creating a global Property
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  TableComponent,
  render: h => h(App)
})
