// 受控组件
import React from "react"

export default class ComponentLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        { name: 'sakura', age: 26 },
        { name: 'sakura', age: 26 },
        { name: 'sakura', age: 26 }
      ]
    }
  }
  handleClick(){
    this.setState({
      userInfo:this.state.userInfo.concat({name:"shier"})
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.userInfo.map((item, index) => {
            return <li key={index}>{item.name}</li>
          })}
        </ul>
        <button onClick={this.handleClick.bind(this)}>数组增加</button>
      </div>

    )
  }
}
 