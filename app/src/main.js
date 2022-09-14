import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import TypeNav from '@/components/TypeNav'
// import { reqCategoryList } from '@/api'
// reqCategoryList()
// 第一個參數: 全局組件的名字、第二個參數: 哪一個組件
Vue.component(TypeNav.name, TypeNav)

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
