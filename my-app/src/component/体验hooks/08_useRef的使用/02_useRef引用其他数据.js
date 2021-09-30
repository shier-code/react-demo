/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-29 10:13:36
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 10:38:25
 */
import React, { useRef, useState, useEffect } from 'react'
//useRef返回一个ref对象，并且在组件的整个生命周期保持不变
export default function UseRefDom2() {
  const [count, setCount] = useState(0)
  const numRef = useRef(count)
  useEffect(() => {
    // 界面渲染完执行
    numRef.current = count
  }, [count])
  return (
    <div>
      {/* <h2>numRef中的值：{numRef.current}</h2>
      <h2>count中的值：{count}</h2> */}
      <h2>count上一次的值：{numRef.current}</h2>
      <h2>count这一次的值：{count}</h2>
      <button onClick={e => setCount(count + 10)}>+10</button>
    </div>
  )
}
