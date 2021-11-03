/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 14:24:44
 * @LastEditors: went
 * @LastEditTime: 2021-11-03 16:03:11
 */
import React, {  memo } from 'react';
// import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// import {
//   getAlbum
// } from "../../store/actionCreators";

// import { Carousel } from 'antd';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';

import {
  AlbumWrapper
} from "./style";

export default memo(function HYNewAlbum(props) {
  // redux



  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" moreLink="/discover/album"/>
   
    </AlbumWrapper>
  )
})
