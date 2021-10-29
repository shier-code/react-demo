/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-29 15:55:28
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 16:29:53
 */
import React from 'react'
import useLocalStorage from './hooks/local-store-hook';

export default function DataStore() {
  const [name, setName] = useLocalStorage('name')
  return (
    <div style={{ padding: '1000px 0' }}>
      <h2> {name}</h2>
      <button onClick={e => setName('why')}>设置name</button>
    </div>
  )
}

