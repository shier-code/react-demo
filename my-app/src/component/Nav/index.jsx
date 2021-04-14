import React from 'react';
import {Link} from 'react-router-dom'
export default class App extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/mine">mine</Link></li>
        <li><Link to="/mine/ucenter">ucenter</Link></li>
        <li><Link to="/demo">demo</Link></li>
      </ul>
    )
  }
}