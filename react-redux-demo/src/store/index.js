/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:46:51
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 16:21:57
 */
import { createStore } from "redux";
import reducer from "./reducer.js"
const store = createStore(reducer)
export default store;