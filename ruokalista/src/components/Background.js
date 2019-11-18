import React, {Component} from 'react';
import '../css/App.css';

class Background extends Component {
  render () {
    return (
        <div>
          <video autoPlay muted loop id="myVideo">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
              Your browser does not support HTML5 video.
          </video>
        </div>
    )
  }
}

export default Background;
