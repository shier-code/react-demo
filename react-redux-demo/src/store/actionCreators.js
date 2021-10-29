/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:57:04
 * @LastEditors: went
 * @LastEditTime: 2021-10-18 16:08:24
 */
import axios from "axios"
import { ADD_NUMBER, SUB_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMEND } from "./constants.js"
export const addAction = (num) => {
  return {
    type: ADD_NUMBER,
    num
  }
}
//写法2
export const subAction = num => ({
  type: SUB_NUMBER,
  num
})
export const incAction = () => ({
  type: "INCREAMENT",

})
export const decAction = () => ({
  type: "DECREAMENT",
})
//轮波图数据
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
})
//redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch, getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list))
  })
}