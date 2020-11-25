import React from "react"

export default class ComponentLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  changehandler() {
    let addCount = this.state.count 
    this.setState({ count: addCount +=2})
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.changehandler.bind(this)}>按钮</button>
        {this.props.title}
      </div>

    )
  }
}
