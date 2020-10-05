// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {

  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    }, () => console.log(this.state))
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
