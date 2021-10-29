/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 16:21:57
 * @LastEditors: went
 * @LastEditTime: 2021-10-29 17:20:08
 */
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function WTAPPHeader() {
  return (
    <div>
      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/mine">发现音乐</NavLink>
      <NavLink to="/friend">发现音乐</NavLink>
    </div>
  )
})
