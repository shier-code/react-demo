/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-21 16:27:52
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 17:06:03
 */
import React from "react"
import store from "../store"
import { addAction } from "../store/actionCreators"
class about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  increament() {
    store.dispatch(addAction(1))
  }
  addNumber(num) {
    store.dispatch(addAction(num))
  }
  render() {
    return (
      <div>
        <h1>about</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increament()}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
      </div>
    );
  }
}

export default about;