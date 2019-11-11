import React, {Component} from 'react';
import './css/App.css';
import SodexoMenu from './components/SodexoMenu';
import FazerMenu from './components/FazerMenu';
import Moment from './components/Moment';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Moment/>
          <div className="left">
            <SodexoMenu/>
          </div>
          <div className="right">
            <FazerMenu/>
          </div>
        </div>
    );
  }
}

export default App;
