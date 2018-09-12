import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0,
        city: '城市名称',
        obj: {
            message: ''
        }
    },
    getters: {
        getCount(state) {
            return state.count
        },
        getCityFn(state) {
            return state.city
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        desincurrent(state) {
            //console.log(state)
            state.count > 0 ? state.count-- : 0

        },
        setCity(state, name) {
            state.city = name
        },
        getValue(state, val) {
            console.log(val)
            state.obj.message = val
        }
    },
    actions: {
        metype(state) {
            //setTimeout(function() {
            state.count += 2
                //}, 20)
        },
        // 设置城市信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
        setCityName({
            commit,
            state
        }, name) {
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setCity", name);
        }
    }
})
export default store