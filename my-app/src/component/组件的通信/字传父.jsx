import React, { Component } from 'react'

class Counterbutton extends Component {
    render() {
        const { increament } = this.props
        return <button onClick={increament}>子组件按钮</button>
    }
}
export default class 字传父 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                {this.state.counter}
                <Counterbutton increament={ ()=>this.increament()} />
            </div>
        )
    }
    increament() {
        console.log(111);
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
