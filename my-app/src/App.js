/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2020-08-14 14:11:37
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-14 12:45:55
 */
import React from 'react';
import './App.css';
import ComponentLife from "./component/ComponentLife.jsx";
import TodoList from "./component/TodoList.jsx";
import ForkeyDemo from "./component/ForKeyDemo.jsx"
import FormDemo from "./component/FormDemo.jsx"
import RefsFoem from "./component/RefsForm.jsx";
import PropsType from "./component/PropsType.jsx";
import UserAntd from "./component/UserAntd";
import UserFetch from "./component/userFetch";
import Parent from "./component/stateUp/parent";
import Componse from "./component/Componse";
// function App() {
//   return (
//     <div className="App">
//       hello
//     </div>
//   );
// }

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
        <PropsType title={this.state.title}></PropsType>
        <hr />
        <UserAntd></UserAntd>
        <hr />
        <UserFetch></UserFetch>
        <hr />
        <Parent></Parent>
        <hr />
        <Componse><div>Componse组合效果</div></Componse>
      </div>
    )
  }
}
export default App;
