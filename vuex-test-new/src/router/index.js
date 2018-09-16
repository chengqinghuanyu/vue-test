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
            //区域选择
            path: '/area',
            name: 'SelectArea',
            component: SelectArea
        }, {
            //限制输入框的字数，复制也只能截取前面的***位
            path: '/textareacompute',
            name: 'TextareaCompute',
            component: TextareaCompute
        },
        {
            //行业样式
            path: '/industryv',
            name: 'Industry',
            component: Industry
        }
    ]
})