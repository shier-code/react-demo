/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 13:46:07
 * @LastEditors: went
 * @LastEditTime: 2021-11-03 16:47:26
 */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RecommendWrapper } from './style'
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import WTSongsCover from '@/components/songs-cover'
import { getHotRecommendAction } from '../../store/actionCreators';
export default memo(function WTHotRecommend() {


  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])
  return (
    <RecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣']} />
      <div className="recommend-list">
        {
          hotRecommends.map(item => {
            return (
              <WTSongsCover key={item.id} info={item}>{item.name}</WTSongsCover>
            )
          })
        }
      </div>
    </RecommendWrapper>
  )
})
