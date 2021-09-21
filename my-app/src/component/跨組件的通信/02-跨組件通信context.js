import React, { Component } from 'react'

//創建context對象
const UserContext = React.createContext({
    nickName: "shier"//默認值
})
class ProfileHeader extends Component {
    render() {
        console.log(this.context)
        return (
            <div>
                祖父組件傳過來的内容：
                <h3> {this.context.nickName}</h3>
            </div>
        )
    }
}
ProfileHeader.contextType=UserContext
function Profile() {
    return (
        <div>
            <ProfileHeader />
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nickName: 'sheir--luoxue'
        }
    }
    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <Profile />
                </UserContext.Provider>

            </div>
        )
    }
}
