/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-23 19:53:06
 * @LastEditors: went
 * @LastEditTime: 2021-09-26 11:27:09
 */
import React, { useState, memo, useMemo } from 'react'
//函数组件包裹memo,避免子组件重新渲染
const HYInfo = memo((props) => {
  console.log('HYInfo 子组件重新渲染');
  
  return <div> 名字：{props.info.name}</div>
})
export default function UseMemoDemo2() {
  console.log('重新渲染');
  const [show, setShow] = useState(true)
  //直接定义info，局部变量浅层比较发现每次info都不同，会导致重新渲染/可使用useState避免
  // const info= { name: 'shier' }
  const info = useMemo(() => {
    return { name: 'shier' }
  }, [])

  return (
    <div>
      <HYInfo info={info}></HYInfo>
      <button onClick={e => setShow(!show)}>show</button>
    </div>
  )
}
