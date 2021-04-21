/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-20 16:00:53
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 09:36:24
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + 1;
    case "DECREAMENT":
      return state - 1;
    default:
      return state;


  }
}
export default counter