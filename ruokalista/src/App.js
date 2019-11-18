import React, {Component} from 'react';
import './css/App.css';
import FazerMenu from './components/FazerMenu';
import Kello from './components/Clock';
import Background from './components/Background';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Kello/>
          <FazerMenu/>
          <Background/>
        </div>
    );
  }
}

export default App;
