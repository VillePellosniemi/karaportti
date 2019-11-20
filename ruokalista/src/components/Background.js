import React, {Component} from 'react';
import '../css/App.css';


class Background extends Component {
  render () {
    return (
        <div className="videoBgWrapper">
          <video loop muted autoPlay
                 className="videoBg">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
          </video>
        </div>
    )
  }
}

export default Background;
