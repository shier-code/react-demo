/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-23 19:36:16
 * @LastEditors: went
 * @LastEditTime: 2021-09-23 19:45:54
 */
import React, { useState, useMemo } from 'react'

function calcNumber(counter) {
  console.log('calcNumber 重新渲染');

  let total = 0
  for (let i = 1; i < counter; i++) {
    total += i
  }
  return total
}
export default function UseMemoDemo() {
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)
  // const total = calcNumber(count)
  const total = useMemo(() => {
    return calcNumber(count)
  }, [count])
  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setShow(!show)}>show</button>
    </div>
  )
}
