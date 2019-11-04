import React, {Component} from 'react';
import './App.css';
import FazerMenu from './FazerMenu';
import SodexoMenu from './SodexoMenu';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="left">
            <h1>Sodexo</h1>
            <SodexoMenu/>
          </div>
          <div className="right">
            <h1>Fazer</h1>
            <FazerMenu/>
          </div>
        </div>
    );
  }
}

export default App;
