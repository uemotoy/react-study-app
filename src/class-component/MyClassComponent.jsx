import React from "react";
import MyButton from "./MyButton";

class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, text: "" };
    this.handleMinusButtonClick = this.handleMinusButtonClick.bind(this);
  }

  handlePlusButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButtonClick() {
    this.setState({ count: this.state.count - 1 });
  }

  handleTextChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>MyClassComponent</h1>
        <dvi>{this.state.count}</dvi>
        <div>
          <button onClick={this.handlePlusButtonClick}>+</button>
          <button onClick={this.handleMinusButtonClick}>-</button>
          <button onClick={() => this.setState({ count: 0 })}>RESET</button>
        </div>
        <div>
          <MyButton onClick={this.handlePlusButtonClick}>PLUS</MyButton>
          <MyButton onClick={this.handleMinusButtonClick}>MINUS</MyButton>
        </div>
        <div>
          <input value={this.state.text} onChange={this.handleTextChange} />
        </div>
      </div>
    );
  }
}

export default MyClassComponent;
