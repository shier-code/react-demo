# webpack配置
+ npm i @craco/craco --save
+ 创建文件craco.config.js（同vue.config.js）

# 路由前置配置
```
//npm i react-router-config --save
import { renderRoutes } from 'react-router-config'
//npm i react-router-dom --save
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
```