import React from 'react'

export default class Child1 extends React.Component {

  constructor() {
    super();
    this.state = {
      myinput: 0
    }
  }
  componentDidMount() {
    this.setState({
      myinput: this.props.money
    })
  }
  changeHandler(e) {
    this.setState({
      myinput: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>{this.props.money * 1}</p><input type="text" value={this.state.myinput} onChange={(e) => this.changeHandler(e)} /></div>
    )
  }
}