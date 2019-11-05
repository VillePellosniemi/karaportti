import React, {Component} from 'react';
import './App.css';
import SodexoMenu from './SodexoMenu';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="left">
            <img id="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Sodexo.svg/1200px-Sodexo.svg.png" alt={"logo"}/>
            <SodexoMenu/>
          </div>
        </div>
    );
  }
}

export default App;
