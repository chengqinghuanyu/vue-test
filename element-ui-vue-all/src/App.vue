<template>
  <div id="app">
    <h1>智能家族-element-ui学习</h1>
    <img src="./assets/znonz.png">
    <router-link to="/layerout" router-link-active>布局</router-link>
    <router-link to="/contain">容器</router-link>
    <router-link to="/table">表格</router-link>
    <router-link to="/tree">树状图</router-link>
    <router-view/>
    <footer>{{autor}}</footer>
  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      autor:'-by-尹鹏孝（353887494@qq.com）'
    }
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
  margin-top: 30px;
}
img{
  width: 60px
}
a{
      text-decoration: none;
}
.router-link-active{
  color:cadetblue;
}
</style>
