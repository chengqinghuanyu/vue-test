import * as types from './mutation-type';
export default {
    useAsyn({ commit }, { use }) {
        commit(types.SET_USE, use);
    },
    cartAsyn() {
        commit(types.SET_CART, CART);
    }
}