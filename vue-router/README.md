# vue-router

> 练习vuerouter

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


vue router的实现原理分两种
方式一、
1、是window.location.xxx
使用哈希的形式来控制history

window.location.hash
和wwindow.onhashchange时间监听浏览器的地址是否发生改变。
根据不同的地址来实现路由跳转和数据展示

事件来监听，
这种方式是使用#的形式来改变路由
我在面试时曾很轻率的说过使用a链接的锚点来实现。
确实是孤陋寡闻了。

但是我没研究过a链接锚点的原理。

方式二、
2、还有一种情况是使用h5的history的新的方法来操作历史记录
history在go,back,froword基础上新增了state状态

pushState
接收三个参数，state,title,url
var yi = new Object();
yi.title="hello";
title='hhh';
url="www.baidu.com";
history.pushState(yi,title,url)

pushState不会触发浏览器跳转内容发生变化，而是浏览器地址发生变化
并保存在一个历史记录中，
pushState的第三参数如果是跨域会报错。
如果是添加了hash则不会触发haschange事件，
replaceState,的参数和pushState的参数相同，在作用上仅有的差异是，replaceState的会修改历史记录为当前修改的url而不会添加历史记录。
popState是不会被pushState、replaceState触发的只有当history.go\history.back\history.forward才会触发。


在实际使用中使用
var router = new VueRouter({
    mode: 'hash',//设置路由模式
    linkActiveClass: 'u-link--Active', // 这是链接激活时的class
    routers:[{
        path:'/',
        component:'Home',
        redirect:'/params/:newsId(\\d+)/:newsTitle'//重定向
        children:[{//路由嵌套
            path:'/child',
            component:'Child',//还可以使用一个对象定义一个名词然后使用router-view的name属性和这个名称进行关联。
            component:{
                defualt:Child,
                name:'pac',
                //使用路由的别名
                alias: '/b',
                 beforeEnter: (to, from, next) => {
        // to是要进入的路由
        from:是要离开的路由
        next:是确保进行下一步执行的方法
      },
      meta:{//路由原信息$route.matched 来检查路由记录中的 meta 字段。

      }
            }
        }]
    }]
})

可以通过this.$route.params.id来查找到id

监听路由变化有两种方式一种是使用watch的方式
watch:{
    'child'(){

    }
}







