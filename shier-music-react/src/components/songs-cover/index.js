/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 16:32:34
 * @LastEditors: went
 * @LastEditTime: 2021-11-11 13:58:15
 */
import React, { memo } from 'react'
import { ThemeCoverWrapper } from './style'
import {
  getSizeImage,
  getCount
} from "@/utils/format-utils";
export default memo(function WTSongsCover(props) {
  const { info, right } = props;
  return (
    <ThemeCoverWrapper right={right}>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        {/* by {info.copywriter || info.creator.nickname} */}
      </div>
    </ThemeCoverWrapper>
  )
})
