// 用于保存 Vue
let Vue

// 核心代码
class Store {
  constructor(options) {
    this._vm = new Vue({
      data() {
        return {
          $$state: options.state,
        }
      },
    })
    this.$mutations = options.mutations
    this.$actions = options.actions
    this.getters = options.getters
  }
  get state() {
    return this._vm.$data.$$state
  }
}

// 注册插件
function install(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) Vue.prototype.$store = this.$options.store
    },
  })
}

export default { Store, install }
