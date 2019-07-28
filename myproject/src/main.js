// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font/iconfont.css';

//使用element-ui
Vue.use(ElementUI)
//使用mint-ui
Vue.use(MintUI)
//使用axios
Vue.use(VueAxios, axios)
//设置请求服务器
axios.defaults.baseURL='http://127.0.0.1:4000'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
