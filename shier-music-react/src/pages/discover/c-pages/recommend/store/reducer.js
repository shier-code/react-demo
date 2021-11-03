/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-01 17:11:39
 * @LastEditors: went
 * @LastEditTime: 2021-11-03 19:20:22
 */
import * as actionTypes from './constants'
import { Map } from 'immutable'
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
})
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set('topBanners', action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    default:
      return state
  }
}

export default reducer