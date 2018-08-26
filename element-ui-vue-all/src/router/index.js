import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contain from '@/components/Container'
import { Table } from 'element-ui';
import Tables from '@/components/Table'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/contain',
        name: 'Contain',
        component: Contain
    }, {
        path: '/table',
        name: 'Table',
        component: Tables
    }]
})