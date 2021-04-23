/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-21 10:57:04
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-22 10:00:45
 */
import { ADD_NUMBER, SUB_NUMBER } from "./constants.js"
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