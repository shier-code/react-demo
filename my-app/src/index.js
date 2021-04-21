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
import App from './App';
import { createStore } from "redux"
import reducer from "./reducers/counter"
//创建store仓库
const store = createStore(reducer)
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

