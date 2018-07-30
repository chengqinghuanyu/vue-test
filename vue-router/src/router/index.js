import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
    /*
    怎么使用vue自带路由 
    1）项目中方法是yinruvue-router
    2）使用Vue.use来进行初始化
    3）输出一个新对象 里面是一个数组
    new Rourer({
      routes:[]
    })

    routers的基本的配置
    路径：path,
    name:组件名称
    component：
    */
export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }]
})