// eslint-disable-next-line eol-last
import * as types from './mutation-type'
export default {
  [types.SET_USE_NAME] (state, name) {
    console.log('sss', state)
    state.name = name
  }
}
