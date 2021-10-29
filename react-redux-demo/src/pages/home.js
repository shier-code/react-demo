/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-21 16:28:02
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 17:05:04
 */
import React from "react"
import store from "../store"
import { subAction, incAction, addAction } from "../store/actionCreators"
class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
      banners: store.getState().banners
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
  decreament() {
    store.dispatch(subAction(1))
  }
  subNumber(num) {
    store.dispatch(subAction(num))
  }
  render() {
    return (
      <div>
        <h1>home</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.decreament()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
        <h1>
          <ul>
            {this.state.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })}
          </ul>
        </h1>
      </div>
    );
  }
}

export default home;