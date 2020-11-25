//props类型验证
import React from "react"
import PropsTypes from "prop-types"
export default class PropsTypeDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        {this.props.title}
      </div>

    )
  }
}
PropsTypeDemo.propsType = {
  title: PropsTypes.number.isRequired
}
PropsTypeDemo.defaultProps = {
  title: "默认值"
}
