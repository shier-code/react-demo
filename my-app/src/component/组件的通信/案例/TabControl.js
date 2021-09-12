import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class TabControl extends Component {
    constructor(props){
        super(props)
        this.state={
            currentIndex:0
        }
    }
    render() {
        const {title}=this.props
        const {currentIndex}=this.state
        return (
            <div className="tab-control">
                {
                    title.map((item,index)=>{
                        return (<div className={'tab-item '+(index===currentIndex?'active':'')}
                                       key={index}
                                       onClick={e=>this.itemClick(index)}>
                                <span>{item}</span>  
                              </div>)
                    })
                }
            </div>
        )
    }
    itemClick(index){
        debugger
        this.setState({
            currentIndex:index
        })
    }
}
TabControl.propTypes={
    title:PropTypes.array.isRequired
}
