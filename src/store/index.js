import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import {state, mutations, actions, getters} from './main'

require('es6-promise').polyfill()

Vue.use(Vuex)

let other = {
  state,
  mutations,
  getters,
  actions
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    other
  }
})
