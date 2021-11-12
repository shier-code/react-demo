/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-01 17:12:36
 * @LastEditors: went
 * @LastEditTime: 2021-11-11 14:24:47
 */
import * as actionTypes from './constants'
import {
  getTopBanner,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList
} from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})
const changeHotReccomendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})
const changeNewAlbum = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})
const changeUpListAction = (res) => ({
  type: actionTypes.CHANGE_UP_LIST,
  topUpList: res.playlist
})
const changeNewListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  topNewList: res.playlist
})

const changeOriginListAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList: res.playlist
})

const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeHotReccomendAction(res))
    })
  }
}
export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeNewAlbum(res))
    })
  }
}
export const getTopData = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeNewListAction(res));
          break;
        case 2:
          dispatch(changeOriginListAction(res));
          break;
        case 3:
          dispatch(changeUpListAction(res));
          break;
        default:
          console.log("其他数据处理");
      }
    })
  }
}
export const getSettleSingers = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}
