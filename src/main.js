// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
// import axios from 'axios'
// Vue.prototype.$http=axios
import MySeverHttp from '@/plugins/http.js'


// console.log(MySeverHttp);

Vue.use(ElementUI)
Vue.use(MySeverHttp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
