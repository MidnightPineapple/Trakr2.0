import React, { Component } from 'react';

class ButtonBox extends Component {
  render() {

    return (
      <div className = "">
        <button onClick={() => this.props.onClick()} className=" team-display">{this.props.title}</button>
      </div>
    );
  }
}

export default ButtonBox;
