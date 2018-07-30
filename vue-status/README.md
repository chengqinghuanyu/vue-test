# vue-status

> vue-status描述

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

这是一个关于vue生命周期的观察

数据观测和event/watcher时间配置之前被调用。

在beforecreated前没有数据被挂载 没有dom生成 在created时数据被生成在这一步，实例已经完成以下的配置：数据观测，属性和方法的运算，watch/event事件回调 dom还没有生成 在beforeMount时dom和数据都生成了 但是数据没有被解析到dom中 mounted时数据和dom生成，数据也可以解析到dom中,el被新创建的vm.$el替换，并挂在到实例上去之后调用该钩子函数。如果root实例挂载了一个文档内元素，当mounted被调用时vm.$el也在文档内 beforeUpdate数据更新前不触发 数据更新后触发updated 所以你现在可以执行依赖于DOM的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环

更新后触发activated并在keep-alive中生效 deactivated解除了keep-alive 最后是组件销毁后的状态 beforeDestroy，实例仍然完全可用 destroy所有的事件监听器会被移除，所有的子实例也会被销毁。
