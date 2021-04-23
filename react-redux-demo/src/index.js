/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-20 16:12:26
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-22 20:19:03
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//自己封装库
import { StoreContext } from "./utils/context"
//第三方库
import { Provider } from "react-redux"
import store from './store';


const render = () => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App
      />
    </StoreContext.Provider>,
    // <Provider store={store}>
    //   <App />
    // </Provider>,
    document.getElementById('root')
  );
}

render()


