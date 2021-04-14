import React from "react"

export default class UserFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myList: []
    }
  }

  componentDidMount() {
    fetch("http://iwenwiki.com/api/newworld/strategy.php")
      .then(res => res.json())
      .then(data => {
        console.log(data.asia.list);
        this.setState({ myList: data.asia.list })
      })
  }
  render() {
    const { myList } = this.state
    return (

      <div >
        <p>我是fetch</p>
        {
          myList.length > 0 ?
            <ul>{
              myList.map((item, index) => {
              return <li key={index}>{item.desc}</li>
              })
            }</ul> : <div>数据</div>
        }</div>
    )
  }
}