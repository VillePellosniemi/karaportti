import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import '../css/App.css';

class Background extends Component {
  render() {
    return (
        <div className="video-wrapper">
          <ReactPlayer
              className="vid"
              width="100%"
              height="866px"
              url="https://youtu.be/kd-JzOpVd0E"
              muted
              playing
              loop
          />
        </div>
    );
  }
}

export default Background;
