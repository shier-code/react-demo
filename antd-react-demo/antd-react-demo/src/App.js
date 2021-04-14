/*
 * @Descripttion: 
 * @version: v3.10
 * @Author: wentan
 * @Date: 2021-04-14 09:49:40
 * @LastEditors: wentan
 * @LastEditTime: 2021-04-14 10:48:00
 */
import { Button } from 'antd';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}

export default App;
