/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2020-08-14 14:11:37
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-15 11:21:55
 */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ComponentLife from "./component/ComponentLife.jsx";
import TodoList from "./component/TodoList.jsx";
import ForkeyDemo from "./component/ForKeyDemo.jsx"
import FormDemo from "./component/FormDemo.jsx"
import RefsFoem from "./component/RefsForm.jsx";
import PropsType from "./component/PropsType.jsx";
import UserAntd from "./component/UserAntd";
// eslint-disable-next-line
import UserFetch from "./component/userFetch";
import Parent from "./component/stateUp/parent";
import Componse from "./component/Componse";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import UCenter from "./pages/UCenter";
import Notfound from "./pages/Notfound";
import Demo from "./pages/Demo";
import Nav from "./component/Nav/index"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "app内容"
    }
  }
  changeTitle() {
    this.setState({
      title: "app内容2222"
    })
  }
  render() {
    return (
      <div>
        <TodoList></TodoList>
        <hr />
        <ComponentLife title={this.state.title}></ComponentLife>

        <button onClick={this.changeTitle.bind(this)}>修改title</button>
        <hr />
        <ForkeyDemo></ForkeyDemo>
        <hr />
        <FormDemo></FormDemo>
        <hr />
        <RefsFoem></RefsFoem>
        <hr />

        {/* 组件传值 */}
        <h2>组件传值</h2>
        <PropsType title={this.state.title}></PropsType>
        <hr />
        <UserAntd></UserAntd>
        <hr />
        {/* <UserFetch></UserFetch> */}
        <hr />
        <Parent></Parent>
        <hr />
        <Componse><div>Componse组合效果</div></Componse>
        <hr />
        <h3>这里是路由demo</h3>
        <Router>
          <Nav />
          <Switch>
            {/* 精准匹配 */}
            <Redirect from="/hellomine" to="/mine"> </Redirect>
            <Route strict exact path="/" component={Home} ></Route>
            <Route strict exact path="/mine/:id?" component={Mine} ></Route>
            <Route strict exact path="/mine/ucenter" component={UCenter}></Route>
            <Route strict exact path="/demo" render={(props) => <Demo {...props} name="你好" />}></Route>

            <Route component={Notfound}></Route>
          </Switch>
        </Router>

      </div>
    )
  }
}
export default App;
