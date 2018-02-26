// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from '@/router/index.js'
import golVux from '@/assets/js/gol-vux'
import './assets/font/iconfont.css'




// console.log(Vue.http,'sss')


//点击延迟
FastClick.attach(document.body)
import {cookie} from 'vux'


//生产信息
Vue.config.productionTip = false
//警告信息
Vue.config.silent = true

var Even = new Vue()
window._g = Even
window.HOST = Vue.prototype.$http.defaults.baseURL

// router.beforeEach((to, from, next) => {
// 	if(to.matched.some(r => r.meta.require)){
// 		if(cookie.get('token')){
// 			next()
// 		}else{
// 			next({ path: '/'})
// 		}
//   }else {
// 	  next()
//   }
// })







/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
