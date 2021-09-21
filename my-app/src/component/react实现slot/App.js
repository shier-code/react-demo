import React, { Component } from 'react'
import NavBar2 from './NavBar2';
export default class App extends Component {

    render() {
        return (
            <div>
                {/* <NavBar>
                    <span>aaa</span>
                    <span>bbb</span>
                    <span>ccc</span>
                </NavBar> */}
                <NavBar2 leftSlot={<span>aaa</span>}
                    centerSlot={<span>bbb</span>}
                    rightSlot={<span>ccccc</span>} />
            </div>
        )
    }
}
