/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-26 11:32:55
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 10:14:48
 */
import React, { useRef } from 'react'

export default function RefHook() {
  const titleRef = useRef()
  const inputRef = useRef()
  function changeDom() {
    titleRef.current.innerHTML = "shier"
    inputRef.current.focus()
  }
  return (
    <div>
      <h2 ref={titleRef}>refHookDemo1</h2>
      <input ref={inputRef} />
      <button onClick={e => changeDom()}> 修改dom</button>
    </div>
  )
}
