import React from "react"

export default class UserFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    fetch("http://iwenwiki.com/api/newworld/strategy.php")
      .then(res => res.json)
      .then(data => {
        console.log(data);

      })
  }
  render() {
    return (
      <div>hello</div>
    )
  }
}