import React, { useState } from 'react'

export default function CounterHook() {
    /**
     * useState
     * 本身是一个函数
     * 1、参数：给创建出来的状态一个默认值
     * 2、返回值：数组   
     *     元素1：当前state的值(第一次调用为初始化的值)
     *     元素2：设置新的值使用的函数
     */
    // const arr = useState(0)
    // const state = arr[0]
    // const setState=arr[1]
    const [state,setState]=useState(0)
    return (
        <div>
            <h2>{state}</h2>
            <button onClick={e=>setState(state+1)}>+1</button>
            <button onClick={e=>setState(state-1)}>-1</button>
        </div>
    )
}
