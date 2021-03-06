import React, { Component } from "react";

class MyButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

export default MyButton;
