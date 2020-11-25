//非受控组件
import React from "react"

export default class ComponentLife extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef()
    this.state = {

    }
  }

  clickHander() {
    console.log(this.username.current.value);

  }
  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => { this.handleClick(e) }}>
          <input type="text" ref={this.username} />
          <button onClick={() => { this.clickHander() }}>按钮</button>
        </form>
      </div>

    )
  }
}
