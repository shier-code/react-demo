/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-23 14:50:33
 * @LastEditors: went
 * @LastEditTime: 2021-09-23 15:00:29
 */
import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case "increament":
      return { ...state, counter: state.counter + 1 };
    case "decreament":
      return { ...state, counter: state.counter - 1 };
    default:
      return state
  }
}
export default function Home() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  return (
    <div>
      <h2>当前计数：{state.counter}</h2>
      <button onClick={e => dispatch({ type: 'increament' })}>+1</button>
      <button onClick={e => dispatch({ type: 'decreament' })}>-1</button>
    </div>
  )
}
