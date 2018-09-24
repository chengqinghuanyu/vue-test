<template>
  <div id="app">
    <h1>智能家族-element-ui学习</h1>
    <img src="./assets/znonz.png">
    <router-link to="/layerout" router-link-active>布局</router-link>
    <router-link to="/contain">容器</router-link>
    <router-link to="/table">表格</router-link>
    <router-link to="/tree">树状图</router-link>
    <router-link to="/radio">单选</router-link>
    <router-link to="/selfComponent">自定义组件</router-link>
    <router-link to="/checkboxs">多选框</router-link>
     <router-link to="/mymodeltest">input-model</router-link>
     <router-link to="/myselfselect">自定义下拉</router-link>
     <router-link to="/chinaareadata">地址</router-link>
     <router-link to="/timerange">时间范围</router-link>
     <router-link to="/tips">提示</router-link>
     <router-link to="/crop">裁剪</router-link>
     <router-link to="/selectfunction">城市选择</router-link>
     
      <!-- <router-link to="/job">职位对接人</router-link> -->
     
    <router-view/>
    <div>
       <job :states="myStates" @my-selectval="getSelectData" @my-set-selectval="setMyselectval"></job>
     </div>
    <footer>{{autor}}</footer>
  </div>

</template>

<script>
import Job from './components/Job'
export default {
  name: 'App',
  data(){
    return {
      autor:'-by-尹鹏孝（353887494@qq.com）',
      myStates:[{
          value: 'Beijing',
          label: '北京',id:1
        }, {
          value: 'Shanghai',
          label: '上海',id:2
        }, {
          value: 'Nanjing',
          label: '南京',id:3
        }, {
          value: 'Chengdu',
          label: '成都',id:4
        }, {
          value: 'Shenzhen',
          label: '深圳',id:5
        }, {
          value: 'Guangzhou',
          label: '广州'
          ,id:6
        }],
    }
  },
  mounted() {
    
  },
  components:{
    Job
  },
  methods:{
    getSelectData(a){
      console.log(a)
    },
    setMyselectval(a){
      console.log(a)
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
.el-select.my-bg-tg > .el-input input{
    border-left: 1;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}
</style>
