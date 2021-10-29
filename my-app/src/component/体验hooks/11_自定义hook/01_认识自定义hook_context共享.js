/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2021-09-29 15:55:28
 * @LastEditors: went
 * @LastEditTime: 2021-09-29 16:29:53
 */
import React, { createContext } from 'react'
import useUserContext from "./hooks/user-hooks"
export const UserContext = createContext()
export const TokenContext = createContext()
export default function CustomHook1() {
  return (
    <div>
      <UserContext.Provider value={{ name: "why", age: 18 }}>
        <TokenContext.Provider value="123455678">
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
function CustomContextShareHook() {
  const [user, token] = useUserContext()
  console.log(user,token)
  return (
    <div></div>
  )
}
