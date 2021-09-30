/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-22 14:59:31
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 15:50:56
 */
import React, { useState, useEffect, useLayoutEffect } from 'react'
// useEffect会在会在渲染的内容更新到dom之后执行
// useLayoutEffect会在渲染的内容更新到dom之前执行，会阻塞DOM更新
export default function EffectHockCancelDemo() {
  const [counter, setCounter] = useState(10)
  //多个useEffect按定义顺序执行,
  //第二个参数绑定的值更新了才会执行该useEffect
  // useEffect(() => {

  //   if (counter === 0) {
  //     setCounter(Math.random())
  //   }
  // }, [counter])
  useLayoutEffect(() => {
    if (counter === 0) {
      setCounter(Math.random())
    }
  }, [counter])

  return (
    <div>

      <h1>数字：{counter}</h1>
      <button onClick={e => setCounter(0)}>修改数字</button>
    </div>
  )
}
