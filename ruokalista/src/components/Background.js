import React, {Component} from 'react';
import '../css/App.css';

class Background extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videoURL: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    }
  }

  render () {
    return (
        <video id="myVideo" loop autoPlay controls muted>
          <source src={this.state.videoURL} type="video/mp4" />
          <source src={this.state.videoURL} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
    )
  }
}

export default Background;
