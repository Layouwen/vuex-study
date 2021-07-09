<template>
  <div id="app">
    <div>
      <span>名字: {{ $store.state.name }}</span>
      <button @click="$store.commit('changeName', 'Avan')">
        commit changeName
      </button>
    </div>
    <div>
      <span>年龄： {{ $store.state.age }}</span>
      <button @click="$store.dispatch('changeAge', 'Avan')">
        commit changeName
      </button>
    </div>
    <div>{{$store.getters.info}}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
