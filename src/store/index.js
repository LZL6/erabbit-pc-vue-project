import { createStore } from 'vuex'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
    username: 'zs'
  },
  getters: {
    newName(state) {
      return state.username + '111'
    }
  },
  mutations: {
    updateName(state) {
      state.username = 'sj'
    }
  },
  actions: {
    updateNames(ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 2000)
    }
  },
  modules: {
  }
})
