<template>
  <div id="app">
    <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['GET_CARS_FROM_API', 'GET_TRUCK_FROM_API'])
  },
  mounted() {
    this.GET_CARS_FROM_API(),
    this.GET_TRUCK_FROM_API()
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  color: #2c3e50;
}
.container {
  width: 90%;
  margin: 0 auto;
}
</style>
