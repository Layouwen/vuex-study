// 用于保存 Vue
let Vue

// 核心代码
class Store {
  constructor(options) {
    this.getters = {}
    this._wrapperGetters = options.getters
    const computed = {}
    Object.keys(this._wrapperGetters).forEach(key => {
      const store = this
      computed[key] = function() {
        return store._wrapperGetters[key](store.state)
      }
      Object.defineProperty(store.getters, key, {
        get() {
          return store._vm[key]
        },
      })
    })
    this._vm = new Vue({
      data() {
        return {
          $$state: options.state,
        }
      },
      computed,
    })
    this.$mutations = options.mutations
    this.$actions = options.actions

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }
  get state() {
    return this._vm.$data.$$state
  }
  commit(type, payload) {
    const entry = this.$mutations[type]
    if (!entry) {
      console.error('mutation does not exist')
      return
    }
    entry(this.state, payload)
  }
  dispatch(type, payload) {
    const entry = this.$actions[type]
    if (!entry) {
      console.error('action does not exist')
      return
    }
    entry(this, payload)
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
