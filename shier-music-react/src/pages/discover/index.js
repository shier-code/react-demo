/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 17:12:04
 * @LastEditors: went
 * @LastEditTime: 2021-11-02 11:43:18
 */
import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import {
  dicoverMenu
} from "@/services/local-data";
import {
  DiscoverWrapper,
  TopMenu
} from "./style";

import request from '@/services/axios.js'
import { NavLink } from 'react-router-dom';
export default memo(function WTDiscover(props) {
  useEffect(() => {
    request({
      url: "/banner"
    }).then(res => {
    })
  }, [])
  const { route } = props
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
