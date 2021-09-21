import React, { Component } from 'react'

function ProfileHeader(props) {
    return (
        <div>
            祖父組件傳過來的内容：
            <h3> {props.nickName}</h3>
        </div>
    )
}
function Profile(props) {
    return (
        <div>
            <ProfileHeader {...props} />
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
            nickName: 'sheir'
        }
    }
    render() {
        return (
            <div>
                <Profile nickName={this.state.nickName}></Profile>
            </div>
        )
    }
}
