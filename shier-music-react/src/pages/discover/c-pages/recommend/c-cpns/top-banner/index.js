/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 10:22:50
 * @LastEditors: went
 * @LastEditTime: 2021-11-03 11:50:28
 */
import React, { memo, useEffect, useCallback, useState, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  getTopBannerAction
} from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';
export default memo(function WTTopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const { topBanners } = useSelector(state => ({
    // topBanners: state.recommend.topBanners
    // topBanners: state.getIn(["recommend","topBanners"]) 
    topBanners: state.get('recommend').get('topBanners')
  }), shallowEqual);//浅层比较

  const dispatch = useDispatch();
  //其他hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  //函数作为参数传递到下一个组件，useCallback对当前函数缓存记忆，返回得函数指向同一个引用
  //不会造成子组件刷新
  const bannerChange = useCallback(
    (from, to) => {
      setCurrentIndex(to)
    },
    [],
  )

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+ "?imageView&blur=40x20")
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef}
            beforeChange={bannerChange}>
            {
              topBanners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}> </button>
          <button className="btn right" onClick={e => bannerRef.current.next()}> </button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
