/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-11 13:27:36
 * @LastEditors: went
 * @LastEditTime: 2021-11-11 14:29:21
 */
import { Map } from 'immutable'
import * as actionTypes from './constants'
const defaultState = Map({
  currentSong: {}
})
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    default:
      return state
  }
}
export default reducer