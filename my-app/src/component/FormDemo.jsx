import React from "react"

export default class ComponentLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  handleClick(e) {
    e.preventDefault();
    console.log(this.state.value);

  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => { this.handleClick(e) }}>
          <input type="text" value={this.state.value} onChange={(e) => { this.onChange(e) }} />
          <input type="submit" value="提交"></input>
        </form>
      </div>

    )
  }
}
