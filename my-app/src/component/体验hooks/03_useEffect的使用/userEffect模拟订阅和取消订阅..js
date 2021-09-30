/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-22 14:59:31
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 11:34:31
 */
import React, { useState, useEffect } from 'react'
// useEffect会在会在渲染的内容更新到dom之后执行
export default function EffectHockCancelDemo() {
    const [counter, setState] = useState(0)
    //多个useEffect按定义顺序执行,
    //第二个参数绑定的值更新了才会执行该useEffect
    useEffect(() => {
        console.log('修改dom ')
        return () => {
            /* 组件更新执行 :componentWillUnmount*/
            console.log('取消dom绑定 ')
        }
    }, [counter])
    useEffect(() => {
        console.log('订阅事件 ')
        return () => {
            /* 组件更新执行 :componentWillUnmount*/
            console.log('组件卸载，取消订阅')
        }
    }, [])

    return (
        <div>

            <h1>{counter}</h1>
            <button onClick={e => setState(counter + 1)}>+1</button>
        </div>
    )
}
