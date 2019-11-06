import React, {Component} from 'react';
import './App.css';
import SodexoMenu from './SodexoMenu';
import FazerMenu from './FazerMenu';

class App extends Component {
  render() {
    return (
        <div className="App">
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
