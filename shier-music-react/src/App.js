/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 15:15:51
 * @LastEditors: went
 * @LastEditTime: 2021-10-29 17:36:06
 */
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import routes from './router'

import WTAppHeader from '@/components/app-header'
import WTAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
      <WTAppHeader />
      {renderRoutes(routes)}
      <WTAppFooter />
    </HashRouter>
  )
})
