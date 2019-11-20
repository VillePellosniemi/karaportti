import React, { Component } from 'react';
import '../css/Clock.css';
import Clock from 'react-clock';

class Kello extends Component {

  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
        () => this.setState({ date: new Date() }),
        1000
    );
  }

  render() {
    return (
        <div className="outer">
          <div className="left">
            <Clock
                value={this.state.date}
                size={600}
                renderNumbers={true}
                hourHandWidth={11}
                hourHandLength={55}
                hourHandOppositeLength={10}
                hourMarksWidth={5}
                hourMarksLength={10}
                minuteHandWidth={6}
                minuteHandLength={85}
                minuteHandOppositeLength={10}
                minuteMarksWidth={1}
                secondHandWidth={2}
                secondHandLength={95}
            />
          </div>
        </div>
    );
  }
}

export default Kello;
