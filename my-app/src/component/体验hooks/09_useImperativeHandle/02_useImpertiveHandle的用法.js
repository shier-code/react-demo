/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-29 10:50:09
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 11:30:04
 */
import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus()
      }
    }
    ), [inputRef.current]
  )
  return <input ref={inputRef} type="text" />
})
export default function useImperativeHandleDemo() {
  const childInput = useRef()
  return (
    <div>
      <HYInput ref={childInput} />
      <button onClick={e => childInput.current.focus()}>聚焦</button>
    </div>
  )
}
