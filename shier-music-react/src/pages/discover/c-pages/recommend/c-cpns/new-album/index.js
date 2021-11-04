/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 14:24:44
 * @LastEditors: went
 * @LastEditTime: 2021-11-04 16:34:38
 */
import React, { memo, useEffect, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {
  getNewAlbumAction
} from "../../store/actionCreators";
import { Carousel } from 'antd';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYAlbumCover from "@/components/album-cover";
import {
  AlbumWrapper
} from "./style";

export default memo(function WTNewAlbum(props) {
  // redux
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()


  const carouselRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="arrow arrow-left sprite_02"
          onClick={e => carouselRef.current.prev()}></div>
        <div className="album">
          <Carousel ref={carouselRef}>
            {
              [0, 1].map(item => {
                return (
                  <div className="page">{newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                    return (
                      <HYAlbumCover key={item.id} info={iten} />
                    )
                  })}
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <div className="arrow arrow-right sprite_02"
          onClick={e => carouselRef.current.next()}></div>
      </div>
    </AlbumWrapper>
  )
})
