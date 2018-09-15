import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SelectArea from '@/components/SelectArea'
import TextareaCompute from '@/components/TextareaCompute'
import Industry from '@/components/Industry'
Vue.use(Router)

export default new Router({
    model: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/area',
            name: 'SelectArea',
            component: SelectArea
        }, {
            path: '/textareacompute',
            name: 'TextareaCompute',
            component: TextareaCompute
        },
        {
            path: '/industryv',
            name: 'Industry',
            component: Industry
        }
    ]
})