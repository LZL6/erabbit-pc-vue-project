<template>
  <!-- vue2.0需要根元素，vue3.0可以是代码片段 Frameset -->
  <div>
    App
    <p>{{ $store.state.username }}</p>
    <p>{{ $store.getters.newName }}</p>
    <button @click="mutationFn()">点击</button>
    <button @click="actionFn()">点击</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)
    const mutationFn = () => {
      store.commit('updateName')
    }
    const actionFn = () => {
      store.dispatch('updateNames')
    }
    return { mutationFn, actionFn }
  }
}
</script>

<style lang="less" scoped>
</style>
