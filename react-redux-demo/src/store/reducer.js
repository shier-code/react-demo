/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:49:55
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-25 17:14:52
 */
import { ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS } from "./constants.js"

const defaultState = {
  counter: 0,
  banners: []
}
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
}
export default reducer