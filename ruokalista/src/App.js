import React, {Component} from 'react';
import './css/App.css';
import SodexoMenu from './components/SodexoMenu';
import FazerMenu from './components/FazerMenu';
import Background from './components/Background';

class App extends Component {
  render() {
    return (
        <div className="App">
          <SodexoMenu/>
          <FazerMenu/>
          <Background/>
        </div>
    );
  }
}

export default App;
