import React from "react"

export default class ComponentLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    }
  }

  render() {
    return (
      <div>
        <p>这是组合组件</p>
        <p>{this.props.children}</p>
      </div>

    )
  }
}
