import * as types from "./mutation-type";
export default {
    [types.SET_USE_NAME](state, name) {
        state.use.name = name;
    },
    [types.SET_USE_AGE](state, age) {
        state.use.age = age
    },
    [types.SET_USE](state, use) {
        state.use = use;
    },
    [types.SET_FOODS](state, foods) {
        state.foods = foods;
    },
    [types.SET_CART](state, cart) {
        state.cart = cart;
    }
}