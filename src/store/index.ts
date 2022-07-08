import { Auth } from '@/models/Auth'
import Vue from 'vue'
import Vuex, { Commit } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: new Auth()
  },
  mutations: {
  SET_USER(state: {user: Auth}, user: Auth) {
    state.user = user;
  }
  },
  actions: {
    SET_USER({commit}: {commit: Commit}, user: Auth) {
      return commit('SET_USER', user);
    }
  },
  modules: {
  }
})
