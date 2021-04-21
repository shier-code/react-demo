/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:46:51
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 11:11:53
 */
import redux from "redux";
import reducer from "./reducer.js"
const store = redux.createStore(reducer)
export default store;