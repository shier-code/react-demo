/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:49:55
 * @LastEditors: went
 * @LastEditTime: 2021-10-18 15:53:45
 */
import { ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMEND } from "./constants.js"

const defaultState = {
  counter: 0,
  banners: [],
  recommends: []
}
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, banners: action.recommends };
    default:
      return state;
  }
}
export default reducer