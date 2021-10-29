/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-29 15:55:28
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 16:29:53
 */
import React from 'react'
import scrollPosition from "./hooks/scroll-positon-hook"

export default function CustomHook1() {
  const position=scrollPosition()
  return (
    <div style={{ padding: '1000px 0' }}>
      <h2> 222222222222---{position}</h2>
    </div>
  )
}

