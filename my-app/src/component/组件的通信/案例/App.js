import React, {
    Component
} from 'react'
import TabControl from './TabControl';
export default class App extends Component {
    render() {
        return ( 
            <div>
                <TabControl title={['新款','推荐','我的']}/>
            </div>
        )
    }
}