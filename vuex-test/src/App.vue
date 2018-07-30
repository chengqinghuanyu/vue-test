<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Foods></Foods>
    <router-view/>
  </div>
</template>

<script>

import Foods from './components/foods/foods'
export default {
  name: 'App',
  components:{
    Foods
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
