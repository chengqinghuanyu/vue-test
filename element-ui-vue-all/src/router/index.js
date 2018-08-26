import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contain from '@/components/Container'
import { Table } from 'element-ui';
import Tables from '@/components/Table'
import Tree from '@/components/Tree'
import Layerout from '@/components/Layerout'
import Treecustom from '@/components/Treecustom'
import Filter from '@/components/Filter'
import Accordion from '@/components/Accordion'
import Dragable from '@/components/Dragable'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        redirect: '/layerout'
    }, {
        path: '/layerout',
        name: 'Layerout',
        component: Layerout

    }, {
        path: '/contain',
        name: 'Contain',
        component: Contain
    }, {
        path: '/table',
        name: 'Table',
        component: Tables
    }, {
        path: '/tree',
        name: 'Tree',
        component: Tree,
        children: [{
                name: 'Treecustom',
                path: 'treecustom',
                component: Treecustom
            },
            {
                name: 'Filter',
                path: 'filter',
                component: Filter
            },
            {
                name: 'Accordion',
                path: 'accordion',
                component: Accordion
            },
            {
                name: 'Dragable',
                path: 'dragable',
                component: Dragable
            }
        ]
    }]
})