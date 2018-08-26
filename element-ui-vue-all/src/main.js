// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss-style/element-variables.scss'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Element, {
    size: 'small',
    zIndex: 3000
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})