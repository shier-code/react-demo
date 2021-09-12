/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2020-08-14 14:11:37
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-20 16:07:51
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './component/组件的通信//案例/App';
import './component/组件的通信/案例/style.css';
ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

