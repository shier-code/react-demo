/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 15:15:51
 * @LastEditors: went
 * @LastEditTime: 2021-11-01 16:58:11
 */
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from './router'
import store from './store'

import WTAppHeader from '@/components/app-header'
import WTAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WTAppHeader />
        {renderRoutes(routes)}
        <WTAppFooter />
      </HashRouter>
    </Provider>

  )
})
