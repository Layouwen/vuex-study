import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'layouwen',
    age: 100,
  },
  mutations: {
    changeName(state, newName) {
      state.name = newName
    },
    changeAge(state, newAge) {
      state.age = newAge
    },
  },
  actions: {
    changeAge(store, newAge) {
      setTimeout(() => {
        store.commit('changeAge', newAge)
      }, 2000)
    },
  },
  getters: {
    info(state) {
      return '我叫' + state.name + '，今年' + state.age
    },
  },
})
