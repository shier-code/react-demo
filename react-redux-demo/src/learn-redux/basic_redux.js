/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 09:48:43
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 10:33:08
 */
const redux = require("redux")
const initialState = {
  counter: 0
}
//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREAMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREAMENT":
      return { ...state, counter: state.counter - 1 };
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + 5 };
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - 12 };
    default:
      return state
  }
}
//store
const store = redux.createStore(reducer)
//订阅store的修改
store.subscribe(() => {
   console.log('=====',store.getState().counter);
   
})
//action
const action1 = { type: "INCREAMENT" }
const action2 = { type: "DECREAMENT" }
const action3 = { type: "ADD_NUMBER", num: 5 }
const action4 = { type: "SUB_NUMBER", num: 12 }

store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)

