import React, { Component } from 'react';

class ButtonBox extends Component {
  render() {

    return (
      <div className = "col-md-6 col-lg-3">
        <div className=" team-display">{this.props.title}</div>
      </div>
    );
  }
}

export default ButtonBox;
