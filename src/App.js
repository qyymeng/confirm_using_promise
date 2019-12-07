import React, { useState } from 'react';
import Confirm from "./Confirm";
import "./styles.css";

const myRef = React.createRef();

class App extends React.Component {
  showModal = () => {
    const modal = myRef.current;
    setTimeout(async () => {
      try {
        // Wait user to confirm !
        const result = await modal.show();
        // this line below is executed only after user click on OK
        alert("你点击了确定!");
      } catch (err) {
        alert("你点击了取消!");
      }
    }, 100);
    console.log("Waiting user for confirmation ...");
  };

  render() {
    return (
      <div className="App">
        <h1>点击按钮将显示confirm模式窗口</h1>
        <Confirm ref={myRef}>测试</Confirm>
        <button onClick={this.showModal}>显示Confirm模式窗口</button>
      </div>
    );
  }
}

export default App;
