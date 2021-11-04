/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 14:33:02
 * @LastEditors: went
 * @LastEditTime: 2021-11-04 16:34:57
 */
import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopData
} from "../../store/actionCreators";

import WTThemeHeaderRCM from '@/components/theme-header-rcm';
import WTTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function HYRankingList() {
  // redux

  const dispatch = useDispatch()
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);
  // hooks
  useEffect(() => {
    dispatch(getTopData(0));
    dispatch(getTopData(2));
    dispatch(getTopData(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <WTThemeHeaderRCM title="榜单" moreLink="/discover/ranking" />
      <div className="tops">
        <WTTopRanking info={state.topUpList} />
        <WTTopRanking info={state.topNewList} />
        <WTTopRanking info={state.topOriginList} />
      </div>
    </RankingWrapper>
  )
})
