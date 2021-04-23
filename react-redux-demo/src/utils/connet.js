import React, { PureComponent } from "react"
import { StoreContext } from "./context"
/*
 * @Desc: 
 * @Version: v1.00
 * @Author: wentan
 * @Date: 2021-04-21 17:26:54
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-22 16:49:51
 */
export function connect(mapStateToProps, mapDispatchToProps) {

  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        return <WrappedComponent {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispatchToProps(this.context.dispatch)} />
      }
    }
    EnhanceComponent.contextType = StoreContext;
    return EnhanceComponent;
  }
}