import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'

Vue.use(Vuex)

// const state = {
//   count: 1,
// }
// const mutations = {
//   ADD(state, count) {
//     state.count++
//   }
// }
// const actions = {
//   add({ commit }) {
//     commit('ADD')
//   }
// }
// const getters = {}

export default new Vuex.Store({
  modules: {
    home,
    search
  }
  // state,
  // mutations,
  // actions,
  // getters,
})