/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-11-03 13:54:57
 * @LastEditors: went
 * @LastEditTime: 2021-11-03 14:23:43
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'
const WTThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className='title'>{title}</h3>
        <div className="keyword">
          {
            keywords.map(item => {
              return (
                <div className="item" key={item}>
                  <a href="tode">{item}</a>
                  <span className="divider"></span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="tod0">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
WTThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
WTThemeHeaderRCM.defaultProps = {
  keywords: []
}
export default WTThemeHeaderRCM;