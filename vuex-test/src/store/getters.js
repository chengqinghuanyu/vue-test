export const name = (state) => {
    //return state.name
    return state.use.name
}
export const age = (state) => {
    return state.use.age
}
export const use = (state) => {
    return state.use
}

export const foods = (state) => {
    return state.foods
}

export const cart = (state) => {
    return state.cart
}
export const other = (state) => {
    return `my name is ${state.use.name},my age is ${state.use.age}`
}