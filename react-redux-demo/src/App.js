/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-20 16:12:26
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-21 15:59:34
 */

import './App.css';

function App(props) {
  return (
    <div className="container">
      <h3>{props.value}</h3>
      <p>
        <button onClick={props.onIncreament()}>increament</button>
        <button onClick={props.onDecreament()}>decreament</button>
      </p>
    </div >
  );
}

export default App;

