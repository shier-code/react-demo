import React from 'react'
import MineDemo from './MineDemo'
export default class Mine extends React.Component {
  constructor(props) {
    super(props)
  }
  clickHandle = () => {
    console.log('shijian')
    console.log(this.props)
    this.props.history.push('/')
  }
  render() {
    console.log('=========', this.props)
    return (
      <div>mine:{this.props.match.params.id}
        <button onClick={this.clickHandle}>回到mine页面</button>
        <MineDemo></MineDemo>
      </div>
    )
  }
}