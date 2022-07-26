import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// console.log("@@@VueRouter", VueRouter)
// 先把VueRouter原型對象的push，先保存一份

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// console.log("@@@originPush", originPush)

// 重寫push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
  // alert(123)
  // console.log("@@@this", this)
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }
    },
    {
      path: '/register',
      component: Register,

    },
    {
      path: '/search/:keyword?',
      component: Search,
      meta: { show: true },
      name: 'search',
      // 面試題4: 路由組件能不能傳遞props
      // 布爾值寫法 params
      // props: true,
      // 對象寫法
      // props: { a: 1, b: 2 }
      // 函數寫法: 可以params參數、query參數，通過props傳遞給路由組件
      props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
    },
    {
      path: '*',
      redirect: "/home"
    }
  ]
})