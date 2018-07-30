// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
var b = new Vue({
    name: 'aaa',
    el: '#app',
    data: {
        message: 'vue-生命周期窥探！'
    },
    components: { App },
    template: '<div> <keep-alive><App/></keep-alive>3456{{message}}</div>',
    /*生命周期调研*/
    beforeCreate() {
        console.group('~~~~~创建前状态');
        console.log('%c%s', 'color:red', 'name:' + this.$name);
        console.log("%c%s", 'color:blue', 'el:' + this.$el);
        console.log('%c%s', 'color:black', 'data:' + this.$data);
        console.log('%c%s', 'color:green', 'message:' + this.message)
    },
    created() {
        //console.timeline(1)
        console.log('~~~~~~创建中状态~~~~~');
        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);
    },
    beforeMount() {
        console.log('~~~~~~挂载前状态~~~~~');
        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);

    },
    mounted() {
        console.log('~~~~~~挂载后状态~~~~~');
        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);
        this.message = '触发组件更新';
    },
    beforeUpdate() {
        console.log('~~~~~~更新前状态~~~~~');

        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);

    },
    updated() {

        console.log('~~~~~~更新后状态~~~~~');
        this.message = ""
        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);

    },
    activated() {
        console.log('~~~~~~keep-alive组件激活时调用~~~~~');

        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);

    },
    deactivated() {
        console.log('~~~~~~ keep - alive组件停用时调用~~~~~');

        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);

    },
    beforeDestroy() {
        console.log('~~~~~~销毁前状态~~~~~');

        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);
        console.log('%c%s', 'color:black', 'message:' + this.message);

    },
    destroyed() {
        console.log('~~~~~~销毁后状态~~~~~');
        console.log('%c%s', 'color:bule', 'name:' + this.$name);
        console.log('%c%s', 'color:green', 'el:' + this.$el);
        console.log('%c%s', 'color:red', 'data:' + this.$data);

        console.log('%c%s', 'color:black', 'message:' + this.message);

    },
})