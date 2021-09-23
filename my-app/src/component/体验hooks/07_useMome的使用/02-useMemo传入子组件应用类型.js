/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-23 19:53:06
 * @LastEditors: went
 * @LastEditTime: 2021-09-23 20:00:59
 */
import React, { useState, memo, useMemo } from 'react'
const HYInfo = memo((props) => {
  return <div> 名字：{props.info.name}</div>
})
export default function UseMemoDemo2() {
  console.log('重新渲染');
  const [show, setShow] = useState(true)
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
