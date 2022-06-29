import React, { Component } from "react";
import Clock from "./Clock";

class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isClockShown: true, count: 0 };
  }

  handleCountButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleShowButtonClick = () => {
    this.setState({ isClockShown: !this.state.isClockShown });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should");
    if (nextState.count >= 10) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did");

    if (prevState.count % 2 === 0) {
      alert(`${prevState.count} is EVEN!!`);
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>LifeCycleComponent</h1>
        <div>
          <h6>{this.state.count}</h6>
          <button onClick={this.handleCountButtonClick}>count up</button>
        </div>
        <div>
          <button onClick={this.handleShowButtonClick}>show clock</button>
        </div>
        {this.state.isClockShown && <Clock />}
      </div>
    );
  }
}

export default LifeCycleComponent;
