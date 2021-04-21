/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-20 16:12:26
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-20 17:31:17
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux"
import reducer from "./reducers/counter"
// reducer是一个纯函数，他将传入的state和action结合起来生成新的state
const store = createStore(reducer);


const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        value={store.getState()}
        onIncreament={() => { store.dispatch({ type: "INCREAMENT" }) }}
        onDecreament={() => { store.dispatch({ type: "DECREAMENT" }) }} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)

