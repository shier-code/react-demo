/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-01 16:45:47
 * @LastEditors: went
 * @LastEditTime: 2021-11-01 17:22:40
 */
import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
const cReducer = combineReducers({
  recommend: recommendReducer
})
export default cReducer