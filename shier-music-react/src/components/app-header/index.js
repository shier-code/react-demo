/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 16:21:57
 * @LastEditors: went
 * @LastEditTime: 2021-11-01 19:21:56
 */
import React, { memo } from 'react'
import { headerLinks } from '@/services/local-data.js'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from './style.js'
export default memo(function WTAPPHeader() {

  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>{item.title}</NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }
  return (
    <AppHeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"> </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholede="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>

      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
})
