import React, { Component } from "react";

export class CustomName extends Component {
  renderHeader = () => {
    if (this.props.match.params.name) {
      let input = this.props.match.params.name;
      return (
        <div>
          <h3>Hi {input}</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Didn't catch that </h3>
        </div>
      );
    }
  };

  render() {
    console.log('this component was found')
    return <div>{this.renderHeader()}</div>;
  }
}

export default CustomName;
