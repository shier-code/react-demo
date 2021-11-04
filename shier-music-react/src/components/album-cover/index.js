/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-04 13:39:34
 * @LastEditors: went
 * @LastEditTime: 2021-11-04 14:00:35
 */
import React, { memo } from 'react'
import { AlbumWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function WTAlbumCover(props) {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt="" />
        <a href="/abc" className="cover sprite_covor">{info.name}</a>
      </div>
      <div className="album-image">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
