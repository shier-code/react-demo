/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-23 15:12:48
 * @LastEditors: went
 * @LastEditTime: 2021-09-23 19:29:18
 */
/* eslint-disable */
import React, { useState, useCallback, memo } from 'react'
/**
 * 
 * useCallback在将一个组件中的函数传递给子元素调用时，对函数进行处理
 */
const HYButton = memo((props) => {
  console.log('HYButton 重新渲染');

  return <button onClick={props.increament}>+1</button>
})
export default function CallbackDemo() {
  let [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const increament1 = () => {
    setCount(count + 1)
  }
  const increament2 = useCallback(
    () => {
      setCount(count + 1)
    },
    [count],
  )
  return (
    <div>
      <h2>CallbackDemo:{count}</h2>
      <HYButton increament={increament1} />
      <HYButton increament={increament2} />
      <button onClick={e => setShow(!show)}> show切换</button>
    </div>
  )
}
