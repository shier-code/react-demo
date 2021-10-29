/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-21 16:28:02
 * @LastEditors: went
 * @LastEditTime: 2021-10-18 16:26:29
 */
import React from "react"
import { connect } from "react-redux"
import axios from 'axios'
import { subAction, incAction, changeBannersAction } from "../store/actionCreators"
class home extends React.Component {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      const data = res.data.data;
      this.props.changeBanners(data.banner.list)
    })
  }
  render() {
    return (
      <div>
        <h1>home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.decreament()}>-1</button>
        <button onClick={e => this.props.subNumber(5)}>-5</button>
        <ul>
          {this.props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  counter: state.counter,
  banners: state.banners
})
const mapDispatchToProps = dispatch => ({
  decreament() {
    dispatch(incAction(1))
  },
  subNumber(num) {
    dispatch(subAction(num))
  },
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(home);