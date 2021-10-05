import React, { createContext, useContext } from 'react'

const UserContext = createContext()
const ThemeContext = createContext()

export default function userContext() {
    return (
        <div>
            <UseContext.Provider value={{ name: "shier" }}>
                <ThemeContext.Provider value={{ color: 'red' }}>
                    <ChildContext ></ChildContext>
                </ThemeContext.Provider>
            </UseContext.Provider>
        </div>
    )
}
function ChildContext() {
    const user = useContext(UserContext)
    const theme = useContext(ThemeContext)
    return (
        <div>{user.name}--{theme.color}</div>
    )
}
