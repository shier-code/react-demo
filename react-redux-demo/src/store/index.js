/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:46:51
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-25 19:05:26
 */
import { createStore, applyMiddleware } from "redux";
import thunkMiddkeware from "redux-thunk"
import reducer from "./reducer.js"
//应用中间件
const storeenhancer = applyMiddleware(thunkMiddkeware)
const store = createStore(reducer, storeenhancer)
export default store;