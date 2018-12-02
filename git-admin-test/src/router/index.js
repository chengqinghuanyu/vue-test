import Vue from "vue";
import VueRouter from "vue-router";
import routeConfig from "./routes";
import { sync } from "vuex-router-sync";
import store from "../store";
import types from "../store/mutation-types";
import auth from "../common/auth";

//加载路由中间件
Vue.use(VueRouter)

//定义路由
const router = new VueRouter({
    routes: routeConfig,
    //mode: 'history'
})

sync(store, router)

const { state } = store

router.beforeEach((route, redirect, next) => {
    if (state.device.isMobile && state.sidebar.opened) {
        store.commit(types.TOGGLE_SIDEBAR, false)
    }
    if (!auth.loggedIn() && route.path !== '/login') {
        console.log('设置路由', route.fullPath);
        next({
            path: '/login',
            query: { redirect: route.fullPath }
        })
    }
    // if (route.matched.some(m => m.meta.auth)) {

    //     if (redirect.path === '/' && route.path === '/') {
    //         console.log('bb', auth.loggedIn())
    //         next({
    //             path: '/index',
    //             query: {
    //                 redirect: route.fullPath
    //             }
    //         })
    //     } else {
    //         console.log(123)
    //         next();
    //     }
    // } else {
    //     console.log(12223)
    //     next()
    // }

    /* 页面title */
    if (route.meta.title) {
        document.title = route.meta.title
    }
    /* 判断该路由是否需要登录权限 */
    if (route.matched.some(record => record.meta.requireAuth)) {
        //未登录
        if (!auth.loggedIn()) {
            next({
                path: '/login',
                query: {
                    redirect: route.fullPath
                }
            })
        } else {
            if (redirect.path === '/' && route.path === '/') {
                console.log('bb', auth.loggedIn())
                next({
                    path: '/index',
                    query: {
                        redirect: route.fullPath
                    }
                })
            } else {
                console.log(123)
                next();
            }
        }
    } else {
        next()
    }
})

export default router