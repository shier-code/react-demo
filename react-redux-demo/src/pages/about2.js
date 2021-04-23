/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-21 16:27:52
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-22 16:34:07
 */
import React from "react"
import { connect } from "../utils/connet"
import { addAction } from "../store/actionCreators"
function about(props) {
  return (
    <div>
      <h1>about</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={e => props.increament()}>+1</button>
      <button onClick={e => props.addNumber(5)}>+5</button>
    </div>
  );

}
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispatchToProps = dispatch => {
  return {
    increament: function () {
      dispatch(addAction(1))
    },
    addNumber: function (num) {
      dispatch(addAction(num))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(about)
