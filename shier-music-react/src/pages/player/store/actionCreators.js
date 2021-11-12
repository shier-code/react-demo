/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-11 13:21:52
 * @LastEditors: went
 * @LastEditTime: 2021-11-12 16:17:01
 */
import { getSongDetail } from '@/services/player'
import * as actionTypes from './constants'

const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
  }
}
export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}