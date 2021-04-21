import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css'
export default class App extends React.Component {
  render() {
    return (
      <ul>
        <li><NavLink exact activeClassName="selected-class" activeStyle={{ background: 'red' }} to="/">home</NavLink></li>
        <li><NavLink exact activeClassName="selected-class"
          to={{
            pathname: '/mine',
            search: "?sort=name",
            hash: "#the-hash",
            state: { flag: "flag" }
          }}>mine</NavLink></li>
        <li><NavLink exact activeClassName="selected-class" to="/mine/ucenter">ucenter</NavLink></li>
        <li><NavLink exact activeClassName="selected-class" to="/demo">demo</NavLink></li>
      </ul>
    )
  }
}