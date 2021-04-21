import React from 'react'
import { withRouter } from 'react-router-dom'

class MineDemo extends React.Component {


  clickHandle() {
    console.log(this.props)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <button onClick={() => this.clickHandle()}>回到home</button>
      </div>
    )
  }
}
//高阶组件
export default withRouter(MineDemo)