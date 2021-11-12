/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-01 16:45:47
 * @LastEditors: went
 * @LastEditTime: 2021-11-11 14:04:35
 */
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store'
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})
export default cReducer