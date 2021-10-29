/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-21 16:27:52
 * @LastEditors: went
 * @LastEditTime: 2021-10-18 14:37:23
 */
import React from "react"
//使用封装的connect
// import { connect } from "../utils/connect"
import { connect } from "react-redux"
// import axios from "axios"
import { addAction, changeBannersAction, getHomeMultidataAction } from "../store/actionCreators"

class about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>about</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.increament()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
        <button onClick={e => this.test()}>222</button>
      </div>
    );
  }
  componentDidMount() {
    // axios({
    //   url: "http://123.207.32.32:8000/home/multidata"
    // }).then(res => {
    //   const data = res.data.data;
    //   this.props.changeBaners(data.banner.list)
    // })
    this.props.getHomeMultidata()
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};
const mapDispatchToProps = dispatch => {
  return {
    increament: function () {
      dispatch(addAction(1))
    },
    addNumber: function (num) {
      dispatch(addAction(num))
    },
    changeBaners: function (banners) {
      dispatch(changeBannersAction(banners))
    },
    getHomeMultidata: function () {
      dispatch(getHomeMultidataAction)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(about)
