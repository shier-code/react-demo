<!--
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-10-29 15:59:32
 * @LastEditors: went
 * @LastEditTime: 2021-11-03 09:54:37
-->
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
# hook useSelector的问题
> useSelector没有浅层比较，而是===全等比较，会导致没有依赖某个data的组件重新渲染，影响性能，故通常在useSelector第二个参数加入shallowEqual

# immutableJS的使用
> 特点：只要修改了对象，就会返回一个新的对象，旧的对象不会发生改变
> 不使用扩展运算符进行浅拷贝，因为复杂数据消耗性能
# useCallback
> 函数作为参数传递到子组件，useCallback对当前函数缓存记忆，返回得函数指向同一个引用,不会造成子组件刷新