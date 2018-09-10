# vuex-test-new

> A Vue.js project

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
//今晚使用vuex时发现了一个很诡异的问题
this.$store不存在
原因如下
我在main.js中引入的import store from '../store/store'
那个名称 和store.js导出的文件名称不一致导致找不出this.$store。