//props类型验证
import React from "react"
import PropsTypes from "prop-types"

//函数子组件
function ChildCpn(props) {
  const { name, age } = props
  return (
   <div>
      <h2>函数子组件</h2>
      <h2>{name+age}</h2>
    </div>

  )
}
export default class PropsTypeDemo extends React.Component {
  // constructor(props) {
  //   super(props);//传给父类，让父类保存
  //   this.state = {
  //   }
  // }
  //可以不实现

  render() {
    return (
      <div>
        <ChildCpn name="shier" age="18" />
        {this.props.title}
      </div>

    )
  }
}
PropsTypeDemo.propTypes = {
  title: PropsTypes.number.isRequired
}
PropsTypeDemo.defaultProps = {
  title: "默认值"
}
