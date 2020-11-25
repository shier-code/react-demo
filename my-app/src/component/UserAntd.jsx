//非受控组件
import React from "react"
import { Button } from "antd"
export default class UserAntd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  clickHander() {
    console.log(this.username.current.value);

  }
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </div>

    )
  }
}
