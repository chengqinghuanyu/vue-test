import Vuex from 'vuex'
import Vue from 'vue'
import * as state from './states'
import * as getters from './getters'
import mutation from './mutations'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_EVN !== 'production'
console.log(debug)
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutation,
  plugins: debug ? [createLogger()] : [],
  strict: true
})
