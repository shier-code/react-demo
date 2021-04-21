/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:49:55
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 11:08:02
 */
import { ADD_NUMBER, SUB_NUMBER } from "./constants.js"

const defaultState = {
  counter: 0
}
function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state;
  }
}
export default reducer