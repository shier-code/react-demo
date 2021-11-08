/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 15:15:51
 * @LastEditors: went
 * @LastEditTime: 2021-11-08 11:01:41
 */
import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import HYMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <HYMain/>
    </Provider>
  );
}

export default App;
