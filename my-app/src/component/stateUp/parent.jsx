import React from 'react'
import Child1 from "./child1"
import Child2 from "./child2"
export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      money: 2
    }
  }
  changeHandler(e){
    this.setState({
      money:e.target.value
    })
  }
  render() {
    return (
      <div
      >
        <input type="text" value={this.state.money} onChange={(e) => this.changeHandler(e)} />
        <p> parent</p>
        人名币: <Child1 money={this.state.money}></Child1>
        美金:< Child2 money={this.state.money}></Child2>
      </div >

    )
  }
}

