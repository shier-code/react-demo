/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-01 17:11:39
 * @LastEditors: went
 * @LastEditTime: 2021-11-01 17:17:04
 */
import * as actionTypes from './constants'
const defaultState = {
  topBannners: []
}
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBannners: [] }
    default:
      return state
  }
}

export default reducer