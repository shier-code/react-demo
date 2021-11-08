/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-08 11:04:28
 * @LastEditors: went
 * @LastEditTime: 2021-11-08 11:53:58
 */
import React, { memo } from 'react'
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
export default memo(function index() {
  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play"></button>
          <button className="sprite_playbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src="https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34" alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name"></span>
              <span className="singer-name"></span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time"></span>
                <span className="divider">/</span>
                <span className="total-time"></span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>

        </Operator>
      </div>
    </PlaybarWrapper>
  )
})
