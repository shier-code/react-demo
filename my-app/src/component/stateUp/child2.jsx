import React from 'react'

export default class Child2 extends React.Component {
  constructor() {
    super();
    this.state = {
      myinput2: 0
    }
  }
  componentDidMount() {
    this.setState({
      myinput2: this.props.money*7
    })
  }
  changeHandler(e) {
    this.setState({
      myinput2: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p>{this.props.money*7}</p>
        <input type="text" value={this.state.myinput2} onChange={() => this.changeHandler()} /></div>
    )
  }
}