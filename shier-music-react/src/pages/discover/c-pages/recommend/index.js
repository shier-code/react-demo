/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-01 15:18:04
 * @LastEditors: went
 * @LastEditTime: 2021-11-04 17:06:29
 */
import React, { memo } from 'react'
import WTTopBanner from './c-cpns/top-banner';
import WTHotRecommend from './c-cpns/hot-recommend';
import WTNewAlbum from './c-cpns/new-album';
import WTRankingList from './c-cpns/ranking-list';
import WTUserLogin from './c-cpns/user-login';
import WTSettleSinger from './c-cpns/settle-singer';
import WTHotRadio from './c-cpns/hot-radio';
import {
  RecommendWraper,
  Content,
  RecommendLeft,
  RecommendRight
} from "./style";


function WTRecommend(props) {

  return (
    <RecommendWraper>
      <WTTopBanner></WTTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <WTHotRecommend />
          <WTNewAlbum />
          <WTRankingList />
        </RecommendLeft>
        <RecommendRight>
          <WTUserLogin />
          <WTSettleSinger />
          <WTHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
}
export default memo(WTRecommend)
// function WTRecommend(props) {
//   const { getBanners, topBanners } = props;
//   console.log('2222', props);

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       {topBanners.length}
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(WTRecommend))
