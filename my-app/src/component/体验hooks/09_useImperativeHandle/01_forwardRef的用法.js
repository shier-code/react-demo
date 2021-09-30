/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-29 10:50:09
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 11:11:13
 */
import React, { useRef, forwardRef } from 'react'

const HYInput = forwardRef((props,ref) => {
  return <input ref={ref} type="text" />
})
export default function ForwardRefDemo() {
  const inputRef = useRef()
  return (
    <div>
      <HYInput ref={inputRef} />
      <button onClick={e=>inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
