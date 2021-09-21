import React, {
    Component
} from 'react'
import TabControl from './TabControl';
export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            currentTitle:"新款",
            title:['新款','推荐','我的']
        }
    }
    render() {
        const {currentTitle,title}=this.state
        return ( 
            <div>
                <TabControl title={title} itemClickChild={index=>this.itemClick(index)}/>
                <h2>{currentTitle}</h2>
            </div>
        )
    }
    itemClick(index){
        const {title}=this.state
        this.setState({
            currentTitle:title[index]
        })
        console.log(index)
    }
}