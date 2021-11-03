/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 14:33:02
 * @LastEditors: went
 * @LastEditTime: 2021-11-03 16:03:38
 */
import React, { useEffect, memo } from 'react';
// import { useDispatch, useSelector, shallowEqual } from "react-redux";

// import {
//   getTopData
// } from "../../store/actionCreators";

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
// import HYTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function HYRankingList() {
  // redux


  // hooks
  useEffect(() => {
    // dispatch(getTopData(0));
    // dispatch(getTopData(2));
    // dispatch(getTopData(3));
  }, [])

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
  
    </RankingWrapper>
  )
})
