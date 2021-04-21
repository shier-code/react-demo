/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:40:27
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 11:15:22
 */
import store from "./store/index.js"
import {addAction,subAction} from "./store/actionCreators.js"
store.subscribe(() => {
  console.log('===',store.getState().counter);

})


store.dispatch(addAction(10))
store.dispatch(subAction(8))