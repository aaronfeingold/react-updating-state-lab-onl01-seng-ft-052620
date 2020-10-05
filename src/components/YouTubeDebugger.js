// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
  
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleResolutionChange = () => {
    // Update our state here...
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  };
  handleBitrateChange = () => {
    // Update our state here...
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12
      }
    })
  };

  render() {
    return (
      <div>
         <button className="bitrate" onClick={this.handleBitrateChange}></button>
         <button className="resolution" onClick={this.handleResolutionChange}></button>
      </div>
    )
  }
}

export default YouTubeDebugger
