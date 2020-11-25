import React, { Component, Fragment } from "react"
class TodoList extends Component {
    //constructor在组件创建的第一时刻自动被执行
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            list: []
        }
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleKeyUp(e) {
        if (e.keyCode === 13 && e.target.value !== "") {
            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                list,
                inputValue: ''
            })
        }
    }
    handleitemClick(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }
    getListItem() {
        return this.state.list.map((value, index) => {
            return <li onClick={this.handleitemClick.bind(this, index)} key={index}>{value}</li>
        })
    }
    render() {
        return (

            <Fragment>
                {/* jsx注释*/}
                <label htmlFor="myInput">请输入内容：</label>
                <input id='myInput' className='input' onKeyUp={this.handleKeyUp.bind(this)} onChange={this.handleInputChange.bind(this)} value={this.state.inputValue} />
                <ul >
                    {this.getListItem()}
                </ul>
            </Fragment>

        )

    }
}
export default TodoList