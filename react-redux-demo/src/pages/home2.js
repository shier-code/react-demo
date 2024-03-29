/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-21 16:28:02
 * @LastEditors: went
 * @LastEditTime: 2021-10-15 13:44:26
 */
import React from "react"
import { connect } from '../utils/connect'
import { subAction, incAction } from "../store/actionCreators"
class home extends React.Component {

  render() {
    return (
      <div>
        <h1>home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.decreament()}>-1</button>
        <button onClick={e => this.props.subNumber(5)}>-5</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  decreament() {
    dispatch(incAction(1))
  },
  subNumber(num) {
    dispatch(subAction(num))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(home);