// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
    //Vue.config.devtools = false
    /*取消所有的日志*/
Vue.config.slient = true;
/* eslint-disable no-new */


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})


/*组件 的集中定义形式：

1、以Vue.component('组件名',{
  data(){
    return datas;
  },
  filter:{

  },
  created(){

  },
  mounted(){

  },
  updated(){

  },
  computed() {

  },
  props:[]
})
然后使用el绑定到dom上
2、使用引入一个单独.js或者.vue文件在使用的地方引入并使用组件名称
*/

/*组件的props

由于浏览器对大小写敏感所以当props的属性值是大写的需要使用烤串法来转换，
但是如果使用字符串模板就不存在


props从父组件到子组件是一个单项数据流
：
所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定： 父级 prop 的更新会向下流动到子组件中， 但是反过来则不行。 这样会防止从子组件意外改变父级组件的状态， 从而导致你的应用的数据流向难以理解。
*/